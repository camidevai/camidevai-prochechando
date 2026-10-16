/**
 * Sincroniza los PDF de una carpeta publica de Google Drive con las tarjetas de /apob.
 * Autenticacion: GOOGLE_DRIVE_API_KEY (solo lectura, API de Google Drive).
 * El archivo JSON conserva todos los titulos, descripciones y categorias ya curados.
 */
import { readFile, writeFile } from 'node:fs/promises';

const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || '1DeTZjeO4HDFXhQj6th7mqZxr79yPNCmB';
const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
const catalogPath = 'src/apob/guides.json';

if (!apiKey) {
  console.error('Falta GOOGLE_DRIVE_API_KEY. Configura el secreto APOB_DRIVE_API_KEY en GitHub Actions.');
  process.exit(1);
}

const titleFromFilename = (name) => {
  const cleaned = name.replace(/\.pdf$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b(?:gu[ií]a|guide|apob|camidevai|apobai)\b/gi, ' ')
    .replace(/\s+/g, ' ').trim();
  return cleaned || 'Nueva guía de APOB';
};

const categoryFromFilename = (name) => {
  const text = name.toLowerCase();
  if (/hogwarts|harry|cine|historia|pel[ií]cula|cuento|fantas[ií]a|escena|amor|zombi/.test(text)) return 'Cine e historias';
  if (/transformaci[oó]n|transformacion|avatar|hero[ií]na|mu[nñ]eca|cambio de outfit/.test(text)) return 'Transformaciones';
  if (/3d|producto|publicidad|packaging|marca|llavero|comercial/.test(text)) return 'Publicidad y 3D';
  if (/trend|efecto|viral|transici[oó]n|transicion|c[aá]mara/.test(text)) return 'Efectos y trends';
  if (/foto|fotograf[ií]a|imagen|retrato|realismo|estilo/.test(text)) return 'Imagen y estilo';
  return 'Primeros pasos';
};

async function loadDrivePdfs() {
  const files = [];
  let pageToken;
  do {
    const endpoint = new URL('https://www.googleapis.com/drive/v3/files');
    endpoint.searchParams.set('key', apiKey);
    endpoint.searchParams.set('q', `'${folderId}' in parents and mimeType = 'application/pdf' and trashed = false`);
    endpoint.searchParams.set('fields', 'nextPageToken,files(id,name,mimeType,createdTime,webViewLink)');
    endpoint.searchParams.set('pageSize', '1000');
    endpoint.searchParams.set('supportsAllDrives', 'true');
    endpoint.searchParams.set('includeItemsFromAllDrives', 'true');
    if (pageToken) endpoint.searchParams.set('pageToken', pageToken);
    const res = await fetch(endpoint, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`Google Drive API: HTTP ${res.status}: ${(await res.text()).slice(0, 500)}`);
    const data = await res.json();
    if (!Array.isArray(data.files)) throw new Error('Google Drive API no devolvió una lista de archivos.');
    files.push(...data.files);
    pageToken = data.nextPageToken;
  } while (pageToken);

  if (!files.length) throw new Error('Drive devolvió 0 PDF. Se cancela la sincronización para evitar cambios incorrectos.');
  const ids = new Set();
  return files.filter(file => {
    if (!file.id || !file.name || ids.has(file.id)) return false;
    ids.add(file.id);
    return true;
  });
}

const original = JSON.parse(await readFile(catalogPath, 'utf8'));
if (!Array.isArray(original)) throw new Error('El catálogo de APOB no es un arreglo JSON.');
const files = await loadDrivePdfs();
const byId = new Map(original.map(guide => [guide.id, guide]));
let added = 0;

for (const file of files) {
  if (byId.has(file.id)) continue;
  const guide = {
    id: file.id,
    title: titleFromFilename(file.name),
    category: categoryFromFilename(file.name),
    description: 'Aprende a recrear este efecto con las instrucciones y prompts de la guía APOB.',
    date: (file.createdTime || new Date().toISOString()).slice(0, 10),
    url: `https://drive.google.com/file/d/${encodeURIComponent(file.id)}/view`,
    fileName: file.name,
  };
  original.push(guide);
  byId.set(guide.id, guide);
  added++;
}
original.sort((a, b) => b.date.localeCompare(a.date));
const output = JSON.stringify(original, null, 2) + '\n';
const previous = await readFile(catalogPath, 'utf8');
if (output !== previous) await writeFile(catalogPath, output, 'utf8');
console.log(`Drive: ${files.length} PDF | Nuevas guías: ${added} | Total en la web: ${original.length}`);

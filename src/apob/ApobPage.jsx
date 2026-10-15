import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useSeo } from '../herramientas/useSeo'
import guides from './guides.json'
import './apob.css'

const categories = ['Todas', 'Primeros pasos', 'Transformaciones', 'Cine e historias', 'Efectos y trends', 'Imagen y estilo', 'Publicidad y 3D']
const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const folder = 'https://drive.google.com/drive/folders/1DeTZjeO4HDFXhQj6th7mqZxr79yPNCmB'
const dateLabel = (date) => new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date))

function GuideCard({ guide, index }) {
  const [failed, setFailed] = useState(false)
  return <article className="ap-guide">
    <a className="ap-guide-cover" href={guide.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir guía: ${guide.title}`}>
      {!failed ? <img src={asset(`apob/${guide.id}.webp`)} alt={`Portada de ${guide.title}`} loading={index < 3 ? 'eager' : 'lazy'} width="600" height="850" onError={() => setFailed(true)} /> : <span className="ap-cover-fallback">APOB<span>{guide.title}</span></span>}
      <span className="ap-pdf">PDF ↗</span>
      <span className="ap-cover-cta">Ver guía paso a paso ↗</span>
    </a>
    <div className="ap-guide-content">
      <span className="ap-category">{guide.category}</span>
      <h3><a href={guide.url} target="_blank" rel="noopener noreferrer">{guide.title}</a></h3>
      <p>{guide.description}</p>
      <div className="ap-card-bottom"><time dateTime={guide.date}>{dateLabel(guide.date)}</time><a href={guide.url} target="_blank" rel="noopener noreferrer" aria-label={`Leer ${guide.title}`}>Leer guía <span aria-hidden="true">↗</span></a></div>
    </div>
  </article>
}

export default function ApobPage() {
  useSeo({ title: 'Guías APOB paso a paso | CamiDevAI', description: 'Aprende a crear videos con IA con las guías de CamiDevAI. Explora tutoriales APOB, transformaciones, efectos, historias y prompts paso a paso.' })
  const [params, setParams] = useSearchParams()
  const query = params.get('q') || ''
  const category = categories.includes(params.get('categoria')) ? params.get('categoria') : 'Todas'
  const sort = ['recientes', 'antiguas', 'az'].includes(params.get('orden')) ? params.get('orden') : 'recientes'
  function update(key, value) {
    setParams((current) => { const next = new URLSearchParams(current); if (!value || value === 'Todas' || (key === 'orden' && value === 'recientes')) next.delete(key); else next.set(key, value); return next }, { replace: true })
  }
  const visible = guides.filter(g => (category === 'Todas' || g.category === category) && normalize(`${g.title} ${g.category} ${g.description} ${g.fileName}`).includes(normalize(query.trim()))).sort((a, b) => sort === 'az' ? a.title.localeCompare(b.title, 'es') : sort === 'antiguas' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date))
  return <div className="apob-page">
    <a className="ap-skip" href="#guias">Ir a las guías</a>
    <header className="ap-nav"><Link className="ap-brand" to="/">CamiDevAI<span>✦</span></Link><nav aria-label="Navegación de guías"><Link to="/">Inicio</Link><Link to="/herramientas">Herramientas</Link><a className="ap-nav-active" href="#guias">Guías APOB</a></nav><a className="ap-button ap-button-small" href="https://mega.apob.ai/Camidevai" target="_blank" rel="noopener noreferrer">Crear en APOB ↗</a></header>
    <main>
      <section className="ap-hero">
        <div className="ap-hero-copy"><span className="ap-eyebrow"><span /> EL LABORATORIO CREATIVO DE CAMIDEVAI</span><h1>Tu próxima idea.<br />Un video <em>increíble.</em></h1><p>Te enseño cómo lo hice. Explora mis guías de APOB y crea tus propios videos con IA, paso a paso.</p><div className="ap-hero-actions"><a className="ap-button" href="#guias">Explorar las guías <span>↓</span></a><span className="ap-hero-note">{guides.length} guías PDF<br /><b>Ideas para poner en práctica</b></span></div><div className="ap-hero-meta"><span>01. Elige una idea</span><span>02. Sigue la guía</span><span>03. Dale tu estilo</span></div></div>
        <div className="ap-hero-art" aria-hidden="true"><div className="ap-orbit" /><span className="ap-art-spark">✦</span><img className="ap-hero-cover ap-hero-cover-back" src={asset(`apob/${guides[1].id}.webp`)} alt="" /><img className="ap-hero-cover ap-hero-cover-front" src={asset(`apob/${guides[0].id}.webp`)} alt="" /><span className="ap-art-label">DE UNA IDEA A LA ACCIÓN <b>PROCHECHANDO ✦</b></span></div>
      </section>
      <section className="ap-library" id="guias" aria-labelledby="ap-library-title"><div className="ap-section-head"><div><span className="ap-eyebrow">APRENDE. EXPERIMENTA. CREA.</span><h2 id="ap-library-title">Encuentra tu próxima creación<span>✦</span></h2></div><a className="ap-drive-link" href={folder} target="_blank" rel="noopener noreferrer">Ver carpeta en Drive ↗</a></div>
        <div className="ap-toolbar"><div className="ap-search"><span aria-hidden="true">⌕</span><label className="ap-sr" htmlFor="ap-search">Buscar guías</label><input id="ap-search" type="search" value={query} onChange={e => update('q', e.target.value)} placeholder="Busca una idea: transformación, cine, 3D…" /></div><div className="ap-sort"><label htmlFor="ap-sort">Ordenar por</label><select id="ap-sort" value={sort} onChange={e => update('orden', e.target.value)}><option value="recientes">Más recientes</option><option value="antiguas">Más antiguas</option><option value="az">Título: A–Z</option></select></div></div>
        <div className="ap-filters" role="group" aria-label="Filtrar por temática">{categories.map(c => <button key={c} aria-pressed={category === c} className={category === c ? 'is-active' : ''} onClick={() => update('categoria', c)}>{c}<span>{c === 'Todas' ? guides.length : guides.filter(g => g.category === c).length}</span></button>)}</div>
        <div className="ap-results"><p role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'guía para explorar' : 'guías para explorar'}</p>{(query || category !== 'Todas' || sort !== 'recientes') && <button onClick={() => setParams({}, { replace: true })}>Limpiar filtros ×</button>}</div>
        {visible.length ? <div className="ap-grid">{visible.map((g, i) => <GuideCard key={g.id} guide={g} index={i} />)}</div> : <div className="ap-empty"><span>✦</span><h3>Probemos con otra idea</h3><p>No encontramos guías con estos filtros. Prueba otra palabra o explora todas las categorías.</p><button className="ap-button" onClick={() => setParams({}, { replace: true })}>Ver todas las guías</button></div>}
      </section>
      <section className="ap-bottom-cta"><span>¿YA TIENES UNA IDEA?</span><h2>Ahora te toca crear a ti.</h2><p>Abre la guía que más te guste y dale tu propio giro.</p><a className="ap-button" href="https://mega.apob.ai/Camidevai" target="_blank" rel="noopener noreferrer">Abrir APOB con CamiDevAI ↗</a></section>
    </main>
    <footer className="ap-footer"><Link className="ap-brand" to="/">CamiDevAI<span>✦</span></Link><p>Procesando y echándole ganas al mismo tiempo.</p><a href={folder} target="_blank" rel="noopener noreferrer">Guías originales en Drive ↗</a><small>© {new Date().getFullYear()} CamiDevAI · Guías paso a paso</small></footer>
  </div>
}

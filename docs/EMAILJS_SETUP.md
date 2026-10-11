# Formulario web con EmailJS

Sitio actual del repositorio: https://camidevai.github.io/camidevai-prochechando/

La integración React está en `src/ContactForm.jsx` y su configuración pública en `src/emailjsConfig.js`.
Los parámetros enviados a EmailJS coinciden exactamente con la plantilla.

## Configuración en GitHub Pages

El flujo de despliegue `.github/workflows/deploy-pages.yml` lee, opcionalmente, las siguientes variables de **Settings > Secrets and variables > Actions > Variables**:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

En ausencia de variables, la aplicación utiliza los valores públicos proporcionados para esta integración y definidos en `src/emailjsConfig.js`.

**Importante:** EmailJS Public Key es una clave pública destinada al navegador. Nunca añadas una *Private Key* a variables `VITE_*`, HTML, JavaScript ni código del repositorio. Configura protección anti-spam y los dominios autorizados en EmailJS.

## Plantilla de EmailJS

En [EmailJS > Email Templates](https://dashboard.emailjs.com/admin/templates), abre tu plantilla y revisa:

- **To Email:** tu correo receptor elegido en EmailJS.
- **Reply To:** `{{user_email}}`
- **From Name:** `{{user_name}}`
- **Subject:** `Nuevo contacto web - {{user_name}} - {{services}}`
- **Content:** pega el HTML siguiente usando el editor HTML.

```html
<h2>📥 Nuevo contacto desde el formulario web</h2>
<p>Un usuario ha enviado un mensaje desde el sitio <strong>informatik-ai.com</strong>:</p>
<table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ddd;width:100%;">
  <tr><th align="left">Nombre</th><td>{{user_name}}</td></tr>
  <tr><th align="left">Email</th><td>{{user_email}}</td></tr>
  <tr><th align="left">Teléfono</th><td>{{phone}}</td></tr>
  <tr><th align="left">Empresa</th><td>{{company}}</td></tr>
  <tr><th align="left">Servicio de interés</th><td>{{services}}</td></tr>
  <tr><th align="left">💰 Presupuesto aproximado</th><td>{{budget}}</td></tr>
  <tr><th align="left">Mensaje</th><td style="white-space:pre-wrap">{{message}}</td></tr>
</table>
<p>Este correo fue generado automáticamente por el sistema de contacto de informatik-ai.com.</p>
```

## Verificación

1. Asegúrate de que el servicio de correo está conectado y la plantilla publicada dentro de EmailJS.
2. Envía un mensaje de prueba desde el formulario público con datos de prueba, sin información confidencial.
3. Comprueba la recepción en el destinatario configurado; si falla, revisa la consola y el historial de EmailJS.

**Nota:** El texto del email dice informatik-ai.com tal como fue facilitado, pero el formulario de este repositorio está actualmente publicado desde Prochechando. Ajusta ese nombre en EmailJS si deseas identificar el origen real.

const options = [
  { emoji:'🎬', label:'Crear videos', category:'Video' },
  { emoji:'🖼️', label:'Generar imágenes', category:'Imagen' },
  { emoji:'💻', label:'Programar', category:'Programación y Desarrollo' },
  { emoji:'📚', label:'Estudiar', category:'Educación y Estudio' },
  { emoji:'📣', label:'Crear marketing', category:'Negocios y Marketing' },
  { emoji:'⚡', label:'Ser más productivo', category:'Productividad' },
]
export default function ToolPaths() {
  function choose(category) {
    window.dispatchEvent(new CustomEvent('tools:filter', { detail: category }))
    document.getElementById('tp-catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }
  return <section className="tx-paths" id="tp-rutas" aria-labelledby="tx-paths-title">
    <div className="tx-shell"><span className="tx-kicker">ELIGE TU OBJETIVO</span><h2 id="tx-paths-title">Quiero utilizar IA para...</h2>
      <p>No tienes que conocer las herramientas de memoria. Empieza por lo que quieres conseguir.</p>
      <div className="tx-path-grid">{options.map(o=><button type="button" className="tx-path" key={o.category} onClick={()=>choose(o.category)}>
        <span aria-hidden="true">{o.emoji}</span><strong>{o.label}</strong><span aria-hidden="true">↗</span>
      </button>)}</div>
    </div>
  </section>
}

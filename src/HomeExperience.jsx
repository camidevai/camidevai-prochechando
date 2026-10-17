import { Link } from 'react-router-dom'
const base = import.meta.env.BASE_URL
const paths = [
  { icon:'🧠', label:'Aprende IA', copy:'Explora herramientas y videotutoriales en español.', to:'/herramientas', cta:'Ver herramientas' },
  { icon:'🎬', label:'Crea con IA', copy:'Recrea escenas, efectos y transformaciones con mis guías.', to:'/apob', cta:'Ver guías creativas' },
  { icon:'🎤', label:'Charlas y marcas', copy:'Conferencias, talleres y colaboraciones de contenido.', href:'#colaboremos', cta:'Trabajemos juntos' },
  { icon:'⚙️', label:'Soluciones IA', copy:'Agentes, automatización y desarrollo con Informatik-AI.', href:'#servicios', cta:'Conocer servicios' },
]
const projects = [
  { image:'1dohta0phsnvpPOeRv987iq2-iVBj1_Ke.svg',title:'¡¿Qué apreté?!',type:'Cine y humor',detail:'Un Tesla volador convertido en historia.' },
  { image:'1u-N18K1MI3tNyiB5l4Ws35PcIHcjwsyu.svg',title:'Cami en Hogwarts',type:'Cine fantástico',detail:'Una aventura con tomas y efectos.' },
  { image:'1YtYN62_DjfFgnrNNmvDjOi8qnXkDxOCg.webp',title:'Heroína mágica',type:'Transformaciones',detail:'De un retrato a una escena animada.' },
]
function PathCard({ item }) {
  const inner=<><span className="hx-icon">{item.icon}</span><h3>{item.label}</h3><p>{item.copy}</p><strong>{item.cta} ↗</strong></>
  return item.to ? <Link to={item.to} className="hx-path">{inner}</Link> : <a href={item.href} className="hx-path">{inner}</a>
}
export default function HomeExperience() {
  return <>
    <section id="explora" className="hx-explore" aria-labelledby="hx-title">
      <div className="hx-shell">
        <div className="hx-intro"><span className="hx-kicker">EMPIEZA POR AQUÍ</span><h2 id="hx-title">¿Qué quieres hacer <em>hoy con IA?</em></h2><p>Aprende, experimenta o lleva una idea a tu negocio. Encuentra tu camino sin perderte entre opciones.</p></div>
        <div className="hx-path-grid">{paths.map(item=><PathCard key={item.label} item={item}/>)}</div>
      </div>
    </section>
    <section id="inspiracion" className="hx-showcase" aria-labelledby="hx-showcase-title">
      <div className="hx-shell">
        <div className="hx-showcase-head"><div><span className="hx-kicker">INSPÍRATE Y CREA</span><h2 id="hx-showcase-title">Esto también puedes <em>aprender a hacerlo.</em></h2><p>Historias, efectos y transformaciones creados con IA. Descubre cómo los hice y crea tu propia versión.</p></div><Link to="/apob">Todas las guías de video ↗</Link></div>
        <div className="hx-project-grid">
          {projects.map(p=><Link to="/apob" key={p.title} className="hx-project">
            <div className="hx-project-image"><img src={`${base}apob/${p.image}`} loading="lazy" alt={`Portada de la guía ${p.title}`}/></div>
            <div className="hx-project-copy"><span>{p.type}</span><h3>{p.title}</h3><p>{p.detail}</p><strong>Aprende cómo se hizo ↗</strong></div>
          </Link>)}
        </div>
      </div>
    </section>
  </>
}

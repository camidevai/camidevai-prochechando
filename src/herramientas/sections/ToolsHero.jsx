import { Link } from 'react-router-dom'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

const DownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
  </svg>
)

export default function ToolsHero({ total }) {
  return (
    <header id="tp-hero" className="tp-hero">
      <div className="tp-hero__bg" aria-hidden="true">
        <span className="tp-hero__orb tp-hero__orb--1" />
        <span className="tp-hero__orb tp-hero__orb--2" />
        <span className="tp-hero__grid" />
      </div>

      <div className="tp-hero__inner">
        <span className="tp-hero__badge">
          <span className="tp-hero__badge-dot" />
          {total ? `${total}+ herramientas probadas por nuestro equipo` : 'Curado por expertos en IA'}
        </span>

        <h1 className="tp-hero__title">
          ¿Qué quieres lograr hoy con <span className="tp-hl">inteligencia artificial?</span>
        </h1>

        <p className="tp-hero__sub">
          Busca herramientas por lo que necesitas hacer. Encuentra videotutoriales en español,
          ideas para comenzar y formas de aplicar la IA en tu trabajo o negocio.
        </p>

        <div className="tp-hero__actions">
          <button className="tp-btn tp-btn--primary tp-btn--lg" onClick={() => scrollTo('tp-rutas')}>
            Encuentra tu herramienta <DownIcon />
          </button>
          <Link to="/" className="tp-btn tp-btn--ghost tp-btn--lg">Soluciones para empresas <ArrowIcon /></Link>
        </div>
      </div>
    </header>
  )
}

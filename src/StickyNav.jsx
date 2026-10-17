import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './StickyNav.css'
import Prochi from './Prochi'

const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Aprende IA', to: '/herramientas' },
  { label: 'Crea videos', to: '/apob' },
  { label: 'Charlas y marcas', id: 'colaboremos' },
  { label: 'Soluciones IA', id: 'servicios' },
  { label: 'Contacto', id: 'formulario' },
]
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const CalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export default function StickyNav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Navega a una ruta (to) o hace scroll a una sección (id).
  const go = (l) => (l.to ? navigate(l.to) : scrollTo(l.id))

  return (
    <header className={`snav ${solid ? 'snav--solid' : ''}`}>
      <div className="snav-inner">

        {/* Marca */}
        <button type="button" className="snav-brand" onClick={() => scrollTo('inicio')}>
          <Prochi size={26} animated={false} className="snav-brand__logo" />
          CamiDevAI<b className="snav-brand-sep">✦</b>
        </button>

        {/* Links desktop */}
        <nav className="snav-links" aria-label="Navegación principal">
          {NAV_LINKS.map(l => (
            <button key={l.label} className="snav-link" onClick={() => go(l)}>
              {l.label}
              {l.caret && <span className="snav-link__caret">▾</span>}
            </button>
          ))}
        </nav>

        {/* CTA desktop */}
        <a className="snav-cta" href="https://calendar.app.google/ZV6dGDV6JYxfs5sZ7" target="_blank" rel="noopener noreferrer">
          Invítame a una charla <CalIcon />
        </a>

        {/* Hamburguesa mobile */}
        <button
          className={`snav-burger ${menuOpen ? 'snav-burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Drawer mobile */}
      {menuOpen && (
        <div className="snav-drawer">
          {NAV_LINKS.map(l => (
            <button
              key={l.label}
              className="snav-drawer-link"
              onClick={() => { go(l); setMenuOpen(false) }}
            >
              {l.label}
            </button>
          ))}
          <a
            className="snav-drawer-cta"
            href="https://calendar.app.google/ZV6dGDV6JYxfs5sZ7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Invítame a una charla →
          </a>
        </div>
      )}
    </header>
  )
}

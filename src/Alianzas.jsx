import './Alianzas.css'

const PARTNERS = [
  { id: 1, logo: '/logos/Alianzas estratégicas/cchia.png', name: 'CCHIA', dark: true },
]

function PartnerCard({ p }) {
  return (
    <div className="ali-card" aria-label={p.name}>
      <div className={`ali-logo${p.dark ? ' ali-logo--dark' : ''}`}>
        <img src={`${import.meta.env.BASE_URL}${p.logo.slice(1)}`} alt={p.name} className="ali-logo-img" />
      </div>
      <span className="ali-name">{p.name}</span>
    </div>
  )
}

export default function Alianzas() {
  return (
    <section className="s-section s-section--alt ali-section" id="alianzas">
      <div className="s-container">
        <header className="s-header">
          <span className="s-kicker">Vínculo institucional</span>
          <h2 className="s-title">Cámara Chilena de Inteligencia Artificial</h2>
          <p className="ali-sub">Impulsamos la educación y el desarrollo de la inteligencia artificial desde nuestra participación en CCHIA.</p>
          <a className="hx-institution-link" href="https://www.cchia.cl/" target="_blank" rel="noopener noreferrer">Conoce la Cámara Chilena de IA y cómo participar ↗</a>
        </header>
      </div>

      <div className="ali-grid">
        {PARTNERS.map(p => (
          <PartnerCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}

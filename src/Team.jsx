import './Team.css'

const MEMBERS = [
  {
    id: 1,
    photo: '/socios/camila.jpg',
    icon: 'spark',
    name: 'Camila Bañares',
    role: 'Cofundadora y CMO · Informatik-AI',
    bio: 'Lidera marketing, marca y comunicación. Ingeniera en Informática, vicepresidenta de CCHIA, creadora y educadora en IA (@CamiDevAI), speaker y embajadora de HeyGen y APOB.',
  },
  {
    id: 2,
    photo: '/socios/jorge.jpg',
    icon: 'cpu',
    name: 'Jorge Salgado',
    role: 'Cofundador y CTO · Informatik-AI',
    bio: 'Lidera tecnología, arquitectura e innovación. Consultor senior en SII Group Chile, AI Architect y Managing Director de Transferencia de Conocimiento, Tecnología y Educación en CCHIA.',
  },
  {
    id: 3,
    photo: '/socios/gonzalo.jpg',
    icon: 'chart',
    name: 'Gonzalo Figueroa',
    role: 'Cofundador y COO · Informatik-AI',
    bio: 'Lidera operaciones y gestión administrativa. Administrador de sistemas en Aguas Nuevas S.A.',
  },
]

const VALUES = [
  { icon: 'users',  label: 'Liderazgo compartido' },
  { icon: 'star',   label: 'Pasión por la innovación' },
  { icon: 'target', label: 'Enfoque en resultados' },
  { icon: 'heart',  label: 'Compromiso real' },
]

function Icon({ name }) {
  const p = {
    crown:     <path d="M2 18h20M4 6l4 5 4-7 4 7 4-5-2 12H6z" />,
    gear:      <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15z" /></>,
    mega:      <><path d="m3 11 16-5v12L3 13z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
    code:      <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    cpu:       <><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>,
    chart:     <><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>,
    spark:     <path d="M12 2l2.3 6.8L21 11l-6.7 2.2L12 20l-2.3-6.8L3 11l6.7-2.2z" />,
    users:     <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    star:      <polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9" />,
    target:    <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    heart:     <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l8 7.9 8-7.9a5.5 5.5 0 0 0 .6-7z" />,
    linkedin:  <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail:      <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></>,
    twitter:   <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
  }[name]
  return (
    <svg className="ico" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {p}
    </svg>
  )
}

function Card({ m }) {
  return (
    <article className="team-card">
      <div className="team-avatar">
        <img
          src={`${import.meta.env.BASE_URL}${m.photo.slice(1)}`}
          alt={m.name}
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = `${import.meta.env.BASE_URL}socios/${m.photo.split('/').pop().replace('.jpg', '.png')}`
          }}
        />
        <span className="team-badge"><Icon name={m.icon} /></span>
      </div>
      <strong className="team-name">{m.name}</strong>
      <span className="team-role">{m.role}</span>
      {m.bio && <p className="team-bio">{m.bio}</p>}
    </article>
  )
}

export default function Team() {
  return (
    <section className="s-section s-section--alt" id="equipo">
      <div className="s-container">
        <header className="s-header">
          <span className="s-kicker"><Icon name="users" /> Quiénes somos</span>
          <h2 className="s-title">El <span className="team-hl">equipo fundador</span> de Informatik-AI</h2>
          <p className="team-sub">Tres cofundadores que lideran juntos la empresa, con responsabilidades complementarias en estrategia, tecnología, marketing y operaciones.</p>
        </header>

        <div className="team-grid">
          {MEMBERS.map(m => <Card key={m.id} m={m} />)}
        </div>

        <div className="team-values">
          {VALUES.map(v => (
            <span key={v.label} className="team-value">
              <Icon name={v.icon} />{v.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

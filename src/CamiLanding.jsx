import './CamiLanding.css'

const GENERAL_MEETING = 'https://calendar.app.google/ZV6dGDV6JYxfs5sZ7'
const PROJECT_CONSULTATION = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l'

const offers = [
  {
    number: '01',
    icon: '🎤',
    category: 'Eventos y conferencias',
    title: 'Charlas que acercan la IA',
    description: 'Conferencias y participaciones para congresos, organizaciones, universidades y empresas. Una mirada cercana, práctica y fácil de entender.',
    action: 'Invítame a una charla',
    url: GENERAL_MEETING,
    note: 'Eventos · Panels · Keynotes',
  },
  {
    number: '02',
    icon: '✦',
    category: 'Aprendizaje para equipos',
    title: 'Cursos y talleres de IA',
    description: 'Capacitaciones personalizadas de IA generativa, herramientas, automatización y creación de contenido. Adaptadas a las necesidades de tu equipo.',
    action: 'Solicitar capacitación',
    url: GENERAL_MEETING,
    note: 'Empresas · Instituciones · Equipos',
  },
  {
    number: '03',
    icon: '◉',
    category: 'Contenido y colaboraciones',
    title: 'Videos para marcas y lugares',
    description: 'Reels, demostraciones, visitas y experiencias para mostrar lo que hace especial a tu empresa, producto o espacio con una historia auténtica.',
    action: 'Proponer colaboración',
    url: GENERAL_MEETING,
    note: 'Marcas · Turismo · Experiencias',
  },
  {
    number: '04',
    icon: '⌘',
    category: 'Informatik-AI',
    title: 'Proyectos y soluciones con IA',
    description: '¿Necesitas un sitio, automatización, agente de IA o solución digital? Conversémoslo con el equipo de Informatik-AI.',
    action: 'Consultar proyecto · US$20',
    url: PROJECT_CONSULTATION,
    note: 'Desarrollo · Automatización · Consultoría',
  },
]

export default function CamiLanding() {
  return (
    <>
      <section className="cam-hero" id="inicio" aria-labelledby="cam-hero-title">
        <div className="cam-hero__glow cam-hero__glow--one" aria-hidden="true" />
        <div className="cam-hero__glow cam-hero__glow--two" aria-hidden="true" />

        <div className="cam-shell cam-hero__grid">
          <div className="cam-hero__copy">
            <div className="cam-eyebrow"><span className="cam-eyebrow__dot" /> CAMIDEVAI · IA SIN COMPLICACIONES</div>
            <h1 id="cam-hero-title">Hagamos que la <span>inteligencia artificial</span> conecte con las personas.</h1>
            <p className="cam-hero__intro">¡Hola! Soy <strong>Camila Bañares</strong>, ingeniera en Informática, creadora de contenido y cofundadora de Informatik-AI.</p>
            <p className="cam-hero__description">Me encanta enseñar, compartir ideas y mostrar cómo la tecnología puede transformar lo que hacemos. ¿Creamos algo juntos?</p>

            <div className="cam-hero__actions">
              <a className="cam-btn cam-btn--primary" href={GENERAL_MEETING} target="_blank" rel="noopener noreferrer">
                Invítame a colaborar <span aria-hidden="true">↗</span>
              </a>
              <a className="cam-btn cam-btn--outline" href="#colaboremos">
                Mira cómo podemos trabajar
              </a>
            </div>
            <div className="cam-hero__tags" aria-label="Áreas de trabajo">
              <span>Charlas</span><span>Capacitaciones</span><span>Contenido para marcas</span><span>Proyectos IA</span>
            </div>
          </div>

          <div className="cam-visual">
            <div className="cam-visual__ring" aria-hidden="true" />
            <div className="cam-visual__photo">
              <img
                src={import.meta.env.BASE_URL + 'socios/camila-profesional.jpg'}
                alt="Camila Bañares, creadora de contenido CamiDevAI"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="cam-visual__brand"><span>✦</span> CamiDevAI</div>
            <div className="cam-visual__note">
              <strong>IA, creatividad y comunicación</strong>
              <span>Ideas que pasan de la pantalla al mundo real.</span>
            </div>
          </div>
        </div>

        <div className="cam-shell cam-hero__credentials">
          <span>Ingeniera en Informática</span>
          <span>Vicepresidenta CCHIA</span>
          <span>Cofundadora · Informatik-AI</span>
          <span>Embajadora HeyGen y APOB</span>
        </div>
      </section>

      <section id="colaboremos" className="cam-offers" aria-labelledby="cam-offers-title">
        <div className="cam-shell">
          <div className="cam-section-head">
            <span className="cam-kicker">TRABAJEMOS JUNTOS</span>
            <h2 id="cam-offers-title">¿En qué podemos <em>colaborar?</em></h2>
            <p>Elige lo que estás buscando. La idea es que sea muy fácil dar el primer paso.</p>
          </div>

          <div className="cam-offers__grid">
            {offers.map((offer) => (
              <article key={offer.number} className="cam-offer">
                <div className="cam-offer__top">
                  <span className="cam-offer__icon" aria-hidden="true">{offer.icon}</span>
                  <span className="cam-offer__num">{offer.number}</span>
                </div>
                <p className="cam-offer__category">{offer.category}</p>
                <h3>{offer.title}</h3>
                <p className="cam-offer__description">{offer.description}</p>
                <p className="cam-offer__note">{offer.note}</p>
                <a href={offer.url} target="_blank" rel="noopener noreferrer" className="cam-offer__link">
                  {offer.action} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="cam-next">
            <div>
              <span className="cam-next__eyebrow">¿TIENES UNA IDEA DISTINTA?</span>
              <h3>Cuéntame qué tienes en mente.</h3>
              <p>Desde una charla hasta mostrar tu negocio en un video. Podemos evaluar juntos qué formato funciona mejor.</p>
            </div>
            <a href="#formulario" className="cam-btn cam-btn--light">Escribir una propuesta <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  )
}

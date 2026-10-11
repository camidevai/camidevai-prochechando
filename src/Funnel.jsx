import './Funnel.css'

export default function Funnel() {
  return (
    <section className="s-section funnel" id="funnel-section">
      <div className="funnel-glow" aria-hidden="true" />
      <div className="s-container">
        <header className="s-header">
          <span className="s-kicker">¿Te interesa?</span>
          <h2 className="s-title">Hagamos algo juntos</h2>
          <p className="funnel-sub">Elige el tipo de conversación que mejor describe lo que necesitas</p>
        </header>
        <div className="funnel-cards">
          <a
            href="https://calendar.app.google/ZV6dGDV6JYxfs5sZ7"
            target="_blank"
            rel="noopener noreferrer"
            className="funnel-card funnel-card--alianza"
          >
            <div className="funnel-card-badge">Reunión general</div>
            <strong className="funnel-card-title">Reuniones con CamiDevAI</strong>
            <p className="funnel-card-desc">Para conversar sobre colaboraciones, charlas y otras iniciativas.</p>
            <span className="funnel-card-cta">Agendar reunión →</span>
          </a>

          <div className="funnel-center" aria-hidden="true">
            <span className="funnel-orb" />
          </div>

          <a
            href="https://calendly.com/camidevai/consulta-de-proyectos-informatik-ai-usd-20"
            target="_blank"
            rel="noopener noreferrer"
            className="funnel-card funnel-card--desarrollo"
          >
            <div className="funnel-card-badge funnel-card-badge--blue">Proyectos · US$20</div>
            <strong className="funnel-card-title">Consulta de proyectos Informatik-AI</strong>
            <p className="funnel-card-desc">Agenda una consulta de proyectos por US$20 para hablar de IA, automatización o desarrollo a medida.</p>
            <span className="funnel-card-cta funnel-card-cta--blue">Reservar consulta →</span>
          </a>
        </div>
        <p className="funnel-note">Elige la agenda según tu necesidad. La consulta de proyectos cuesta US$20.</p>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function CtaFinal() {
  return (
    <section className="tp-final">
      <div className="tp-final__bg" aria-hidden="true">
        <span className="tp-final__orb tp-final__orb--1" />
        <span className="tp-final__orb tp-final__orb--2" />
      </div>

      <div className="tp-final__inner">
        <span className="tp-final__kicker">Da el siguiente paso</span>
        <h2 className="tp-final__title">
          ¿Quieres implementar IA en tu empresa o aprender a utilizar estas herramientas
          con resultados reales?
        </h2>
        <p className="tp-final__sub">
          Te acompañamos desde la idea hasta la puesta en producción. Diseñamos, construimos
          e implementamos soluciones de inteligencia artificial a la medida de tu negocio.
        </p>

        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l" className="tp-final__btn" target="_blank" rel="noopener noreferrer">
          Consultar proyecto · US$20 <ArrowIcon />
        </a>
        <p className="tp-final__note">También puedes escribirnos sin costo desde el <Link to="/">sitio principal</Link>.</p>
      </div>
    </section>
  )
}

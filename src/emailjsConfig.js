// EmailJS utiliza una Public Key para solicitudes desde el navegador.
// Los tres valores son públicos en una aplicación cliente; nunca guardar aquí la Private Key.
// Las variables VITE_EMAILJS_* permiten sobrescribir esta configuración en cada despliegue.
const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1k212a9',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_93m0kce',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'NuEMLaMO5zEqU4ka1',
}

export default emailjsConfig

import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { socialLinks } from '../data/foundation'

function ContactSection() {
  return (
    <section className="section contact-section" id="contacto">
      <div className="content-shell">
        <div className="contact-card">
          <div className="contact-card__ambient" aria-hidden="true" />

          <SectionHeading
            eyebrow="06 · CONTACTO"
            title="¿Construimos algo que valga la pena usar?"
            description="Si quieres conversar sobre desarrollo de software, integración de sistemas o una oportunidad profesional, puedes encontrarme aquí."
          />

          <div className="contact-links">
            {socialLinks.map((link) => (
              <a
                className="contact-link"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link__icon"><Icon name={link.icon} size={21} /></span>
                <span><small>{link.label}</small><strong>{link.value}</strong></span>
                <Icon name="arrowUpRight" size={18} />
              </a>
            ))}
          </div>

          <p className="contact-card__privacy">
            Contacto profesional sin publicar teléfono ni documentos personales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

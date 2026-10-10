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
            title="Conversemos sobre software, integración y nuevas oportunidades."
            description="Puedes contactarme por LinkedIn, GitHub o correo electrónico para conversar sobre desarrollo de software, arquitectura de aplicaciones, integración de sistemas u oportunidades profesionales."
          />

          <div className="contact-links">
            {socialLinks.map((link) => (
              <a
                className="contact-link"
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <span className="contact-link__icon"><Icon name={link.icon} size={21} /></span>
                <span><small>{link.label}</small><strong>{link.value}</strong></span>
                <Icon name="arrowUpRight" size={18} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection

import Link from "next/link";
import Logo from "@/components/Logo";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/Icons";
import { PinIcon } from "@/components/SiteIcons";
import { contact } from "@/lib/site";
import { services } from "@/lib/services";
import { navLinks } from "@/lib/home";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`v3-container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <p>
            Soluções em engenharia e regularização. Transformamos desafios em
            resultados concretos, com conformidade legal e excelência técnica.
          </p>
          <div className={styles.social}>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="E-mail">
              <MailIcon />
            </a>
          </div>
        </div>

        <div>
          <h3>Navegação</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Serviços</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul className={styles.contact}>
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li className={styles.address}>
              <PinIcon />
              <span>
                {contact.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`v3-container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} D&apos;Lima Engenharia. Todos os direitos reservados.</span>
        <span className={styles.mono}>São Paulo · SP</span>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Logo from "@/components/Logo";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/Icons";
import { contact } from "@/lib/site";
import { services } from "@/lib/services";
import { v2NavLinks } from "@/lib/v2";
import { PinIcon } from "./icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`v2-container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <p>
            Soluções em engenharia e regularização com conformidade legal e
            excelência técnica em cada projeto.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>
          <ul>
            {v2NavLinks.map((link) => (
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
                <Link href={`/v2/servicos/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul className={styles.contact}>
            <li>
              <WhatsAppIcon />
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <InstagramIcon />
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                {contact.instagramHandle}
              </a>
            </li>
            <li>
              <PinIcon />
              <span>{contact.address.join(" · ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="v2-container">
          © {new Date().getFullYear()} D&apos;Lima Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

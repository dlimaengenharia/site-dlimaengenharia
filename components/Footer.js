import Link from "next/link";
import { contact, navLinks } from "@/lib/site";
import Logo from "./Logo";
import SocialButtons from "./SocialButtons";
import styles from "./Footer.module.css";

export default function Footer({ showTop = true }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {showTop && (
          <div className={styles.top}>
            <Link href="/contato" className={styles.cta}>
              Faça seu orçamento
            </Link>
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        <div className={styles.info}>
          <address className={styles.col}>
            {contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>

          <div className={styles.col}>
            <strong>Débora</strong>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>

          <div className={styles.brand}>
            <Logo variant="dark" className={styles.logo} />
            <SocialButtons size="sm" className={styles.social} />
          </div>
        </div>

        <p className={styles.copy}>
          D&apos; Lima Engenharia. Copyright © 2025 - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

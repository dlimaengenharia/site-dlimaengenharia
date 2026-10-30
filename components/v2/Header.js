"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { WhatsAppIcon, InstagramIcon } from "@/components/Icons";
import { contact } from "@/lib/site";
import { v2NavLinks, whatsappLink } from "@/lib/v2";
import { MenuIcon, CloseIcon } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/v2/contato" ? pathname === "/v2/contato" : href === "/v2" && pathname === "/v2";

  return (
    <header className={styles.header}>
      <div className={`v2-container ${styles.inner}`}>
        <Link href="/v2" aria-label="Página inicial" onClick={() => setOpen(false)}>
          <Logo className={styles.logo} />
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className={`${styles.menu} ${open ? styles.open : ""}`}>
          <nav className={styles.nav}>
            {v2NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? styles.active : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.iconLink}
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <WhatsAppIcon />
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

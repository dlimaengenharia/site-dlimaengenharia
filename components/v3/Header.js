"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { WhatsAppIcon } from "@/components/Icons";
import { MenuIcon, CloseIcon } from "@/components/v2/icons";
import { v3NavLinks, whatsappLink } from "@/lib/v3";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => !href.includes("#") && href === pathname;

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.solid : ""}`}>
      <div className={`v3-container ${styles.inner}`}>
        <Link href="/v3" aria-label="Página inicial" onClick={() => setOpen(false)}>
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
            {v3NavLinks.map((link) => (
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
          <a
            href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <WhatsAppIcon />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

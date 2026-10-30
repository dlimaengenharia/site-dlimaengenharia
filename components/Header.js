import Link from "next/link";
import { navLinks } from "@/lib/site";
import Logo from "./Logo";
import SocialButtons from "./SocialButtons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" aria-label="Página inicial">
          <Logo className={styles.logo} />
        </Link>

        <div className={styles.right}>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialButtons />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./VersionSwitcher.module.css";

const versions = [
  { id: 1, prefix: "", label: "V1", title: "Versão 1 · layout original" },
  { id: 2, prefix: "/v2", label: "V2", title: "Versão 2 · layout aprimorado" },
  { id: 3, prefix: "/v3", label: "V3", title: "Versão 3 · moderna e interativa" },
];

// Alterna entre as 3 versões mantendo a página atual (Home ou Contato).
export default function VersionSwitcher() {
  const pathname = usePathname() || "/";
  const match = pathname.match(/^\/(v2|v3)(?=\/|$)/);
  const current = match ? versions.find((v) => v.prefix === `/${match[1]}`) : versions[0];
  const page = match ? pathname.slice(match[0].length) : pathname;
  const subpath = page === "/" ? "" : page;

  return (
    <nav className={styles.switcher} aria-label="Alternar versão do site">
      <span className={styles.label}>Versão</span>
      {versions.map((v) => {
        const href = `${v.prefix}${subpath}` || "/";
        const active = v.id === current.id;
        return (
          <Link
            key={v.id}
            href={href}
            title={v.title}
            aria-current={active ? "page" : undefined}
            className={active ? styles.active : ""}
          >
            {v.label}
          </Link>
        );
      })}
    </nav>
  );
}

import styles from "./Logo.module.css";

// Recriação vetorial do logo: prédios em traço laranja + "D'LIMA ENGENHARIA".
// variant "light" = texto branco (fundo azul), "dark" = texto azul (fundo claro).
export default function Logo({ variant = "light", className = "" }) {
  return (
    <svg
      className={`${styles.logo} ${styles[variant]} ${className}`}
      viewBox="0 0 240 120"
      role="img"
      aria-label="D'Lima Engenharia"
    >
      <g className={styles.lines} fill="none" strokeWidth="2">
        <path d="M2 116 H140" />
        <rect x="38" y="44" width="16" height="72" />
        <rect x="46" y="58" width="8" height="58" />
        <rect x="54" y="4" width="28" height="112" />
        <rect x="74" y="30" width="18" height="86" />
        <rect x="80" y="44" width="12" height="72" />
        <path d="M54 116 C 78 116, 98 104, 100 70" />
      </g>
      <text x="100" y="80" className={styles.name}>
        D&apos;LIMA
      </text>
      <text x="100" y="104" className={styles.sub}>
        ENGENHARIA
      </text>
    </svg>
  );
}

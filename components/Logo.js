import Image from "next/image";
import styles from "./Logo.module.css";

// Logo oficial (identidade visual da D'Lima Engenharia).
// variant "light" = texto branco (fundo azul), "dark" = texto azul (fundo claro).
const SOURCES = {
  light: "/images/logo-claro-sobre-escuro.png",
  dark: "/images/logo-escuro-sobre-claro.png",
};

export default function Logo({ variant = "light", className = "", priority = false }) {
  return (
    <Image
      className={`${styles.logo} ${className}`}
      src={SOURCES[variant] ?? SOURCES.light}
      alt="D'Lima Engenharia"
      width={1064}
      height={527}
      sizes="(max-width: 700px) 60vw, 330px"
      priority={priority}
    />
  );
}

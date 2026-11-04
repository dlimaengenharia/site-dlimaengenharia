import styles from "./Marquee.module.css";

const items = [
  "AVCB",
  "CLCB",
  "Projeto de combate a incêndio",
  "Brigada de incêndio",
  "Alvará de funcionamento",
  "Alvará sanitário",
  "Habite-se",
  "Usucapião",
  "Anistia 2025",
  "Laudos técnicos",
  "Acessibilidade",
  "Licenciamento ambiental",
  "Certificado digital",
];

export default function Marquee() {
  // A lista é duplicada para o loop ficar contínuo.
  const loop = [...items, ...items];
  return (
    <div className={styles.marquee} aria-label="Principais documentos e serviços">
      <div className={styles.track}>
        {loop.map((item, i) => (
          <span key={i} aria-hidden={i >= items.length}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

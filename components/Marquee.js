import styles from "./Marquee.module.css";

const items = [
  "AVCB",
  "CLCB",
  "Projeto de bombeiro",
  "Licença de funcionamento (ALF)",
  "Licença de Operação CETESB",
  "Secretaria do Verde e Meio Ambiente",
  "Vigilância Sanitária",
  "Certificado digital",
  "Brigada de incêndio",
  "Habite-se",
  "Anistia",
  "Usucapião",
  "Acessibilidade e AVS",
  "Laudos técnicos",
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

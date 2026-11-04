import { faq } from "@/lib/faq";
import styles from "./FaqList.module.css";

// Lista de perguntas frequentes em <details>: abre e fecha sem JavaScript
// e o texto fica sempre legível para buscadores e assistentes de IA.
export default function FaqList({ variant = "v3", items = faq }) {
  return (
    <div className={`${styles.list} ${styles[variant]}`}>
      {items.map((item, i) => (
        <details key={item.question} className={styles.item} open={i === 0}>
          <summary>
            <span>{item.question}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

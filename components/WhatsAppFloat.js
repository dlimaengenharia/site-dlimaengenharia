import { WhatsAppIcon } from "@/components/Icons";
import { whatsappLink } from "@/lib/site";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={styles.float}
    >
      <WhatsAppIcon />
    </a>
  );
}

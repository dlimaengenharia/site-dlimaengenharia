import { contact } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "./Icons";
import styles from "./SocialButtons.module.css";

export default function SocialButtons({ size = "md", className = "" }) {
  return (
    <div className={`${styles.group} ${styles[size]} ${className}`}>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={styles.button}
      >
        <WhatsAppIcon />
      </a>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={styles.button}
      >
        <InstagramIcon />
      </a>
    </div>
  );
}

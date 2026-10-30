import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/Icons";
import { PinIcon, ArrowIcon } from "@/components/v2/icons";
import ContactForm from "@/components/v3/ContactForm";
import Reveal from "@/components/v3/Reveal";
import { contact } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Contato",
  description:
    "Fale com a D'Lima Engenharia pelo WhatsApp (11) 98483-7520, e-mail ou Instagram. Atendimento em São Paulo para AVCB, alvarás e regularização de imóveis.",
  alternates: { canonical: "/contato" },
};

const mapQuery = encodeURIComponent(`${contact.address[0]}, ${contact.address[2]}`);

const channels = [
  { Icon: WhatsAppIcon, label: "WhatsApp", value: contact.phone, href: contact.whatsapp, external: true },
  { Icon: MailIcon, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  { Icon: InstagramIcon, label: "Instagram", value: contact.instagramHandle, href: contact.instagram, external: true },
];

export default function ContatoV3() {
  return (
    <main className={styles.main}>
      <div className={styles.grid} aria-hidden="true" />

      <section className={`v3-container ${styles.head}`}>
        <span className={styles.kicker}>// Contato</span>
        <h1>Fale conosco</h1>
        <p>Entre em contato conosco e siga-nos nas redes sociais. Respondemos o mais rápido possível.</p>
      </section>

      <section className={`v3-container ${styles.layout}`}>
        <Reveal className={styles.side}>
          <ul className={styles.channels}>
            {channels.map(({ Icon, label, value, href, external }) => (
              <li key={label}>
                <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <span className={styles.text}>
                    <small>{label}</small>
                    {value}
                  </span>
                  <ArrowIcon className={styles.arrow} />
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mapCard}>
            <div className={styles.address}>
              <PinIcon />
              <span>
                {contact.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>
            <iframe
              className={styles.map}
              title="Mapa do endereço da D'Lima Engenharia"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}

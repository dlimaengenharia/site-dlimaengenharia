import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/Icons";
import ContactForm from "@/components/v2/ContactForm";
import { PinIcon } from "@/components/v2/icons";
import { contact } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Contato",
  description:
    "Fale com a D'Lima Engenharia pelo WhatsApp (11) 98483-7520, e-mail ou Instagram. Atendimento em São Paulo para AVCB, alvarás e regularização de imóveis.",
  alternates: { canonical: "/contato" },
};

const mapQuery = encodeURIComponent(contact.mapQuery);

export default function ContatoV2() {
  const channels = [
    { Icon: WhatsAppIcon, label: "WhatsApp", value: contact.phone, href: contact.whatsapp, external: true },
    { Icon: MailIcon, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
    { Icon: InstagramIcon, label: "Instagram", value: contact.instagramHandle, href: contact.instagram, external: true },
    { Icon: PinIcon, label: "Endereço", value: contact.address.join(" · ") },
  ];

  return (
    <main>
      <section className={styles.head}>
        <div className="v2-container">
          <span className={styles.eyebrow}>Contato</span>
          <h1>Fale conosco</h1>
          <p>Entre em contato conosco e siga-nos nas redes sociais.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`v2-container ${styles.grid}`}>
          <div className={styles.info}>
            <ul className={styles.channels}>
              {channels.map(({ Icon, label, value, href, external }) => {
                const inner = (
                  <>
                    <span className={styles.channelIcon}>
                      <Icon />
                    </span>
                    <span>
                      <small>{label}</small>
                      {value}
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <iframe
              className={styles.map}
              title="Mapa do endereço da D'Lima Engenharia"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}

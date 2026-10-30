import Footer from "@/components/Footer";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/Icons";
import { contact } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Contato",
  description:
    "Fale com a D'Lima Engenharia pelo WhatsApp (11) 98483-7520, e-mail ou Instagram. Atendimento em São Paulo para AVCB, alvarás e regularização de imóveis.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <section className={styles.card}>
            <div className={styles.info}>
              <h1>Fale Conosco</h1>
              <p className={styles.lead}>
                Entre em contato conosco e siga-nos nas redes sociais.
              </p>

              <ul className={styles.list}>
                <li>
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                    {contact.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`}>
                    <MailIcon />
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.image} role="img" aria-label="Capacete e ferramentas de engenharia" />
          </section>
        </div>
      </main>

      <Footer showTop={false} />
    </>
  );
}

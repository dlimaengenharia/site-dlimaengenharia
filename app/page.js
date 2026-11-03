import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import Reviews from "@/components/reviews/Reviews";
import { services } from "@/lib/services";
import { faqSchema } from "@/lib/seo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Transformamos desafios em
              <br />
              soluções eficientes
            </h1>
            <p className={styles.heroText}>
              D&apos;Lima Engenharia oferece soluções
              <br />
              em engenharia e regularizações.
            </p>
            <Link href="/contato" className={styles.btnOrange}>
              Faça seu orçamento
            </Link>
          </div>
        </section>

        <section id="sobre" className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Sobre nós</h2>

            <div className={styles.aboutCard}>
              <div className={styles.aboutLogo}>
                <Logo />
              </div>
              <div className={styles.aboutBody}>
                <div className={styles.aboutText}>
                  <p>
                    A <strong>D&apos;Lima Engenharia</strong> é especializada em
                    soluções em engenharia e regularização, comprometida em
                    transformar desafios em resultados concretos. Com uma
                    abordagem eficiente e personalizada, oferecemos serviços que
                    garantem conformidade legal e excelência técnica em cada
                    projeto.
                  </p>
                  <p>
                    Nossa missão é simplificar processos complexos, assegurando
                    segurança, funcionalidade e valorização dos imóveis e
                    empreendimentos.
                  </p>
                </div>
                <Link href="/contato" className={`${styles.btnOrange} ${styles.btnBlock}`}>
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Serviços</h2>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article key={service.slug} className={styles.serviceCard}>
                  <div
                    className={styles.serviceImage}
                    style={{ backgroundImage: `url(/images/servicos/${service.slug}.jpg)` }}
                    role="img"
                    aria-label={service.title}
                  />
                  <div className={styles.serviceBody}>
                    <h3>{service.title}</h3>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link href={`/servicos/${service.slug}`} className={styles.btnSmall}>
                      Saiba mais
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>O que dizem nossos clientes</h2>
            <div className={styles.reviews}>
              <Reviews variant="v1" />
            </div>
          </div>
        </section>

        <section id="perguntas" className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
            <div className={styles.faq}>
              <FaqList variant="v1" />
            </div>
          </div>
          <JsonLd data={faqSchema()} />
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Solicite seu orçamento</h2>
              <p>
                Precisa de soluções em engenharia e regularização? Solicite seu
                orçamento agora mesmo!
                <br />
                Na <strong>D&apos;Lima Engenharia</strong> entendemos que cada
                projeto é único. Por isso, oferecemos um atendimento
                personalizado para entender suas necessidades e apresentar a
                melhor solução.
              </p>
              <Link href="/contato" className={styles.btnNavy}>
                Faça seu orçamento
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

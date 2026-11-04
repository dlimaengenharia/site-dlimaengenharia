import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";
import { serviceIcons, CheckIcon, ArrowIcon } from "@/components/SiteIcons";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { servicePages } from "@/lib/servicePages";
import { faqSchema, servicePageSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import styles from "./ServicePage.module.css";

// Página individual de serviço (/servicos/[slug]).
export default function ServicePage({ page }) {
  const Icon = serviceIcons[page.slug];
  const others = servicePages.filter((p) => p.slug !== page.slug);
  const quote = whatsappLink(`Olá! Vim pelo site e gostaria de um orçamento para ${page.name}.`);

  return (
    <main className={`${styles.page} ${styles.v3}`}>
      <JsonLd data={servicePageSchema(page)} />
      <JsonLd data={faqSchema(page.faq)} />

      {/* ---------- Topo ---------- */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Você está em">
            <Link href="/">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href={"/#servicos"}>Serviços</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.name}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.tag}>
                <Icon />
                {page.name}
              </span>
              <h1>{page.title}</h1>
              {page.intro.map((p) => (
                <p key={p} className={styles.intro}>
                  {p}
                </p>
              ))}
              <div className={styles.actions}>
                <a href={quote} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                  <WhatsAppIcon />
                  Solicitar orçamento
                </a>
                <Link href={"/contato"} className={styles.secondary}>
                  Outros contatos
                </Link>
              </div>
            </div>
            <div
              className={styles.heroImage}
              style={{ backgroundImage: `url(/images/servicos/${page.slug}.webp)` }}
              role="img"
              aria-label={page.name}
            />
          </div>
        </div>
      </section>

      {/* ---------- Para quem é / O que inclui ---------- */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.split}`}>
          <div>
            <h2 className={styles.h2}>Para quem é</h2>
            <ul className={styles.checks}>
              {page.whoNeeds.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.h2}>O que está incluso</h2>
            <div className={styles.cards}>
              {page.includes.map((item) => (
                <div key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Como funciona ---------- */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Como funciona</h2>
          <ol className={styles.steps}>
            {page.steps.map((step, i) => (
              <li key={step.title}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Perguntas frequentes ---------- */}
      <section className={`${styles.section} ${styles.faq}`}>
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <h2 className={styles.h2}>Perguntas frequentes sobre {page.name.toLowerCase()}</h2>
          <FaqList items={page.faq} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div>
              <h2>Precisa de ajuda com {page.name.toLowerCase()}?</h2>
              <p>
                Fale com a D&apos;Lima Engenharia e receba um atendimento personalizado,
                com escopo, prazo e etapas definidos para o seu caso.
              </p>
            </div>
            <a href={quote} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Outros serviços ---------- */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Outros serviços</h2>
          <div className={styles.others}>
            {others.map((other) => {
              const OtherIcon = serviceIcons[other.slug];
              return (
                <Link key={other.slug} href={`/servicos/${other.slug}`} className={styles.other}>
                  <span className={styles.otherIcon}>
                    <OtherIcon />
                  </span>
                  <span>{other.name}</span>
                  <ArrowIcon className={styles.otherArrow} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

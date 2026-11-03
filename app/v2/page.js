import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/v2";
import { faqSchema } from "@/lib/seo";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import Reviews from "@/components/reviews/Reviews";
import {
  serviceIcons,
  ShieldIcon,
  UserIcon,
  BoltIcon,
  CheckIcon,
  ArrowIcon,
} from "@/components/v2/icons";
import styles from "./page.module.css";

const highlights = [
  {
    Icon: ShieldIcon,
    title: "Conformidade legal",
    text: "Projetos e documentos de acordo com as normas e exigências dos órgãos.",
  },
  {
    Icon: UserIcon,
    title: "Atendimento personalizado",
    text: "Cada projeto é único: entendemos sua necessidade antes de propor a solução.",
  },
  {
    Icon: BoltIcon,
    title: "Processos simplificados",
    text: "Cuidamos da burocracia para você focar no seu negócio ou imóvel.",
  },
];

const steps = [
  { title: "Contato", text: "Você fala com a gente pelo WhatsApp ou e-mail." },
  { title: "Análise", text: "Entendemos o imóvel, a atividade e o que é exigido." },
  { title: "Proposta", text: "Enviamos um orçamento claro, com prazo e etapas." },
  { title: "Execução", text: "Cuidamos de todo o processo até a aprovação." },
];

export default function HomeV2() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className={`v2-container ${styles.heroInner}`}>
          <span className={styles.eyebrowLight}>Engenharia e regularização · São Paulo</span>
          <h1 className={styles.heroTitle}>
            Transformamos desafios em <span>soluções eficientes</span>
          </h1>
          <p className={styles.heroText}>
            Da regularização do imóvel ao AVCB e alvarás: a D&apos;Lima Engenharia
            cuida de todo o processo com segurança e conformidade legal.
          </p>
          <div className={styles.heroActions}>
            <a
              href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <WhatsAppIcon />
              Faça seu orçamento
            </a>
            <Link href="/v2#servicos" className={styles.btnGhost}>
              Conheça os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Diferenciais ---------- */}
      <section className={styles.highlights}>
        <div className={`v2-container ${styles.highlightsGrid}`}>
          {highlights.map(({ Icon, title, text }) => (
            <div key={title} className={styles.highlight}>
              <span className={styles.highlightIcon}>
                <Icon />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Sobre ---------- */}
      <section id="sobre" className={styles.about}>
        <div className={`v2-container ${styles.aboutGrid}`}>
          <div className={styles.aboutMedia}>
            <div className={styles.aboutPhoto} role="img" aria-label="Desenvolvimento de projeto técnico" />
            <div className={styles.aboutBadge}>
              <strong>Engenharia</strong>
              <span>e regularização</span>
            </div>
          </div>

          <div>
            <span className={styles.eyebrow}>Sobre nós</span>
            <h2 className={styles.title}>Engenharia que simplifica processos complexos</h2>
            <p className={styles.lead}>
              A <strong>D&apos;Lima Engenharia</strong> é especializada em soluções em
              engenharia e regularização, comprometida em transformar desafios em
              resultados concretos.
            </p>
            <p className={styles.body}>
              Com uma abordagem eficiente e personalizada, oferecemos serviços que
              garantem conformidade legal e excelência técnica em cada projeto. Nossa
              missão é simplificar processos complexos, assegurando segurança,
              funcionalidade e valorização dos imóveis e empreendimentos.
            </p>
            <ul className={styles.checks}>
              <li><CheckIcon />Atendimento direto e personalizado</li>
              <li><CheckIcon />Imóveis residenciais, comerciais e industriais</li>
              <li><CheckIcon />Acompanhamento até a aprovação final</li>
            </ul>
            <Link href="/v2/contato" className={styles.btnDark}>
              Entre em contato
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Serviços ---------- */}
      <section id="servicos" className={styles.services}>
        <div className="v2-container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Nossos serviços</span>
            <h2 className={styles.title}>Regularização completa, do projeto ao alvará</h2>
            <p className={styles.body}>
              Escolha o serviço para ver os detalhes, as etapas e as perguntas frequentes.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = serviceIcons[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/v2/servicos/${service.slug}`}
                  className={styles.card}
                >
                  <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(/images/servicos/${service.slug}.jpg)` }}
                  >
                    <span className={styles.cardIcon}>
                      <Icon />
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{service.title}</h3>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>
                          <CheckIcon />
                          {item.replace(/[;.]$/, "")}
                        </li>
                      ))}
                    </ul>
                    <span className={styles.cardLink}>
                      Saiba mais
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Como funciona ---------- */}
      <section className={styles.process}>
        <div className="v2-container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Como funciona</span>
            <h2 className={styles.title}>Do primeiro contato à aprovação</h2>
          </div>
          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Avaliações (Google) ---------- */}
      <section id="avaliacoes" className={styles.reviews}>
        <div className="v2-container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrowLight}>Avaliações</span>
            <h2 className={styles.titleLight}>O que dizem nossos clientes</h2>
          </div>
          <Reviews variant="v2" />
        </div>
      </section>

      {/* ---------- Perguntas frequentes ---------- */}
      <section id="perguntas" className={styles.faqSection}>
        <div className={`v2-container ${styles.faqGrid}`}>
          <div>
            <span className={styles.eyebrow}>Perguntas frequentes</span>
            <h2 className={styles.title}>Tire suas dúvidas</h2>
            <p className={styles.body}>
              As dúvidas mais comuns sobre AVCB, alvarás e regularização de imóveis.
              Não encontrou a sua? Fale com a gente.
            </p>
          </div>
          <FaqList variant="v2" />
        </div>
        <JsonLd data={faqSchema()} />
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.cta}>
        <div className={`v2-container ${styles.ctaInner}`}>
          <div>
            <h2>Precisa regularizar seu imóvel ou empresa?</h2>
            <p>
              Cada projeto é único. Fale com a gente e receba um atendimento
              personalizado com a melhor solução para o seu caso.
            </p>
          </div>
          <a
            href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <WhatsAppIcon />
            Solicitar orçamento
          </a>
        </div>
      </section>
    </main>
  );
}

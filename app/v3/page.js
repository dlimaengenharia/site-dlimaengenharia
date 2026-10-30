import Link from "next/link";
import Hero from "@/components/v3/Hero";
import Marquee from "@/components/v3/Marquee";
import ServiceExplorer from "@/components/v3/ServiceExplorer";
import Diagnostico from "@/components/v3/Diagnostico";
import Reveal from "@/components/v3/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { ShieldIcon, UserIcon, BoltIcon, ArrowIcon } from "@/components/v2/icons";
import { whatsappLink } from "@/lib/v3";
import { faqSchema } from "@/lib/seo";
import FaqList from "@/components/seo/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import styles from "./page.module.css";

const numbers = [
  { value: "06", label: "Áreas de atuação" },
  { value: "03", label: "Tipos de imóvel: residencial, comercial e industrial" },
  { value: "1:1", label: "Atendimento personalizado do início ao fim" },
];

const steps = [
  { title: "Contato", text: "Você conta o que precisa pelo WhatsApp, e-mail ou pelo diagnóstico do site." },
  { title: "Análise técnica", text: "Avaliamos o imóvel, a atividade e as exigências dos órgãos envolvidos." },
  { title: "Proposta", text: "Você recebe um orçamento claro, com escopo, prazo e etapas definidos." },
  { title: "Execução e aprovação", text: "Cuidamos de projetos, documentos e acompanhamento até a aprovação." },
];

const values = [
  { Icon: ShieldIcon, title: "Conformidade legal", text: "Cada entrega segue as normas e exigências dos órgãos competentes." },
  { Icon: UserIcon, title: "Abordagem personalizada", text: "Nada de solução pronta: entendemos o seu caso antes de propor." },
  { Icon: BoltIcon, title: "Eficiência", text: "Processos complexos simplificados para você focar no que importa." },
];

export default function HomeV3() {
  return (
    <main>
      <Hero />
      <Marquee />

      {/* ---------- Serviços ---------- */}
      <section id="servicos" className={styles.services}>
        <div className="v3-container">
          <Reveal className={styles.head}>
            <span className={styles.kicker}>// 01 · Serviços</span>
            <h2 className={styles.titleDark}>
              Soluções completas em engenharia e regularização
            </h2>
            <p className={styles.leadDark}>
              Seis frentes de atuação para deixar o seu imóvel ou empresa em dia com
              as normas. Selecione um serviço para ver os detalhes.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ServiceExplorer />
          </Reveal>
        </div>
      </section>

      {/* ---------- Diagnóstico ---------- */}
      <section id="diagnostico" className={styles.diagnosis}>
        <div className={`v3-container ${styles.diagnosisGrid}`}>
          <Reveal className={styles.diagnosisCopy}>
            <span className={styles.kicker}>// 02 · Diagnóstico rápido</span>
            <h2 className={styles.title}>Descubra em 30 segundos o que o seu imóvel precisa</h2>
            <p className={styles.lead}>
              Responda duas perguntas e veja quais serviços se aplicam ao seu caso.
              No final, envie o resultado direto para a D&apos;Lima pelo WhatsApp.
            </p>
            <ul className={styles.numbers}>
              {numbers.map((n) => (
                <li key={n.value}>
                  <strong>{n.value}</strong>
                  <span>{n.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Diagnostico />
          </Reveal>
        </div>
      </section>

      {/* ---------- Sobre ---------- */}
      <section id="sobre" className={styles.about}>
        <div className={`v3-container ${styles.aboutGrid}`}>
          <Reveal className={styles.aboutMedia}>
            <div className={styles.photo} role="img" aria-label="Desenvolvimento de projeto técnico" />
            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.br}`} />
            <div className={styles.photoTag}>
              <span className={styles.mono}>Engenharia e regularização</span>
              <strong>D&apos;Lima Engenharia</strong>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className={styles.kicker}>// 03 · Sobre nós</span>
            <h2 className={styles.titleDark}>
              Nossa missão é simplificar processos complexos
            </h2>
            <p className={styles.leadDark}>
              A <strong>D&apos;Lima Engenharia</strong> é especializada em soluções em
              engenharia e regularização, comprometida em transformar desafios em
              resultados concretos.
            </p>
            <p className={styles.bodyDark}>
              Com uma abordagem eficiente e personalizada, oferecemos serviços que
              garantem conformidade legal e excelência técnica em cada projeto,
              assegurando segurança, funcionalidade e valorização dos imóveis e
              empreendimentos.
            </p>

            <div className={styles.values}>
              {values.map(({ Icon, title, text }) => (
                <div key={title} className={styles.value}>
                  <span className={styles.valueIcon}>
                    <Icon />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Processo ---------- */}
      <section className={styles.process}>
        <div className="v3-container">
          <Reveal className={styles.head}>
            <span className={styles.kicker}>// 04 · Como trabalhamos</span>
            <h2 className={styles.title}>Do primeiro contato à aprovação</h2>
          </Reveal>
          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120} className={styles.stepItem}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Perguntas frequentes ---------- */}
      <section id="perguntas" className={styles.faqSection}>
        <div className={`v3-container ${styles.faqGrid}`}>
          <Reveal>
            <span className={styles.kicker}>// 05 · Perguntas frequentes</span>
            <h2 className={styles.title}>Respostas diretas para as dúvidas mais comuns</h2>
            <p className={styles.lead}>
              AVCB, alvarás, Habite-se e regularização explicados de forma simples.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <FaqList variant="v3" />
          </Reveal>
        </div>
        <JsonLd data={faqSchema()} />
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.ctaWrap}>
        <div className="v3-container">
          <Reveal className={styles.cta}>
            <div>
              <span className={styles.ctaKicker}>Pronto para começar?</span>
              <h2>Vamos tirar o seu projeto do papel</h2>
              <p>
                Cada projeto é único. Fale com a D&apos;Lima Engenharia e receba um
                atendimento personalizado, com a melhor solução para o seu caso.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a
                href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <Link href="/v3/contato" className={styles.ctaSecondary}>
                Outros contatos
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

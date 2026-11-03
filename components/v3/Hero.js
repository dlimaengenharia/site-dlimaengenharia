"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";
import { ArrowIcon } from "@/components/v2/icons";
import { whatsappLink } from "@/lib/v3";
import styles from "./Hero.module.css";

const words = ["AVCB e CLCB", "Alvarás", "Habite-se", "Regularização", "Acessibilidade", "Licenças"];

export default function Hero() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  // A luz da grade acompanha o cursor.
  const handleMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section ref={sectionRef} className={styles.hero} onPointerMove={handleMove}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.spot} aria-hidden="true" />

      <div className={`v3-container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            Engenharia e regularização · São Paulo
          </span>

          <h1 className={styles.title}>
            Transformamos desafios em soluções eficientes
          </h1>

          <p className={styles.rotator}>
            <span className={styles.rotLabel}>Especialistas em</span>
            <span className={styles.rotWindow} aria-live="polite">
              <span key={index} className={styles.rotWord}>
                {words[index]}
              </span>
            </span>
          </p>

          <p className={styles.text}>
            Do projeto à aprovação: cuidamos da parte técnica e da burocracia para
            o seu imóvel ou empresa ficar 100% regular, com segurança e
            conformidade legal.
          </p>

          <div className={styles.actions}>
            <a
              href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              <WhatsAppIcon />
              Solicitar orçamento
            </a>
            <Link href="/v3#diagnostico" className={styles.secondary}>
              Fazer diagnóstico rápido
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <svg viewBox="0 0 420 420" className={styles.blueprint}>
            <circle cx="210" cy="210" r="196" className={styles.ring} />
            <circle cx="210" cy="210" r="150" className={styles.ringDash} />

            {/* Símbolo do logo oficial (prédios + arco em "D") */}
            <g className={styles.build}>
              <path d="M62 330 H175" style={{ animationDelay: "0.1s" }} />
              <path d="M175 140 H148.5 V330" style={{ animationDelay: "0.3s" }} />
              <path d="M148.5 175 H195.5 V330" style={{ animationDelay: "0.45s" }} />
              <path d="M175 330 V73 H242 V330 H226" style={{ animationDelay: "0.6s" }} />
              <path d="M242 140 H272 V330 H357" style={{ animationDelay: "0.8s" }} />
              <path d="M226 330 V140 H242" style={{ animationDelay: "0.95s" }} />
              <path
                d="M242 172.5 C 262 195, 272 222.5, 269.5 250 C 267 295, 224.5 327.5, 175.5 329"
                className={styles.arc}
                style={{ animationDelay: "1.1s" }}
              />
            </g>

            {/* Cotas */}
            <g className={styles.dims}>
              <path d="M175 58 H242 M175 52 V64 M242 52 V64" />
              <path d="M290 140 V330 M284 140 H296 M284 330 H296" />
              <path d="M128 140 V330 M122 140 H134 M122 330 H134" />
            </g>
            <text x="208" y="48" className={styles.label} textAnchor="middle">12.40</text>
            <text x="304" y="240" className={styles.label}>18.00</text>
            <text x="118" y="240" className={styles.label} textAnchor="end">9.60</text>
          </svg>

          <div className={`${styles.chip} ${styles.chip1}`}>
            <span className={styles.chipNum}>01</span>Projeto técnico
          </div>
          <div className={`${styles.chip} ${styles.chip2}`}>
            <span className={styles.chipNum}>02</span>Documentação
          </div>
          <div className={`${styles.chip} ${styles.chip3}`}>
            <span className={styles.chipNum}>03</span>Aprovação
            <span className={styles.check}>✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

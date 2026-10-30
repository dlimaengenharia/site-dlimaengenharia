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

            {/* Prédios inspirados no logo */}
            <g className={styles.build}>
              <path d="M70 330 H350" style={{ animationDelay: "0.1s" }} />
              <path d="M130 330 V190 H162 V330" style={{ animationDelay: "0.3s" }} />
              <path d="M145 330 V215 H162" style={{ animationDelay: "0.45s" }} />
              <path d="M162 330 V80 H218 V330" style={{ animationDelay: "0.6s" }} />
              <path d="M202 330 V140 H252 V330" style={{ animationDelay: "0.8s" }} />
              <path d="M218 330 V170 H252" style={{ animationDelay: "0.95s" }} />
              <path d="M162 330 C 220 330, 266 300, 272 220" className={styles.arc} style={{ animationDelay: "1.1s" }} />
            </g>

            {/* Cotas */}
            <g className={styles.dims}>
              <path d="M162 64 H218 M162 58 V70 M218 58 V70" />
              <path d="M276 140 V330 M270 140 H282 M270 330 H282" />
              <path d="M110 190 V330 M104 190 H116 M104 330 H116" />
            </g>
            <text x="190" y="54" className={styles.label} textAnchor="middle">12.40</text>
            <text x="290" y="240" className={styles.label}>18.00</text>
            <text x="98" y="265" className={styles.label} textAnchor="end">9.60</text>
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

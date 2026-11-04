"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/Icons";
import { serviceIcons, CheckIcon, ArrowIcon } from "@/components/SiteIcons";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { diagnosisNeeds, propertyTypes, serviceDetails } from "@/lib/home";
import styles from "./Diagnostico.module.css";

const stepLabels = ["Imóvel", "Necessidade", "Resultado"];

export default function Diagnostico() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const [needs, setNeeds] = useState([]);

  const toggleNeed = (id) =>
    setNeeds((current) => (current.includes(id) ? current.filter((n) => n !== id) : [...current, id]));

  const recommended = services.filter((s) =>
    diagnosisNeeds.some((n) => needs.includes(n.id) && n.services.includes(s.slug))
  );

  const message = [
    "Olá! Fiz o diagnóstico no site da D'Lima Engenharia.",
    `Tipo de imóvel: ${type}.`,
    `Preciso de: ${diagnosisNeeds.filter((n) => needs.includes(n.id)).map((n) => n.label.toLowerCase()).join("; ")}.`,
    `Serviços indicados: ${recommended.map((s) => s.title).join(", ")}.`,
  ].join("\n");

  const restart = () => {
    setStep(0);
    setType("");
    setNeeds([]);
  };

  return (
    <div className={styles.card}>
      <ol className={styles.progress}>
        {stepLabels.map((label, i) => (
          <li key={label} className={i <= step ? styles.done : ""}>
            <span>{i < step ? "✓" : String(i + 1).padStart(2, "0")}</span>
            {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className={styles.step} key="s0">
          <h3>Qual é o tipo do imóvel?</h3>
          <div className={styles.types}>
            {propertyTypes.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.option} ${type === t ? styles.selected : ""}`}
                onClick={() => {
                  setType(t);
                  setStep(1);
                }}
              >
                {t}
                <ArrowIcon />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className={styles.step} key="s1">
          <h3>O que você precisa resolver?</h3>
          <p className={styles.hint}>Marque uma ou mais opções.</p>
          <div className={styles.needs}>
            {diagnosisNeeds.map((n) => {
              const checked = needs.includes(n.id);
              return (
                <button
                  key={n.id}
                  type="button"
                  role="checkbox"
                  aria-checked={checked}
                  className={`${styles.need} ${checked ? styles.selected : ""}`}
                  onClick={() => toggleNeed(n.id)}
                >
                  <span className={styles.box}>{checked && <CheckIcon />}</span>
                  {n.label}
                </button>
              );
            })}
          </div>
          <div className={styles.nav}>
            <button type="button" className={styles.back} onClick={() => setStep(0)}>
              Voltar
            </button>
            <button
              type="button"
              className={styles.next}
              disabled={needs.length === 0}
              onClick={() => setStep(2)}
            >
              Ver resultado
              <ArrowIcon />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step} key="s2">
          <h3>Serviços indicados para o seu caso</h3>
          <p className={styles.hint}>
            Imóvel {type.toLowerCase()} · {recommended.length}{" "}
            {recommended.length === 1 ? "serviço" : "serviços"}
          </p>
          <div className={styles.results}>
            {recommended.map((s) => {
              const Icon = serviceIcons[s.slug];
              return (
                <div key={s.slug} className={styles.result}>
                  <span className={styles.resultIcon}>
                    <Icon />
                  </span>
                  <div>
                    <strong>{s.title}</strong>
                    <small>{serviceDetails[s.slug].tag}</small>
                  </div>
                </div>
              );
            })}
          </div>
          <p className={styles.disclaimer}>
            Esta é uma indicação inicial. A análise técnica da D&apos;Lima Engenharia
            confirma exatamente o que o seu imóvel precisa.
          </p>
          <div className={styles.nav}>
            <button type="button" className={styles.back} onClick={restart}>
              Refazer
            </button>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.next}
            >
              <WhatsAppIcon />
              Enviar diagnóstico
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

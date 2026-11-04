"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { serviceDetails } from "@/lib/home";
import { serviceIcons, CheckIcon, ArrowIcon } from "@/components/SiteIcons";
import styles from "./ServiceExplorer.module.css";

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const detail = serviceDetails[service.slug];
  const Icon = serviceIcons[service.slug];

  const handleKey = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + services.length) % services.length;
    setActive(next);
    document.getElementById(`v3-tab-${next}`)?.focus();
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.tabs} role="tablist" aria-label="Serviços" onKeyDown={handleKey}>
        {services.map((s, i) => {
          const TabIcon = serviceIcons[s.slug];
          const selected = i === active;
          return (
            <button
              key={s.slug}
              id={`v3-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="v3-service-panel"
              tabIndex={selected ? 0 : -1}
              className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.tabIcon}>
                <TabIcon />
              </span>
              <span className={styles.tabText}>
                <strong>{s.title}</strong>
                <small>{serviceDetails[s.slug].tag}</small>
              </span>
              <ArrowIcon className={styles.tabArrow} />
            </button>
          );
        })}
      </div>

      <div
        id="v3-service-panel"
        role="tabpanel"
        aria-labelledby={`v3-tab-${active}`}
        className={styles.panel}
        key={service.slug}
      >
        <div
          className={styles.media}
          style={{ backgroundImage: `url(/images/servicos/${service.slug}.jpg)` }}
        >
          <span className={styles.mediaIcon}>
            <Icon />
          </span>
          <span className={styles.mediaTag}>{detail.tag}</span>
        </div>

        <div className={styles.body}>
          <h3>{service.title}</h3>
          <p>{detail.summary}</p>

          <h4>O que está incluso</h4>
          <ul>
            {service.items.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item.replace(/[;.]$/, "")}
              </li>
            ))}
          </ul>

          <div className={styles.links}>
            <Link href={`/servicos/${service.slug}`} className={styles.more}>
              Ver detalhes do serviço
            </Link>
            <a
              href={whatsappLink(`Olá! Vim pelo site e gostaria de um orçamento para ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Solicitar orçamento
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

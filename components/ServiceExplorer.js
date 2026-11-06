"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { serviceDetails } from "@/lib/home";
import { serviceIcons, CheckIcon, ArrowIcon } from "@/components/SiteIcons";
import styles from "./ServiceExplorer.module.css";

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  // Em telas menores as abas viram uma faixa com rolagem lateral.
  const tabsRef = useRef(null);
  const [edges, setEdges] = useState({ left: false, right: false });
  const [scrolled, setScrolled] = useState(false);
  const [nudge, setNudge] = useState(false);
  // No toque a rolagem é a nativa do navegador; com o mouse, o arrasto é feito aqui.
  const drag = useRef(null);
  const justDragged = useRef(false);
  const [dragging, setDragging] = useState(false);
  const service = services[active];
  const detail = serviceDetails[service.slug];
  const Icon = serviceIcons[service.slug];

  const updateEdges = () => {
    const el = tabsRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
  };

  useEffect(() => {
    const el = tabsRef.current;
    updateEdges();
    window.addEventListener("resize", updateEdges);

    // Quando a faixa aparece na tela pela primeira vez, as abas deslizam de leve
    // para mostrar que dá para arrastar.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (el.scrollWidth > el.clientWidth && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setNudge(true);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    return () => {
      window.removeEventListener("resize", updateEdges);
      observer.disconnect();
    };
  }, []);

  const handleScroll = () => {
    updateEdges();
    if (!scrolled && tabsRef.current.scrollLeft > 12) setScrolled(true);
  };

  const handlePointerDown = (e) => {
    const el = tabsRef.current;
    if (e.pointerType !== "mouse" || e.button !== 0 || el.scrollWidth <= el.clientWidth) return;
    drag.current = { id: e.pointerId, x: e.clientX, left: el.scrollLeft, moved: false };
  };

  const handlePointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    // Movimentos pequenos continuam valendo como clique na aba.
    if (!d.moved && Math.abs(dx) < 6) return;
    if (!d.moved) {
      d.moved = true;
      tabsRef.current.setPointerCapture(d.id);
      setDragging(true);
    }
    tabsRef.current.scrollLeft = d.left - dx;
  };

  const handlePointerUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;
    setDragging(false);
    // O clique que vem logo depois de soltar o mouse não troca de aba.
    justDragged.current = true;
    setTimeout(() => (justDragged.current = false), 0);
  };

  const handleClickCapture = (e) => {
    if (!justDragged.current) return;
    e.preventDefault();
    e.stopPropagation();
  };

  const select = (i) => {
    setActive(i);
    // Mantém a aba escolhida visível na faixa.
    document.getElementById(`v3-tab-${i}`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  const handleKey = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + services.length) % services.length;
    select(next);
    document.getElementById(`v3-tab-${next}`)?.focus({ preventScroll: true });
  };

  return (
    <div className={styles.explorer}>
      <div
        className={`${styles.tabsWrap} ${edges.left ? styles.fadeLeft : ""} ${edges.right ? styles.fadeRight : ""}`}
      >
        <div
          ref={tabsRef}
          className={`${styles.tabs} ${nudge ? styles.nudge : ""} ${dragging ? styles.dragging : ""}`}
          role="tablist"
          aria-label="Serviços"
          onKeyDown={handleKey}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClickCapture={handleClickCapture}
          onDragStart={(e) => e.preventDefault()}
          onAnimationEnd={() => setNudge(false)}
        >
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
                onClick={() => select(i)}
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
        <p
          className={`${styles.swipeHint} ${scrolled || !edges.right ? styles.swipeHintHidden : ""}`}
          aria-hidden="true"
        >
          Arraste para ver mais
          <ArrowIcon />
        </p>
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
          style={{ backgroundImage: `url(/images/servicos/${service.slug}.webp)` }}
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

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

// Faz o conteúdo surgir suavemente quando entra na tela.
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.in : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      data-in={visible ? "" : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

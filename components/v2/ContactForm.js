"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/Icons";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/v2";
import styles from "./ContactForm.module.css";

// Sem backend: monta a mensagem e abre a conversa no WhatsApp.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${form.name}.`,
      form.service && `Gostaria de um orçamento para: ${form.service}.`,
      form.phone && `Telefone: ${form.phone}`,
      form.message && `\n${form.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Solicite seu orçamento</h2>
      <p>Preencha os dados e continue a conversa pelo WhatsApp.</p>

      <label>
        Nome
        <input required value={form.name} onChange={update("name")} placeholder="Seu nome" />
      </label>

      <label>
        Telefone
        <input
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="(11) 00000-0000"
        />
      </label>

      <label>
        Serviço
        <select value={form.service} onChange={update("service")}>
          <option value="">Selecione um serviço</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </label>

      <label>
        Mensagem
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Conte um pouco sobre o seu imóvel ou empresa"
        />
      </label>

      <button type="submit">
        <WhatsAppIcon />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}

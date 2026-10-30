import { contact } from "./site";

export function whatsappLink(message) {
  if (!message) return contact.whatsapp;
  return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const v2NavLinks = [
  { href: "/v2", label: "Home" },
  { href: "/v2#sobre", label: "Sobre" },
  { href: "/v2#servicos", label: "Serviços" },
  { href: "/v2/contato", label: "Contato" },
];

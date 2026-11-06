// Ícones da biblioteca Lucide (traço consistente e bem desenhado).
// Os nomes exportados continuam os mesmos, então V2, V3 e as páginas de serviço não mudam.
import {
  Flame,
  HardHat,
  FileCheck,
  House,
  Accessibility,
  Leaf,
  ClipboardCheck,
  KeyRound,
  ShieldCheck,
  UserRound,
  Zap,
  Check,
  ArrowRight,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const icon = (Component, strokeWidth = 1.8) =>
  function Icon(props) {
    return <Component strokeWidth={strokeWidth} aria-hidden="true" {...props} />;
  };

export const FireIcon = icon(Flame);
export const HelmetIcon = icon(HardHat);
export const DocumentIcon = icon(FileCheck);
export const HouseIcon = icon(House);
export const AccessIcon = icon(Accessibility);
export const LeafIcon = icon(Leaf);
export const SanitaryIcon = icon(ClipboardCheck);
export const KeyIcon = icon(KeyRound);
export const ShieldIcon = icon(ShieldCheck);
export const UserIcon = icon(UserRound);
export const BoltIcon = icon(Zap);
export const CheckIcon = icon(Check, 2.6);
export const ArrowIcon = icon(ArrowRight, 2);
export const PinIcon = icon(MapPin);
export const MenuIcon = icon(Menu, 2);
export const CloseIcon = icon(X, 2);

export const serviceIcons = {
  "combate-a-incendio": FireIcon,
  "seguranca-do-trabalho": HelmetIcon,
  alvaras: DocumentIcon,
  "regularizacao-de-imoveis": HouseIcon,
  acessibilidade: AccessIcon,
  "licenciamento-ambiental": LeafIcon,
  "vigilancia-sanitaria": SanitaryIcon,
  "certificado-digital": KeyIcon,
};

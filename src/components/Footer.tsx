import { Building2, Heart } from "lucide-react";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a
              href="#inicio"
              className="flex items-center gap-2 font-bold text-white text-lg"
            >
              <div className="w-7 h-7 bg-blue-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              Negócio<span className="text-blue-500">Pro</span>
            </a>
            <p className="text-xs text-slate-500 text-center md:text-left">
              Soluções profissionais para todo tipo de negócio
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-600">
            &copy; {YEAR} NegócioPro — Todos os direitos reservados
          </p>
          
        </div>
      </div>
    </footer>
  );
}

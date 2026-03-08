import { LeadForm } from "./LeadForm";
import { MapPin, Clock, MessageCircle, Mail } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Localização",
    value: "Brasil",
    sub: "Atendemos presencialmente e remotamente em todo o Brasil",
  },
  {
    icon: Clock,
    title: "Horário de atendimento",
    value: "Seg–Sex, 8h às 18h",
    sub: "Respostas urgentes fora do horário via WhatsApp",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(41) 99999-9999",
    sub: "Resposta em até 2h em dias úteis",
    href: "https://wa.me/5541999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@seuprojeto.com.br",
    sub: "Para orçamentos e dúvidas",
    href: "mailto:contato@seuprojeto.com.br",
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Contato
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Fale com um especialista e receba uma proposta personalizada em
              até 24 horas. A consulta inicial é gratuita e sem compromisso.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map(({ icon: Icon, title, value, sub, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-700/30 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                      {title}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-blue-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{value}</p>
                    )}
                    <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-1">
              Solicite uma consultoria gratuita
            </h3>
            <p className="text-slate-400 text-sm mb-7">
              Preencha abaixo e entraremos em contato pelo WhatsApp.
            </p>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

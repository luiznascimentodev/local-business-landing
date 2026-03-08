import {
  MessageSquare,
  ClipboardList,
  Settings,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Diagnóstico Gratuito",
    description:
      "Conversa rápida pelo WhatsApp ou videoconferência para entendermos seus objetivos, desafios e oportunidades de crescimento.",
    duration: "1º contato",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Proposta Personalizada",
    description:
      "Você recebe uma proposta clara, com escopo detalhado, prazo e investimento. Sem letras minúsculas, sem surpresas.",
    duration: "Em até 24h",
  },
  {
    step: "03",
    icon: Settings,
    title: "Execução e Acompanhamento",
    description:
      "Nossa equipe entra em ação. Você acompanha o progresso em tempo real e aprova cada etapa antes de avançarmos.",
    duration: "Prazo combinado",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Entrega e Suporte",
    description:
      "Resultado entregue, aprovado e funcionando. E a parceria continua com suporte dedicado para garantir que os resultados persistam.",
    duration: "Longo prazo",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Como trabalhamos
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Simples, transparente e sem burocracia
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Um processo testado com mais de 500 clientes. Você sabe exatamente o
            que esperar em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-0.5 bg-blue-100" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map(({ step, icon: Icon, title, description, duration }) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-700 shadow-lg shadow-blue-200 mb-5">
                  <Icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-white border-2 border-blue-200 rounded-full text-[10px] font-black text-blue-700 flex items-center justify-center">
                    {step}
                  </span>
                </div>

                <span className="inline-block text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-3">
                  {duration}
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-200"
          >
            Iniciar diagnóstico gratuito
          </a>
          <p className="text-slate-400 text-sm mt-3">
            Sem compromisso. A consulta inicial é sempre gratuita.
          </p>
        </div>
      </div>
    </section>
  );
}

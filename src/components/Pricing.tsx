import { Check, Star } from "lucide-react";

const PLANS = [
  {
    name: "Essencial",
    price: "R$ 890",
    period: "mês",
    description:
      "Para profissionais autônomos e negócios em fase inicial que querem crescer com estrutura.",
    features: [
      "Consultoria mensal (2 encontros)",
      "Presença digital ativa",
      "Gestão de contatos e leads",
      "Relatório mensal de resultados",
      "Atendimento via WhatsApp",
      "Acesso à plataforma de acompanhamento",
      "Suporte em até 24h",
    ],
    cta: "Solicitar proposta",
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 1.890",
    period: "mês",
    description:
      "Para clínicas, escritórios e empresas que querem crescimento consistente e mensurável.",
    badge: "Mais escolhido",
    features: [
      "Consultoria semanal (4 encontros)",
      "Estratégia de crescimento completa",
      "Captação ativa de novos clientes",
      "Gestão de reputação e avaliações",
      "Painel de métricas em tempo real",
      "Relatório semanal detalhado",
      "Atendimento prioritário",
    ],
    cta: "Solicitar proposta",
    highlighted: true,
  },
  {
    name: "Personalizado",
    price: "Sob consulta",
    period: "",
    description:
      "Para grupos, franquias e empresas com demandas específicas e equipes maiores.",
    features: [
      "Escopo totalmente personalizado",
      "Gestão multi-unidade",
      "Integração com equipe interna",
      "Treinamento da equipe",
      "SLA e contrato dedicado",
      "Gerente de conta exclusivo",
      "Suporte 24/7",
    ],
    cta: "Vamos conversar",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Investimento
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Planos transparentes, sem letras minúsculas
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Escolha o plano que faz sentido para o momento do seu negócio. A
            consulta inicial é gratuita em qualquer plano.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border relative ${
                plan.highlighted
                  ? "bg-blue-700 border-blue-700 shadow-2xl shadow-blue-200 scale-105"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    <Star className="w-3 h-3 fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3
                className={`font-bold text-xl mb-1 ${
                  plan.highlighted ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  plan.highlighted ? "text-blue-200" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-7">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlighted ? "text-blue-200" : "text-slate-400"
                    }`}
                  >
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-blue-300" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-blue-100" : "text-slate-600"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block w-full text-center font-bold py-3.5 px-6 rounded-xl text-sm transition-all hover:scale-105 ${
                  plan.highlighted
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Parcelamento em até 12× no cartão. Cancele quando quiser nos planos
          mensais.
        </p>
      </div>
    </section>
  );
}

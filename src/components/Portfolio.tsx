import { ExternalLink, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    category: "Clínica Odontológica",
    title: "Sorriso em Dia Odontologia",
    description:
      "Agendamentos lotados, lista de espera e 140% a mais de novos pacientes em três meses. Hoje o WhatsApp da clínica não para.",
    tags: ["Captação de pacientes", "Agenda cheia", "WhatsApp ativo"],
    metrics: [
      { value: "+140%", label: "Novos pacientes" },
      { value: "4.9★", label: "Google Meu Negócio" },
    ],
    color: "bg-blue-50",
    accent: "text-blue-700",
    border: "border-blue-100",
  },
  {
    category: "Escritório de Advocacia",
    title: "Silva & Ramos Advogados",
    description:
      "Consultas agendadas 24h por dia, clientes qualificados chegando sem indicação e posicionamento de autoridade no segmento.",
    tags: ["Clientes qualificados", "Autoridade digital", "Agendamento online"],
    metrics: [
      { value: "+80%", label: "Consultas agendadas" },
      { value: "Top 3", label: "Busca orgânica" },
    ],
    color: "bg-slate-50",
    accent: "text-slate-700",
    border: "border-slate-100",
  },
  {
    category: "Imobiliária",
    title: "Viva Imóveis",
    description:
      "200+ interessados qualificados em um mês de lançamento, com redução no custo por lead e aumento expressivo nas visitas agendadas.",
    tags: ["Leads qualificados", "Visitas agendadas", "Redução de custo"],
    metrics: [
      { value: "+200%", label: "Leads qualificados" },
      { value: "4.8★", label: "Avaliação Google" },
    ],
    color: "bg-green-50",
    accent: "text-green-700",
    border: "border-green-100",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Casos de sucesso
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Negócios reais, resultados reais
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Independente do seu segmento, nosso objetivo é sempre o mesmo: fazer
            o seu negócio ser procurado, encontrado e escolhido.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={`rounded-2xl border ${project.border} ${project.color} overflow-hidden group card-hover`}
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">
                    Foto do cliente
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-1.5 shadow-md">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-wide ${project.accent} mb-2`}
                >
                  {project.category}
                </p>
                <h3 className="font-bold text-slate-900 text-lg mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/70 border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/60">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className={`text-xl font-extrabold ${project.accent}`}>
                        {m.value}
                      </p>
                      <p className="text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors group"
          >
            Quero esses resultados para o meu negócio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

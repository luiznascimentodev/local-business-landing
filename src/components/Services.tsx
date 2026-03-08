import {
  Users,
  Search,
  BadgeCheck,
  TrendingUp,
  MessageCircle,
  Headphones,
} from "lucide-react";

const SERVICES = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Nosso time entende as necessidades do seu negócio e entrega soluções sob medida, sem receitas prontas.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Search,
    title: "Visibilidade Garantida",
    description:
      "Seu negócio aparece quando e onde os clientes estão buscando. Estratégias que funcionam no Google, no Maps e nas redes sociais.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BadgeCheck,
    title: "Qualidade Comprovada",
    description:
      "Processos rígidos de qualidade, entregas no prazo e resultados documentáveis. Só assinamos o trabalho quando temos certeza do resultado.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: MessageCircle,
    title: "Contato Direto e Ágil",
    description:
      "Sem filas de atendimento, sem burocracia. Fale direto com quem resolve pelo WhatsApp e receba respostas em até 2 horas.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Resultados Mensuráveis",
    description:
      "Cada ação é acompanhada com métricas claras. Você sabe exatamente o que está funcionando e o retorno sobre o seu investimento.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description:
      "A parceria não termina na entrega. Estamos ao seu lado com suporte proativo para que seu negócio nunca pare de crescer.",
    color: "from-cyan-500 to-blue-600",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Nossos diferenciais
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Por que os melhores negócios do Brasil confiam em nós
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Mais de 500 clientes atendidos. Uma metodologia testada e aprovada
            para gerar resultados reais para o seu negócio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="relative group bg-white rounded-2xl border border-slate-100 p-8 card-hover shadow-sm"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-5`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {description}
              </p>

              {/* Hover accent line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-2xl bg-gradient-to-r ${color} transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

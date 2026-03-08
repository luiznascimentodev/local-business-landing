import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dra. Fernanda Mello",
    role: "Dentista — Sorriso em Dia",
    text: "Em menos de 30 dias minha agenda estava cheia de novos pacientes. O WhatsApp não para de receber mensagens. Melhor investimento que fiz para a clínica.",
    stars: 5,
    initials: "FM",
    color: "bg-blue-600",
  },
  {
    name: "Dr. Ricardo Silva",
    role: "Advogado Sócio — Silva & Ramos",
    text: "Precisávamos de uma presença que transmitisse credibilidade e gerasse consultas. O resultado superou as expectativas. Hoje somos referência no segmento.",
    stars: 5,
    initials: "RS",
    color: "bg-indigo-600",
  },
  {
    name: "Carla Mendes",
    role: "Gerente de Vendas — Viva Imóveis",
    text: "Conseguimos 200+ leads qualificados em um mês de lançamento. A taxa de conversão é muito acima do que tínhamos antes. Recomendo sem hesitar.",
    stars: 5,
    initials: "CM",
    color: "bg-emerald-600",
  },
  {
    name: "Paulo Esteves",
    role: "Proprietário — Esteves Contabilidade",
    text: "Processo super transparente, entrega no prazo e resultado exatamente como eu queria. Já indiquei para vários empresários e só tenho retorno positivo.",
    stars: 5,
    initials: "PE",
    color: "bg-purple-600",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-slate-700 font-semibold">
              4.9 média — mais de 500 clientes atendidos
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm card-hover relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 text-base">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

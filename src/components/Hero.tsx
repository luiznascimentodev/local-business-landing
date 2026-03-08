import { ArrowRight, Star, MapPin, Clock } from "lucide-react";

const SOCIAL_PROOF = [
  { icon: Star, text: "4.9 — 120 avaliações" },
  { icon: MapPin, text: "Todo o Brasil" },
  { icon: Clock, text: "Resposta em até 2h" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl" />
        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-700/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Há mais de 15 anos no mercado
          </div>

          {/* Headline principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Seu negócio merece ser{" "}
            <span className="gradient-text">encontrado</span>,{" "}
            <span className="gradient-text">escolhido</span> e{" "}
            <span className="gradient-text">lembrado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            Presença digital profissional para clínicas, escritórios,
            imobiliárias e todo tipo de negócio. Mais visibilidade, mais
            contatos, mais clientes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up animation-delay-300">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-blue-900/40"
            >
              Falar com especialista
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              Conhecer os serviços
            </a>
          </div>

          {/* Social proof Pills */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            {SOCIAL_PROOF.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}

const STATS = [
  { value: "500+", label: "Clientes atendidos" },
  { value: "15 anos", label: "De experiência" },
  { value: "98%", label: "Satisfação" },
  { value: "4.9★", label: "Avaliação média" },
];

export function Stats() {
  return (
    <section className="py-14 bg-blue-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                {value}
              </p>
              <p className="text-blue-200 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seusite.com.br";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NegócioPro — Soluções Profissionais",
    description:
      "Soluções personalizadas para clínicas, escritórios, imobiliárias e empresas em todo o Brasil. Mais clientes, mais visibilidade e resultados mensuráveis.",
    url: SITE_URL,
    telephone: "+55-41-99999-9999",
    email: "contato@seuprojeto.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4284,
      longitude: -49.2733,
    },
    areaServed: {
      "@type": "City",
      name: "Brasil",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "R$R$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Profissionais para Negócios",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plano Essencial",
            description:
              "Consultoria e estratégia mensal para profissionais autônomos e negócios em fase inicial.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plano Profissional",
            description:
              "Estratégia completa de crescimento com acompanhamento semanal e captação ativa de clientes.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

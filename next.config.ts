import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Otimizações de imagem para Vercel
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24h
  },

  // Compressão de resposta
  compress: true,

  // Habilita output standalone para deploy eficiente
  // output: "standalone", // Descomente se usar Docker na Vercel

  // Headers de segurança
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // Redirects úteis para SEO
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

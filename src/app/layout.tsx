import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seusite.com.br";
const AUTHOR_NAME = "NegócioPro";
const TITLE = `${AUTHOR_NAME} — Soluções Profissionais para o Seu Negócio`;
const DESCRIPTION =
  "Ajudamos clínicas, escritórios, imobiliárias e empresas de todo o Brasil a crescer com mais clientes, mais visibilidade e resultados mensuráveis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "negócios locais",
    "serviços profissionais",
    "consultoria empresarial",
    "clínica odontológica",
    "escritório de advocacia",
    "imobiliária",
    "como atrair clientes",
    "presença digital",
    "crescimento empresarial",
    "marketing digital",
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${AUTHOR_NAME} — Soluções para Negócios`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${AUTHOR_NAME} — Soluções Profissionais`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="antialiased bg-white text-slate-900">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}

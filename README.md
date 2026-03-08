# SeuNome.dev — Landing Page Portfólio Freelancer

Landing page de alta conversão para portfólio de desenvolvimento web freelancer em Curitiba. Construída com Next.js 15, Tailwind CSS v4 e otimizada para deploy na Vercel.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Estilo:** Tailwind CSS v4
- **Linguagem:** TypeScript
- **Formulário:** React Hook Form + Zod
- **Ícones:** Lucide React
- **Deploy:** Vercel

## Seções da Landing Page

1. **Hero** — Headline, subtítulo, CTAs e social proof
2. **Stats** — Números de projetos entregues e métricas
3. **Serviços** — Cards com os diferenciais do serviço
4. **Portfólio** — Projetos com métricas reais
5. **Processo** — Como funciona em 4 etapas
6. **Preços** — 3 planos com destaque no mais vendido
7. **Depoimentos** — Avaliações de clientes
8. **Contato** — Formulário + info de contato
9. **WhatsApp** — Botão flutuante com pulse animation

## Como usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seusite.com.br
```

### 3. Personalizar conteúdo

Arquivos principais para editar:

| Arquivo                                  | O que personalizar                      |
| ---------------------------------------- | --------------------------------------- |
| `src/app/layout.tsx`                     | Nome, título, descrição, palavras-chave |
| `src/components/Header.tsx`              | Logo e nome do site                     |
| `src/components/Hero.tsx`                | Headline e subtítulo                    |
| `src/components/Services.tsx`            | Serviços oferecidos                     |
| `src/components/Portfolio.tsx`           | Projetos e métricas reais               |
| `src/components/Pricing.tsx`             | Planos e preços                         |
| `src/components/Testimonials.tsx`        | Depoimentos reais                       |
| `src/components/Contact.tsx`             | Telefone, e-mail, localização           |
| `src/components/LeadForm.tsx`            | Número do WhatsApp (`WHATSAPP_NUMBER`)  |
| `src/components/WhatsAppButton.tsx`      | Número do WhatsApp (`WHATSAPP_NUMBER`)  |
| `src/components/LocalBusinessSchema.tsx` | Dados do schema.org                     |
| `src/components/Footer.tsx`              | Links e copyright                       |

### 4. Rodar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 5. Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Faça push para o GitHub
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório
3. Adicione a variável de ambiente `NEXT_PUBLIC_SITE_URL` com a URL do seu domínio
4. Clique em **Deploy**

## SEO incluído

- Metadata completo (Open Graph, Twitter Card)
- `sitemap.xml` gerado automaticamente
- `robots.txt` configurado
- Schema.org `LocalBusiness` para SEO local
- Headers de segurança via `vercel.json` e `next.config.ts`
- Fontes com `display: swap` para melhor CLS

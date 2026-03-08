"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome completo")
    .max(80, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .max(15, "Telefone inválido")
    .regex(/^[\d\s()\-+]+$/, "Somente números"),
  business: z.string().min(2, "Informe o nome do seu negócio"),
  segment: z.string().min(1, "Selecione seu segmento"),
  message: z
    .string()
    .min(10, "Mensagem muito curta")
    .max(1000, "Máximo 1000 caracteres"),
});

type FormData = z.infer<typeof schema>;

const SEGMENTS = [
  "Clínica / Consultório",
  "Escritório de Advocacia",
  "Imobiliária",
  "Contabilidade",
  "Restaurante / Bar",
  "Comércio / Loja",
  "Serviços Gerais",
  "Outro",
];

const WHATSAPP_NUMBER = "5541999999999"; // Substitua pelo seu número

function FieldWrapper({
  error,
  children,
}: {
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-red-500 text-xs">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  cn(
    "w-full bg-white border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all",
    "focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500",
    hasError
      ? "border-red-400 focus:ring-red-200 focus:border-red-400"
      : "border-slate-200",
  );

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    try {
      const msg = encodeURIComponent(
        `Olá! Vim pelo site e gostaria de uma consultoria.\n\n` +
          `*Nome:* ${data.name}\n` +
          `*E-mail:* ${data.email}\n` +
          `*Telefone:* ${data.phone}\n` +
          `*Negócio:* ${data.business}\n` +
          `*Segmento:* ${data.segment}\n` +
          `*Mensagem:* ${data.message}`,
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Mensagem enviada!
        </h3>
        <p className="text-slate-500 text-sm max-w-xs">
          Você foi redirecionado ao WhatsApp. Entraremos em contato em até 2
          horas em dias úteis.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-blue-700 text-sm font-medium hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <FieldWrapper error={errors.name?.message}>
          <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" /> Nome completo *
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="João da Silva"
            className={inputClass(!!errors.name)}
            autoComplete="name"
          />
        </FieldWrapper>

        {/* Email */}
        <FieldWrapper error={errors.email?.message}>
          <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" /> E-mail *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="joao@empresa.com"
            className={inputClass(!!errors.email)}
            autoComplete="email"
          />
        </FieldWrapper>

        {/* Telefone */}
        <FieldWrapper error={errors.phone?.message}>
          <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> WhatsApp *
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(41) 99999-9999"
            className={inputClass(!!errors.phone)}
            autoComplete="tel"
          />
        </FieldWrapper>

        {/* Negócio */}
        <FieldWrapper error={errors.business?.message}>
          <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" /> Nome do negócio *
          </label>
          <input
            {...register("business")}
            type="text"
            placeholder="Clínica Exemplo"
            className={inputClass(!!errors.business)}
          />
        </FieldWrapper>
      </div>

      {/* Segmento */}
      <FieldWrapper error={errors.segment?.message}>
        <label className="text-sm font-medium text-slate-700">Segmento *</label>
        <select
          {...register("segment")}
          className={cn(inputClass(!!errors.segment), "cursor-pointer")}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione seu segmento...
          </option>
          {SEGMENTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FieldWrapper>

      {/* Mensagem */}
      <FieldWrapper error={errors.message?.message}>
        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" /> O que você precisa? *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Fale um pouco sobre seu negócio e o que você está precisando..."
          className={cn(inputClass(!!errors.message), "resize-none")}
        />
      </FieldWrapper>

      {status === "error" && (
        <p className="flex items-center gap-2 text-red-500 text-sm bg-red-50 rounded-lg px-4 py-3 border border-red-100">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Algo deu errado. Tente novamente ou me chame no WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all text-base",
          isSubmitting && "opacity-70 cursor-not-allowed",
        )}
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Solicitar consultoria gratuita
          </>
        )}
      </button>

      <p className="text-center text-slate-400 text-xs">
        Sem spam. Suas informações são confidenciais e não serão compartilhadas.
      </p>
    </form>
  );
}

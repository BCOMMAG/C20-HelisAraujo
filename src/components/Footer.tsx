"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#211A19] text-white border-t border-[#C18F84]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="block focus:outline-none group cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-20 sm:h-24 w-72 sm:w-80 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="320px"
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Atuação especializada, ética e humanizada no Direito das Famílias e Alienação Parental. Atendimento presencial na sede em Curitiba/PR e suporte jurídico online em todo o Brasil e exterior.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C18F84]/30 bg-[#2B2321] text-xs font-heading text-[#FAF6F0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C18F84]" />
              <span>{OFFICE_INFO.lawyer} • Advocacia desde 2012</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#C18F84] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-[#C18F84] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#C18F84] transition-colors">A Advogada</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#C18F84] transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-[#C18F84] transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-[#C18F84] transition-colors">Metodologia de Atendimento</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#C18F84] transition-colors">O Que Dizem os Clientes</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-[#C18F84] transition-colors">Conteúdo Informativo</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#C18F84] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#C18F84] transition-colors">Contato & Sede</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#C18F84] hover:text-white hover:underline font-semibold">Central de Links (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#C18F84] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Sede:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Segunda a Sexta:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Sábado e Domingo:</strong> Fechado</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Helis Kawamura Araújo"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C18F84] hover:border hover:border-[#FAF6F0]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Dra. Helis Kawamura Araújo"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C18F84] hover:border hover:border-[#FAF6F0]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra. Helis Kawamura Araújo"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-body">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-300">
              © {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.
            </p>
            <p className="text-[0.6875rem] text-gray-400 mt-1">
              {OFFICE_INFO.oabText}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-heading font-semibold text-[#C18F84] hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
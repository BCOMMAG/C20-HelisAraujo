"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, ChevronRight, Award, Heart } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo do Hero
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Imagem de Fundo Desktop (Landscape / >= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_desktop.jpg"
            alt="Helis Kawamura Araújo Advocacia - Especialista em Direito das Famílias e Alienação Parental"
            fill
            priority
            quality={92}
            className="object-cover object-[center_28%] brightness-[0.88] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpg"
            alt="Helis Kawamura Araújo Advocacia - Advogada dos Pais e Alta Complexidade em Curitiba"
            fill
            priority
            quality={92}
            className="object-cover object-[center_25%] sm:object-[center_30%] brightness-[0.86] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes mesclando Café Escuro (#211A19) e Moca Profundo (#2B2321) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#211A19]/95 via-[#2B2321]/85 to-[#211A19]/50 lg:from-[#211A19]/92 lg:via-[#2B2321]/65 lg:via-55% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211A19]/95 via-transparent to-[#2B2321]/60 lg:from-[#211A19]/60 lg:via-transparent lg:to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C18F84]/20 rounded-full blur-3xl lg:hidden" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-1 sm:pt-2 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade com tom Rosé Cobre e Moca */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C18F84]/40 bg-[#211A19]/80 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#EBE5DF] mb-3 sm:mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#C18F84]" />
            <span>Helis Kawamura Araújo | Advocacia • Desde 2012</span>
          </div>

          {/* Headline Principal SEM SUBRINHADO */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.16] sm:leading-[1.14] tracking-tight text-white font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
            Defesa estratégica dos pais e proteção integral dos filhos em causas de{" "}
            <span className="text-[#C18F84] font-extrabold">
              alta complexidade
            </span>.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo Conciso + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-1 sm:pb-2 max-w-3xl mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-5 font-normal drop-shadow-sm">
            Atuação especializada em Direito das Famílias desde 2012. Prevenção e combate à alienação parental, falsas acusações, medidas protetivas, fixação de pensão e guarda equilibrada no melhor interesse do infante.
          </p>

          {/* CTAs mesclando Rosé Gold Cobre (#C18F84) e Base Escura */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#C18F84] hover:bg-[#A8746A] hover:scale-[1.02] text-white border-2 border-[#FAF6F0]/40 gap-2.5 py-2.5 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-sm font-semibold tracking-normal shadow-[0_6px_24px_rgba(193,143,132,0.45)] group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Falar com Advogada</span>
            </a>

            <Link
              href="#educativo"
              className="btn-pill bg-[#211A19]/80 backdrop-blur-md text-[#EBE5DF] border border-[#C18F84]/40 hover:bg-[#C18F84] hover:text-white hover:border-[#FAF6F0] hover:scale-[1.02] shadow-md gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <span className="font-semibold">Conheça seus Direitos</span>
              <ChevronRight className="w-4 h-4 text-[#C18F84] group-hover:translate-x-1 group-hover:text-white transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-2.5 xl:py-3 border-t border-white/20 mt-4 xl:mt-6 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="bullet-indicator text-[#C18F84]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Curitiba / PR • Sede Física & Online
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C18F84]" />
                Advogada dos Pais
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C18F84]" />
                Alta Complexidade
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C18F84]" />
                Advocacia desde 2012
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
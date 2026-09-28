"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, Heart, ShieldCheck, Award, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Refs para modelo Desktop (Efeito de Sobreposição / Stacking Pinned com GSAP)
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Estado para acordeão no modelo Mobile
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  useGSAP(
    () => {
      // 1. Animação bidirecional do cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. DESKTOP: Sobreposição com Pinning — Efeito de Stacking
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (desktopContainerRef.current && row1Ref.current && row2Ref.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              start: "top 20%",
              end: "+=520",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // A linha 1 encolhe sutilmente e ganha opacidade suave
          tl.to(
            row1Ref.current,
            {
              scale: 0.94,
              opacity: 0.25,
              ease: "none",
            },
            0
          );

          // A linha 2 entra suavemente por cima, cobrindo a linha 1 perfeitamente
          tl.fromTo(
            row2Ref.current,
            {
              y: 440,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
            },
            0
          );
        }
      });
    },
    { scope: sectionRef }
  );

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "Heart":
        return <Heart className="w-5 h-5 text-[var(--accent)]" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-[var(--accent)]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />;
      case "Award":
        return <Award className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Scale className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  const topRowAreas = PRACTICE_AREAS.slice(0, 2);
  const bottomRowAreas = PRACTICE_AREAS.slice(2, 4);

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo em Rosé Cobre e Taupe */}
      <GeometricLines variant="areas" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Áreas de Atuação Especializada
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação estratégica e humanizada na defesa intransigente dos direitos de pais e na proteção do desenvolvimento saudável de crianças e adolescentes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): Efeito de Stacking com Pinning Padrão Ouro          */}
        {/* ========================================================================= */}
        <div
          ref={desktopContainerRef}
          className="hidden md:block relative w-full h-[620px] lg:h-[580px] overflow-hidden"
        >
          {/* LINHA 1 (Cards 01 e 02: Alienação Parental e Falsas Acusações) */}
          <div
            ref={row1Ref}
            className="absolute top-0 inset-x-0 grid md:grid-cols-2 gap-6 lg:gap-8 will-change-transform"
          >
            {topRowAreas.map((area, idx) => (
              <div
                key={area.id}
                className="rounded-3xl p-7 lg:p-9 bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-sm flex flex-col justify-between h-[560px] lg:h-[520px] transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center shadow-2xs">
                      {getAreaIcon(area.iconName)}
                    </div>
                    <span className="font-heading text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                      0{idx + 1} / Especialidade
                    </span>
                  </div>

                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {area.shortDesc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/30 mb-5">
                    <p className="font-heading text-xs font-semibold text-[var(--text-main)] leading-relaxed">
                      {area.highlightText}
                    </p>
                  </div>

                  {/* Lista de Atuações com CheckCircle2 */}
                  <div className="space-y-2 mb-4">
                    {area.coverageList.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Gostaria de consultoria jurídica com a advogada sobre ${area.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group cursor-pointer"
                  >
                    <span>Consultar sobre {area.title.split("&")[0].trim()}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* LINHA 2 (Cards 03 e 04: Guarda/Convivência e Pensão Alimentícia) */}
          <div
            ref={row2Ref}
            className="absolute top-0 inset-x-0 grid md:grid-cols-2 gap-6 lg:gap-8 will-change-transform z-10"
          >
            {bottomRowAreas.map((area, idx) => (
              <div
                key={area.id}
                className="rounded-3xl p-7 lg:p-9 bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-sm flex flex-col justify-between h-[560px] lg:h-[520px] transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center shadow-2xs">
                      {getAreaIcon(area.iconName)}
                    </div>
                    <span className="font-heading text-xs uppercase tracking-widest font-bold text-[var(--accent)]">
                      0{idx + 3} / Especialidade
                    </span>
                  </div>

                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {area.shortDesc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/30 mb-5">
                    <p className="font-heading text-xs font-semibold text-[var(--text-main)] leading-relaxed">
                      {area.highlightText}
                    </p>
                  </div>

                  {/* Lista de Atuações com CheckCircle2 */}
                  <div className="space-y-2 mb-4">
                    {area.coverageList.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Gostaria de consultoria jurídica com a advogada sobre ${area.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group cursor-pointer"
                  >
                    <span>Consultar sobre {area.title.split("&")[0].trim()}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): Formato Acordeão Expansível Elegante                */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-4">
          {PRACTICE_AREAS.map((area, idx) => {
            const isExpanded = expandedMobileId === area.id;

            return (
              <div
                key={area.id}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs overflow-hidden transition-all duration-300"
              >
                {/* Cabeçalho do Card Mobile */}
                <button
                  type="button"
                  onClick={() => toggleMobileExpand(area.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {getAreaIcon(area.iconName)}
                    </div>
                    <div>
                      <span className="text-[0.625rem] font-heading uppercase tracking-wider font-bold text-[var(--accent)] block mb-0.5">
                        0{idx + 1} / Especialidade
                      </span>
                      <h3 className="font-heading font-bold text-base text-[var(--text-main)] leading-snug">
                        {area.title}
                      </h3>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-1 line-clamp-2">
                        {area.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 mt-1 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Conteúdo Expansível no Mobile */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-0 border-t border-[var(--border-subtle)]/20 animate-fade-in-down space-y-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/30 mt-3">
                      <p className="font-heading text-xs font-semibold text-[var(--text-main)] leading-relaxed">
                        {area.highlightText}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[0.6875rem] font-heading uppercase tracking-wider font-bold text-[var(--text-muted)] block">
                        Principais Atuações:
                      </span>
                      {area.coverageList.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)] font-body">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="font-body text-xs text-[var(--text-muted)] italic leading-relaxed pt-1">
                      {area.casesSummary}
                    </p>

                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                          `Olá! Gostaria de consultoria jurídica com a advogada sobre ${area.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-pill bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white py-2.5 px-4 text-xs font-semibold gap-2 shadow-sm inline-flex items-center justify-center cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Falar com Advogada sobre este tema</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
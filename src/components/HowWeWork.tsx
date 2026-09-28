"use client";

import { useRef } from "react";
import { WORK_STEPS, OFFICE_INFO } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
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

      // 2. Barra de progresso da trilha desenhada com scrub
      if (progressBarRef.current && trackRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          }
        );
      }

      // 3. Revelação dos 4 passos em cascata
      if (trackRef.current) {
        const stepItems = trackRef.current.querySelectorAll(".step-card-item");
        if (stepItems.length > 0) {
          gsap.fromTo(
            stepItems,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: trackRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 4. CTA inferior
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="como-atuamos"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo em Rosé Cobre e Taupe */}
      <GeometricLines variant="methodology" />

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
                03 / Metodologia & Etapas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Como Funciona Nosso Atendimento
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Uma abordagem humanizada, ética e estruturada em etapas claras para garantir segurança jurídica, serenidade e previsibilidade para você e seus filhos.
          </p>
        </div>

        {/* Container com Trilha Conectora Progressiva */}
        <div ref={trackRef} className="relative pt-6 pb-2">
          {/* Linha guia de fundo */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-[var(--border-subtle)]/40 pointer-events-none" />

          {/* Linha animada de progresso */}
          <div
            ref={progressBarRef}
            className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#211A19] via-[#C18F84] to-[#FAF6F0] dark:from-[#211A19] dark:via-[#C18F84] dark:to-[#EBE5DF] will-change-transform pointer-events-none z-10"
          />

          {/* Cards dos 4 Passos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {WORK_STEPS.map((step) => (
              <div
                key={step.number}
                className="step-card-item rounded-3xl p-7 bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs flex flex-col justify-between hover:border-[var(--accent)] hover:shadow-md transition-all group will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]/40 text-[var(--accent)] font-heading text-lg font-bold flex items-center justify-center shadow-2xs group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                      {step.number}
                    </div>
                    <span className="text-[0.6875rem] font-heading uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                      Passo {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg lg:text-xl font-bold text-[var(--text-main)] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <span className="font-heading text-xs font-semibold text-[var(--accent)] block mb-3">
                    {step.subtitle}
                  </span>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]/25 flex items-center text-xs font-heading font-semibold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  <span>Etapa Fundamental</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Inferior com Variação de Cores (Regra 9-D) */}
        <div
          ref={ctaRef}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 text-center will-change-transform max-w-3xl mx-auto"
        >
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-2">
            Pronto para agir com amparo técnico e proteger seus filhos?
          </h3>
          <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] max-w-lg mx-auto mb-5 leading-relaxed">
            Fale diretamente com a advogada. Relate o momento que sua família está vivenciando e receba orientação clara e reservada.
          </p>
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#2B2321] text-[#FAF6F0] hover:bg-[#C18F84] hover:text-white dark:bg-[#C18F84] dark:hover:bg-[#A8746A] dark:text-white border-2 border-[#C18F84]/50 gap-2 text-xs sm:text-sm font-semibold shadow-md hover-lift transition-all inline-flex items-center cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Falar com Advogada</span>
          </a>
        </div>
      </div>
    </section>
  );
}
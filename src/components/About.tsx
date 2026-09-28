"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { LAWYER_PROFILE, OFFICE_INFO } from "@/lib/data";
import { Compass, Eye, ShieldCheck, ChevronDown, Sparkles, Heart, Scale, Users } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho da Seção com animação bidirecional
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Foto oficial da Dra. Helis Kawamura Araújo
      if (photoCardRef.current) {
        gsap.fromTo(
          photoCardRef.current,
          { opacity: 0, scale: 0.92, y: 45 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photoCardRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna de texto e biografia em cascata bidirecional
      if (textContentRef.current) {
        const textElements = textContentRef.current.querySelectorAll(".about-text-anim");
        if (textElements.length > 0) {
          gsap.fromTo(
            textElements,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textContentRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 4. Princípios (Missão, Visão e Valores) estilo Pilares Institucionais
      if (cardsRef.current) {
        const items = cardsRef.current.querySelectorAll(".about-pillar-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo em Rosé Cobre e Taupe */}
      <GeometricLines variant="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                01 / Perfil Profissional & Trajetória
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Sobre a Dra. Helis Kawamura Araújo
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Prática forense ininterrupta desde 2012 aliando sensibilidade humana, combatividade técnica e acolhimento dos pais e filhos em causas de alta complexidade.
          </p>
        </div>

        {/* Bloco Principal: Layout split-screen */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 relative">
          {/* Coluna de Conteúdo e Textos */}
          <div ref={textContentRef} className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-start space-y-6">
            <div className="about-text-anim space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-heading font-semibold text-[var(--accent)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Advogada dos Pais | Alta Complexidade em Direito das Famílias</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] leading-tight">
                Esperança, Rigor Técnico e Proteção Integral da Criança
              </h3>
            </div>

            {/* Citação de Proposta de Valor */}
            <div className="about-text-anim p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/30 border-l-4 border-l-[var(--accent)] shadow-2xs">
              <p className="font-heading italic text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
                &ldquo;{OFFICE_INFO.slogan}&rdquo;
              </p>
            </div>

            {/* Resumo da trajetória */}
            <div className="about-text-anim space-y-3 font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed font-normal">
              <p>
                Dra. Helis Kawamura Araújo é advogada desde 2012, formada pela Pontifícia Universidade Católica do Paraná (PUC/PR). Sua área de vocação e amor sempre foi o Direito das Famílias, fundamentada na certeza de que através do trabalho jurídico as pessoas readquirem a esperança e a oportunidade real de viver mais felizes.
              </p>
              <p>
                Atuou como defensora dativa durante muitos anos nas comarcas de Piraquara, São José dos Pinhais, Curitiba, Colombo e Fazenda Rio Grande, forjando a convicção de que todas as pessoas, independentemente de sua condição financeira, são plenamente dignas de uma defesa técnica exemplar e destemida.
              </p>
              <p>
                Especializada em causas de alta complexidade que envolvem alienação parental, falsas acusações, medidas protetivas, guarda e alimentos, a Dra. Helis atua para proteger os vulneráveis e demonstrar em juízo qual dos genitores está mais preparado para exercer a guarda de forma equilibrada no superior interesse do infante.
              </p>
            </div>

            {/* Destaques Rápidos */}
            <div className="about-text-anim grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                <span className="font-heading text-xs font-bold text-[var(--accent)] block">Desde 2012</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Prática Forense Ativa</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                <span className="font-heading text-xs font-bold text-[var(--accent)] block">PUC/PR</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Formação Acadêmica</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs col-span-2 sm:col-span-1">
                <span className="font-heading text-xs font-bold text-[var(--accent)] block">Alta Complexidade</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Advogada dos Pais</span>
              </div>
            </div>

            {/* Botões de Ação com Contraste Perfeito em Ambos os Modos */}
            <div className="about-text-anim flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleToggleExpand}
                className="btn-pill bg-white text-[var(--text-main)] border-2 border-[var(--accent)]/60 hover:bg-[var(--accent)] hover:text-white dark:bg-[var(--bg-card)] dark:text-[var(--text-main)] dark:border-[var(--accent)]/50 dark:hover:bg-[var(--accent)] dark:hover:text-white gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift transition-all cursor-pointer flex items-center"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Ocultar detalhes" : "Conhecer Trajetória & Experiência"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white border-2 border-[var(--bg-primary)]/40 gap-2 py-3 px-6 text-xs sm:text-sm shadow-md hover-lift transition-all flex items-center cursor-pointer font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Falar com Advogada</span>
              </a>
            </div>

            {/* CONTEÚDO COMPLETO CONDICIONAL */}
            {isExpanded && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]/30 animate-fade-in-down">
                <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-xs space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[var(--accent)]" />
                    <span>Filosofia de Atuação & Compromisso com os Filhos</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] font-body leading-relaxed">
                    {LAWYER_PROFILE.personalNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="bullet-indicator text-[var(--accent)] mt-1.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[var(--accent)]" />
                    <span>Marcos Profissionais & Prática Forense</span>
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {LAWYER_PROFILE.careerHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)] shadow-2xs flex flex-col justify-between"
                      >
                        <p className="font-body text-xs text-[var(--text-main)] leading-relaxed">
                          {hl}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Coluna da Foto Oficial da Dra. Helis Kawamura Araújo */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div ref={photoCardRef} className="w-full max-w-[360px] sm:max-w-[400px] will-change-transform">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[var(--accent)]/50 dark:border-[var(--accent)]/40 shadow-[0_12px_35px_rgba(15,30,54,0.35)] hover-lift group bg-[#0B121C]">
                {/* Feixe de luz suave */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />
                <Image
                  src="/Foto_perfil.jpg"
                  alt={LAWYER_PROFILE.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C]/95 via-[#0F1E36]/35 to-transparent pointer-events-none" />

                {/* Badge Inferior com Nome e Titularidade */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10 pointer-events-none">
                  <span className="text-[0.6875rem] uppercase tracking-widest text-[#F8F9FA] font-heading font-bold block mb-1">
                    Advogada Titular
                  </span>
                  <p className="font-heading text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow-sm">
                    {LAWYER_PROFILE.name}
                  </p>
                  <p className="text-xs text-[#F8F9FA] font-body mt-1 leading-relaxed">
                    Direito das Famílias | Advogada dos Pais | Alta Complexidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores */}
        <div className="pt-8 border-t border-[var(--border-subtle)]/30">
          <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
                Diretrizes & Princípios Norteadores
              </span>
            </div>
            <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
              Compromisso com a Criança & Sensibilidade Humana
            </span>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]/30"
          >
            {/* 1. Nossa Missão */}
            <div className="about-pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 first:pt-0 first:pl-0 will-change-transform">
              <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                <Compass className="w-5 h-5 text-[var(--accent)]" />
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                  Nossa Missão
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                Esperança, Acolhimento & Justiça Real
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Prestar defesa jurídica humanizada e combativa, garantindo que pais e filhos desfrutem da convivência familiar saudável e que os mais vulneráveis encontrem amparo e proteção integral.
              </p>
            </div>

            {/* 2. Nossa Visão */}
            <div className="about-pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 first:pt-0 will-change-transform">
              <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                <Eye className="w-5 h-5 text-[var(--accent)]" />
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                  Nossa Visão
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                Referência em Defesa dos Pais & Alta Complexidade
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Ser reconhecida como banca de máxima excelência técnica em combate à alienação parental, desconstituição de falsas imputações e equilíbrio de guarda em Curitiba/PR e em todo o Brasil.
              </p>
            </div>

            {/* 3. Nossos Valores */}
            <div className="about-pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 first:pt-0 will-change-transform">
              <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                  Nossos Valores
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                Compromissos Éticos
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Prioridade Absoluta da Criança • Verdade dos Fatos • Coragem Forense • Sigilo Ético Rigoroso • Dedicação Pessoal a Cada Caso Confiado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
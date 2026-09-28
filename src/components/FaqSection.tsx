"use client";

import { useState, useRef } from "react";
import { FAQ_DATA, OFFICE_INFO } from "@/lib/data";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("alienacao-parental");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-ap-1": true,
    "faq-fa-1": true,
  });

  useGSAP(
    () => {
      // 1. Cabeçalho com animação bidirecional
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

      // 2. Acordeões em cascata bidirecional
      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".faq-accordion-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: listRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Card inferior
      if (bottomCardRef.current) {
        gsap.fromTo(
          bottomCardRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomCardRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef, dependencies: [activeTab] }
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const currentCategory = FAQ_DATA.find((c) => c.id === activeTab) || FAQ_DATA[0];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo em Rosé Cobre e Taupe */}
      <GeometricLines variant="faq" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="text-center pb-8 border-b border-[var(--border-subtle)]/30 mb-10 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bullet-indicator text-[var(--accent)]" />
            <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
              06 / Esclarecimento de Dúvidas
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold mb-3">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Respostas práticas e seguras para as dúvidas mais comuns sobre alienação parental, falsas acusações, medidas protetivas, guarda de filhos e pensão alimentícia.
          </p>
        </div>

        {/* Abas de Navegação por Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FAQ_DATA.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full font-heading text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#C18F84] text-white border-2 border-[#FAF6F0]/50 shadow-[0_2px_12px_rgba(193,143,132,0.35)] scale-105"
                    : "bg-[var(--bg-secondary)]/80 text-[var(--text-muted)] border border-transparent hover:text-[var(--text-main)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Lista de Acordeões da Categoria Ativa */}
        <div ref={listRef} className="space-y-3.5 mb-12 will-change-transform">
          {currentCategory.items.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                className="faq-accordion-item rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[var(--text-main)] pr-4 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#C18F84] text-white rotate-180"
                        : "bg-[var(--bg-secondary)] text-[var(--accent)] group-hover:bg-[#C18F84]/15"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 animate-fade-in-down border-t border-[var(--border-subtle)]/15">
                    <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pt-4">
                      {item.answer}
                    </p>

                    {/* CTA para WhatsApp com Mensagem Personalizada (Obrigatório pela Regra 5) */}
                    <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]/15 flex items-center justify-between flex-wrap gap-3">
                      <span className="text-xs text-[var(--text-muted)] font-body">
                        Deseja entender como essa regra se aplica ao caso do seu filho?
                      </span>
                      <a
                        href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                          `Olá, Dra. Helis! Vi no FAQ a dúvida sobre "${item.question}" e gostaria de retirar dúvidas com a advogada sobre o meu caso.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C18F84] hover:bg-[#A8746A] text-white border border-[#FAF6F0]/50 text-xs font-heading font-semibold shadow-xs hover-lift transition-all cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Saiba mais no WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card Inferior de Contato */}
        <div
          ref={bottomCardRef}
          className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 text-center will-change-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto mb-3 text-[var(--accent)] shadow-2xs">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-2">
            Sua dúvida não foi respondida acima?
          </h3>
          <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto mb-5 leading-relaxed">
            Cada situação familiar envolve particularidades emocionais, probatórias e processuais específicas. Envie sua mensagem no WhatsApp para uma análise direta e privativa com advogada especializada.
          </p>
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#C18F84] hover:bg-[#A8746A] text-white border-2 border-[#FAF6F0]/40 gap-2 shadow-[0_4px_20px_rgba(193,143,132,0.35)] text-xs sm:text-sm font-semibold inline-flex items-center cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Retirar dúvidas com Advogada no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
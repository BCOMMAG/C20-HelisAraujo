"use client";

interface GeometricLinesProps {
  variant:
    | "pillars"
    | "about"
    | "areas"
    | "reviews"
    | "methodology"
    | "educational"
    | "faq"
    | "contact";
  className?: string;
}

export function GeometricLines({ variant, className = "" }: GeometricLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none transition-colors duration-500 ${className}`}
    >
      {/* 1. PILARES: Arcos circulares concêntricos sutis e nós de apoio */}
      {variant === "pillars" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.12] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Círculos concêntricos gigantes inspirados na logo */}
            <circle cx="20%" cy="50%" r="220" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="20%" cy="50%" r="380" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="80%" cy="50%" r="260" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="80%" cy="50%" r="440" fill="none" stroke="currentColor" strokeWidth="0.8" />
            {/* Nós discretos */}
            <circle cx="20%" cy="50%" r="3" className="fill-[#A86E61]/[0.3] dark:fill-[#94A3B8]/[0.3]" />
            <circle cx="80%" cy="50%" r="3" className="fill-[#A86E61]/[0.3] dark:fill-[#94A3B8]/[0.3]" />
          </svg>
        </div>
      )}

      {/* 2. SOBRE A ADVOGADA: Curvas orgânicas fluidas e arcos que envolvem a foto */}
      {variant === "about" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.13] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(circle_at_65%_45%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Curvas fluidas orgânicas */}
            <path
              d="M -100 200 C 300 100, 600 450, 1100 250 S 1600 500, 2000 300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M -100 350 C 400 250, 700 600, 1200 400 S 1700 650, 2100 450"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="8 6"
            />
            {/* Arcos concêntricos abraçando o bloco de retrato */}
            <circle cx="75%" cy="40%" r="180" fill="none" stroke="currentColor" strokeWidth="1" className="hidden lg:block" />
            <circle cx="75%" cy="40%" r="320" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 5" className="hidden lg:block" />
            <circle cx="75%" cy="40%" r="480" fill="none" stroke="currentColor" strokeWidth="0.6" className="hidden lg:block" />
          </svg>
        </div>
      )}

      {/* 3. ÁREAS DE ATUAÇÃO: Malhas de anéis e curvas de proteção familiar */}
      {variant === "areas" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.12] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle cx="10%" cy="20%" r="300" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="10%" cy="20%" r="500" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 6" />
            <circle cx="90%" cy="80%" r="340" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="90%" cy="80%" r="560" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="8 6" />
            {/* Linha fluida diagonal */}
            <path
              d="M 0 500 C 500 300, 900 700, 1500 400"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      )}

      {/* 4. METODOLOGIA: Trilha de arcos conectores sequenciais */}
      {variant === "methodology" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.12] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle cx="25%" cy="30%" r="160" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="50%" cy="30%" r="160" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="75%" cy="30%" r="160" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <path
              d="M -50 120 C 350 40, 750 200, 1150 120 S 1750 60, 2050 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      )}

      {/* 5. DEPOIMENTOS: Arcos suaves de acolhimento social */}
      {variant === "reviews" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.11] dark:text-[#94A3B8]/[0.14] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle cx="50%" cy="110%" r="650" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50%" cy="110%" r="850" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 6" />
            <circle cx="50%" cy="110%" r="1050" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      )}

      {/* 6. CONTEÚDO EDUCATIVO: Arcos editoriais de pesquisa e saber */}
      {variant === "educational" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.12] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(circle_at_30%_30%,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle cx="15%" cy="35%" r="220" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="15%" cy="35%" r="360" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="5 5" />
            <path
              d="M 100 700 C 400 500, 800 900, 1400 650"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      )}

      {/* 7. FAQ: Arcos concêntricos de estabilidade e foco nas respostas */}
      {variant === "faq" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.12] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle cx="50%" cy="0%" r="400" fill="none" stroke="currentColor" strokeWidth="0.85" />
            <circle cx="50%" cy="0%" r="620" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 6" />
            <circle cx="50%" cy="0%" r="850" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      )}

      {/* 8. CONTATO: Arcos convergentes de rota e acolhimento presencial */}
      {variant === "contact" && (
        <div className="absolute inset-0 text-[#A86E61]/[0.13] dark:text-[#94A3B8]/[0.15] [mask-image:radial-gradient(circle_at_50%_50%,black_55%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle cx="80%" cy="50%" r="240" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="80%" cy="50%" r="420" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="80%" cy="50%" r="640" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="8 6" />
            <circle cx="20%" cy="80%" r="300" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      )}
    </div>
  );
}

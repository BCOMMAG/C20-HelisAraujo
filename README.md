# HELIS KAWAMURA ARAÚJO | ADVOCACIA

Website institucional de alta performance para a banca **HELIS KAWAMURA ARAÚJO | ADVOCACIA**, especializada em **Direito das Famílias**, **Alienação Parental**, **Falsas Acusações**, **Medidas Protetivas**, **Guarda de Filhos**, **Regime de Convivência** e **Pensão Alimentícia** em causas de alta complexidade.

## 🚀 Tecnologias & Arquitetura

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router com Static Export)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações Fluidas**: [GSAP 3](https://greensock.com/gsap/) + `@gsap/react` + [Lenis](https://lenis.darkroom.engineering/) Smooth Scroll
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Tipografia**: [Inter](https://fonts.google.com/specimen/Inter) (Títulos) + [Krub](https://fonts.google.com/specimen/Krub) (Texto corrido)
- **Deploy**: Cloudflare Pages (`https://helisaraujo.pages.dev`)

---

## 🎨 Paleta de Cores (Regra 60-30-10)

- **Ação & CTAs (10%)**: Rosé Gold Cobre (`#C18F84`)
- **Modo Claro (Light Mode)**:
  - Fundo (60%): Areia Suave (`#FAF6F0`)
  - Primária / Títulos (30%): Moca Profundo (`#2B2321`)
  - Textos & Suporte: Taupe / Cinza Quente (`#7A6F6C`)
- **Modo Escuro (Dark Mode)**:
  - Fundo (60%): Café Escuro / Grafite Quente (`#211A19`)
  - Primária / Títulos (30%): Pashmina Claro (`#EBE5DF`)
  - Textos & Suporte: Taupe Suave (`#A39693`)

---

## 🏛️ Destaques da Implementação

1. **Navbar & Logo 100% Desacoplados**: A logo possui fluxo visual independente e nunca empurra a altura da barra do menu. Todas as logos retornam com scroll suave ao topo.
2. **Hero Full Screen (100dvh)**: Imagens dedicadas para Desktop (`header_desktop.jpg`) e Mobile/Tablet (`header_mobile.jpg`) com enquadramentos perfeitos e sem corte de conteúdo.
3. **Linhas Geométricas Sutis**: Arcos concêntricos e curvas orgânicas inspiradas no monograma da marca em Rosé Cobre e Taupe.
4. **Central de Links (`/links`)**: Modelo Split Screen 50/50 sem rolagem no desktop e 100% fit sem scroll no mobile.
5. **Contato Cenário A (Sede Física)**: Google Maps interativo, rota traçada no GPS e dados da sede na Av. Winston Churchill, 1824, sl 912, Capão Raso, Curitiba/PR.
6. **Conformidade Ética OAB**: Estrita observância ao Código de Ética e Disciplina e ao Provimento nº 205/2021 do CFOAB (sem número de OAB fictício e avaliações no padrão Google Verificado).
7. **Regras Específicas Atendidas**:
   - Zero menções a anos relativos ("desde 2012" utilizado estritamente).
   - Botão do menu WhatsApp oficial verde com ícone e rótulo `"WhatsApp"`.
   - CTAs com mensagens personalizadas no FAQ.
   - Variações cromáticas entre os botões de conversão.

---

## 📦 Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Gerar build estático para produção (Cloudflare Pages /out)
npm run build

# Executar lint
npm run lint
```

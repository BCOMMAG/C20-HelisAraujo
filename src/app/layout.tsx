import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const krub = Krub({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://helisaraujo.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Helis Kawamura Araújo Advocacia | Advogada dos Pais & Alta Complexidade - Curitiba PR",
    template: "%s | Helis Kawamura Araújo Advocacia",
  },
  description:
    "Advocacia especializada em Direito das Famílias e Sucessões desde 2012. Atuação estratégica em alienação parental, falsa acusação, medidas protetivas, guarda unilateral/compartilhada e pensão. Sede em Curitiba/PR e atendimento online em todo o Brasil.",
  keywords: [
    "advogada dos pais curitiba",
    "advogada alienação parental curitiba",
    "defesa contra falsa acusacao curitiba",
    "medida protetiva vara de familia",
    "advogada especialista em guarda curitiba",
    "pensao alimenticia e revisional curitiba",
    "direito das familias alta complexidade",
    "helis araujo advocacia",
    "helis kawamura araujo",
  ],
  authors: [{ name: "Helis Kawamura Araújo" }],
  creator: "Helis Kawamura Araújo",
  publisher: "Helis Kawamura Araújo Advocacia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Helis Kawamura Araújo Advocacia | Advogada dos Pais & Alta Complexidade",
    description:
      "Atuação especializada em Direito das Famílias e Sucessões desde 2012. Foco técnico e humanizado em alienação parental, proteção de vínculos e guarda no melhor interesse da criança.",
    siteName: "Helis Kawamura Araújo Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "Helis Kawamura Araújo Advocacia - Especialista em Direito das Famílias e Alienação Parental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helis Kawamura Araújo Advocacia | Advogada dos Pais & Alta Complexidade",
    description:
      "Defesa estratégica em Direito das Famílias, alienação parental e guarda. Sede física em Curitiba/PR e atendimento online seguro.",
    images: ["/og-image_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${krub.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
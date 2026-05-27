import type { Metadata } from "next";
import { Geist, Bebas_Neue, Bodoni_Moda } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { AuthProvider } from "./components/auth/AuthProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BANC — High-Fashion Horology",
  description:
    "High-fashion horology designed and manufactured with architectural rigor in the heart of Milan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bebasNeue.variable} ${bodoniModa.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body-md selection:bg-primary selection:text-surface">
        {/* Prevent flash of wrong theme — sets CSS vars before React hydrates */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('banc-theme')==='light'){var v={'--color-background':'#f4f0eb','--color-surface':'#f4f0eb','--color-surface-container-lowest':'#ede8e2','--color-surface-container-low':'#f0ebe4','--color-surface-container':'#e8e2db','--color-surface-container-high':'#ddd8d0','--color-surface-container-highest':'#d5cfc7','--color-surface-variant':'#d5cfc7','--color-primary':'#2a2a2a','--color-on-primary':'#f4f0eb','--color-on-surface':'#1a1a1a','--color-on-surface-variant':'#5a5550','--color-on-background':'#1a1a1a','--color-inverse-surface':'#1a1a1a','--color-inverse-on-surface':'#f4f0eb','--color-outline':'#8a8480','--color-outline-variant':'#c5bfbb','--banc-body-bg':'#ede8e2','--banc-body-color':'#1a1a1a','--banc-glass-bg':'rgba(244,240,235,0.85)','--banc-mega-start':'#f4f0eb','--banc-mega-end':'rgba(244,240,235,0.98)'};var r=document.documentElement;Object.keys(v).forEach(function(k){r.style.setProperty(k,v[k])})}}catch(e){}`,
          }}
        />
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

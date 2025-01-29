import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hildo Dev | Programador & Criador de Soluções Digitais",
  description: "Acesse todos os links de hildodev em um só lugar! Solicite orçamentos para desenvolvimento de sites e aplicativos, conheça meus projetos e entre em contato facilmente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}

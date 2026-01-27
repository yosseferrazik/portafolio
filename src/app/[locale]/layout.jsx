import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./global.css";

import Navbar from "@/components/layout/Navbar/Navbar";
import LanguageSwitcher from "@/components/intl/LanguageSwitcher/LanguageSwitcher";
import { AnimatePresence } from "framer-motion";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const metadata = {
  title: "Yossef Errazik | Desarrollador Web & Portfolio",
  description:
    "Portfolio personal de Yossef Errazik, desarrollador web especializado en React, Next.js y diseño moderno.",
  keywords: [
    "Yossef Errazik",
    "desarrollador web",
    "frontend developer",
    "backend developer",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Yossef Errazik" }],
  creator: "Yossef Errazik",
  openGraph: {
    title: "Yossef Errazik | Desarrollador Web",
    description: "Portfolio personal con proyectos, experiencia y contacto.",
    url: "https://yosseferrazik.com",
    siteName: "Yossef Errazik",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main>
            <div className={`optionContainer`}>
              <LanguageSwitcher />
            </div>
            <AnimatePresence>
              <section className={`content`}>{children}</section>
            </AnimatePresence>
          </main>
          <Navbar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

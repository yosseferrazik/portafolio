import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Navbar from "@/components/layout/Navbar/Navbar";
import LanguageSwitcher from "@/components/intl/LanguageSwitcher/LanguageSwitcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
            <section className={`content`}>{children}</section>
          </main>
          <Navbar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

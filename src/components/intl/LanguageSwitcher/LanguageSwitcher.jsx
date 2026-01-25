"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./LanguageSwitcher.module.css";

import Spain from "@/components/icons/svg/Spain";
import English from "@/components/icons/svg/English";

const LANGUAGES = [
  { code: "es", short: "ES", name: "Español", Icon: Spain },
  { code: "en", short: "EN", name: "English", Icon: English },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  const currentLang =
    LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];

  return (
    <div className={styles.wrapper}>
      <motion.button
        type="button"
        className={styles.trigger}
        whileHover={{ y: -3 }}
        onClick={() => setOpen((o) => !o)}
      >
        <currentLang.Icon size={22} />
        <div className={styles.text}>
          <span className={styles.name}>{currentLang.name}</span>
          <span className={styles.short}>{currentLang.short}</span>
        </div>
      </motion.button>

      {open && (
        <ul className={styles.menu}>
          {LANGUAGES.map(({ code, short, name, Icon }) => (
            <li key={code}>
              <button
                type="button"
                className={`${styles.option} ${
                  locale === code ? styles.active : ""
                }`}
                onClick={() => handleChange(code)}
              >
                <Icon size={22} />
                <div className={styles.text}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.short}>{short}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

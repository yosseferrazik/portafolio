"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState } from "react";
import "flag-icons/css/flag-icons.min.css";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        <span className={`fi fi-${locale === "es" ? "es" : "sh"}`}></span>
      </button>

      {open && (
        <ul className={styles.menu}>
          <li>
            <button
              className={`${styles.option} ${
                locale === "es" ? styles.active : ""
              }`}
              onClick={() => handleChange("es")}
            >
              <span className="fi fi-es"></span>
            </button>
          </li>

          <li>
            <button
              className={`${styles.option} ${
                locale === "en" ? styles.active : ""
              }`}
              onClick={() => handleChange("en")}
            >
              <span className="fi fi-sh"></span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

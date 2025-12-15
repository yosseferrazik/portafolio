import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import styles from "./Navbar.module.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { BookHeart, Brain, FolderOpen } from "lucide-react";

const Navbar = () => {
  const t = useTranslations("Navigation");

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={`${styles.section} ${styles.title}`}>
          <h3>Yossef Errazik</h3>
        </div>

        <div className={`${styles.section} ${styles.center}`}>
          <Link href="/about">
            <BookHeart /> {t("about")}
          </Link>
          <Link href="/projects">
            <FolderOpen /> {t("projects")}
          </Link>
          <Link href="/contact">
            <Brain /> {t("skills")}
          </Link>
        </div>

        <div className={`${styles.section} ${styles.left}`}>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

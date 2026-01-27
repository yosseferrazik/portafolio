"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { useTranslations } from "next-intl";

import { At, Home, Timeline, User, Work } from "@/components/icons";

const navItems = [
  { href: "/", key: "home", icon: Home },
  { href: "/about", key: "about", icon: User },
  { href: "/experience", key: "experience", icon: Timeline },
  { href: "/projects", key: "projects", icon: Work },
  { href: "/contact", key: "contact", icon: At },
];

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  return (
    <nav className={styles.nav}>
      {navItems.map(({ href, key, icon: Icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`${styles.navItem} ${active ? styles.active : ""}`}
          >
            <motion.span
              className={styles.inner}
              whileHover={{ y: -3 }}
              animate={{ y: active ? -3 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.label}>{t(key)}</span>
            </motion.span>

            {active && (
              <motion.span
                layoutId="navbar-active-indicator"
                className={styles.indicator}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

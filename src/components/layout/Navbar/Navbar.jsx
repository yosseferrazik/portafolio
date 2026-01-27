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
          <Link key={href} href={href} className={styles.navItem}>
            <motion.span
              className={styles.inner}
              whileHover={{ y: -3 }}
              animate={{ y: active ? -2 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.label}>{t(key)}</span>
            </motion.span>

            {active && (
              <motion.span
                layoutId="active-indicator"
                className={styles.indicator}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

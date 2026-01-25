"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

import { At, Home, User, Work } from "@/components/icons";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/about", label: "Sobre mí", icon: User },
  { href: "/projects", label: "Proyectos", icon: Work },
  { href: "/contact", label: "Contacto", icon: At },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <hr />
      {navItems.map(({ href, label, icon: Icon }) => {
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
              <span className={styles.label}>{label}</span>
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
      <hr />
    </nav>
  );
}

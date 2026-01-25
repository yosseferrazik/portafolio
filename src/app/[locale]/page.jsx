import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import "./global.css";
import { Github, Email, Linkedin } from "@/components/icons";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <div className={`${styles.hero}`}>
      <h1>
        Yossef Errazik
        <span className={styles.jobStatus}>𒊹 Disponible para trabajar</span>
      </h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <br />
      <div className={`${styles.socialLinks}`}>
        <button className={`button `}>
          <Github />
          &nbsp;GitHub
        </button>
        <button className={`button `}>
          <Linkedin />
          &nbsp;Linkedin
        </button>
        <button className={`button `}>
          <Email />
          &nbsp;Email
        </button>
      </div>
    </div>
  );
}

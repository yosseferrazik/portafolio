import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { FileUser, Mailbox } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Bloque de texto */}
          <div className={styles.heroText}>
            <h1>👋😃 Yossef Errazik</h1>
            <p>
              I’m a Network and Systems Administration student at Sa Palomera
              and a software developer.
            </p>
          </div>

          {/* Imagen */}
          <div className={styles.heroImage}>
            <img src="https://placehold.co/600x600/" alt="" />
          </div>

          <div className={styles.socialLinks}>
            <button style={{ flex: 1.5 }}>
              <FileUser /> &nbsp;&nbsp;Curriculum Vitae
            </button>
            <button style={{ flex: 1 }}>
              <Mailbox />
              &nbsp;&nbsp;Email{" "}
            </button>
            <button style={{ flex: 1 }}>
              <FaGithub /> &nbsp;&nbsp;GitHub
            </button>
            <button style={{ flex: 1 }}>
              <FaLinkedinIn /> &nbsp;&nbsp;LinkedIn
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

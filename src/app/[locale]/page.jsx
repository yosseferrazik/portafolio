import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import {
  ArrowBigUpDash,
  BicepsFlexed,
  BrainCircuit,
  BrainCog,
  BrickWallShield,
  BugOff,
  Eye,
  FileBracesCorner,
  FileUser,
  Mailbox,
  Scaling,
  User,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SkillCard from "@/components/ui/SkillCard";

export const metadata = {
  title: "Yossef Errazik - Home",
  description:
    "I’m a Network and Systems Administration student at Sa Palomera and a software developer.",
};

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
            <button style={{ flex: 1.5 }} className={styles.cvButton}>
              <FileUser /> &nbsp;&nbsp;Curriculum Vitae
            </button>
            <button style={{ flex: 1 }} className={styles.githubButton}>
              <FaGithub /> &nbsp;&nbsp;GitHub
            </button>
            <button style={{ flex: 1 }}>
              <Mailbox />
              &nbsp;&nbsp;Email{" "}
            </button>
            <button style={{ flex: 1 }}>
              <FaLinkedinIn /> &nbsp;&nbsp;LinkedIn
            </button>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>
            <User strokeWidth={3} /> ABOUT ME
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            accumsan, neque id sagittis venenatis, nulla erat mollis felis,
            varius suscipit mi nulla a odio. Maecenas sit amet molestie ante.
            Sed venenatis sapien eget dolor gravida malesuada. Vestibulum
            sagittis blandit justo, eu semper odio maximus eu. Quisque porta
            porttitor nisl ac varius. Aenean dictum gravida ipsum, sit amet
            hendrerit purus. Vivamus justo nisl, lacinia id tincidunt id,
            suscipit quis nisl. Fusce augue dolor, gravida at ipsum quis,
            dapibus bibendum neque. Proin interdum libero eros, vel ultrices
            ipsum facilisis eget. Nullam elementum bibendum eros, non tincidunt
            lacus porta non
          </p>
          <img src="https://placehold.co/1200x600" alt="" />
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.skillsContent}>
          <h2>
            <BrainCircuit /> SKILLS
          </h2>

          <div className={styles.skillCardContainer}>
            <SkillCard
              width="196px"
              height="196px"
              icon={<ArrowBigUpDash size={64} />}
            >
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Performance Focus
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Fast, lightweight and optimized applications.
                </p>
              </div>
            </SkillCard>
            <SkillCard
              width="196px"
              height="196px"
              icon={<BrickWallShield size={64} />}
            >
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Solid Infrastructure
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Strong background in systems, networking and deployment.
                </p>
              </div>
            </SkillCard>
            <SkillCard
              width="196px"
              height="196px"
              icon={<BicepsFlexed size={64} />}
            >
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Reliability
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Stable applications with predictable behavior.
                </p>
              </div>
            </SkillCard>
            <SkillCard
              width="196px"
              height="196px"
              icon={<FileBracesCorner size={64} />}
            >
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Clean & Structured Code
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Codebases that are easy to read, extend and maintain.{" "}
                </p>
              </div>
            </SkillCard>{" "}
            <SkillCard width="196px" height="196px" icon={<BugOff size={64} />}>
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Problem Solving
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  I turn requirements into practical and effective solutions.
                </p>
              </div>
            </SkillCard>
            <SkillCard
              width="196px"
              height="196px"
              icon={<Scaling size={64} />}
            >
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Scallable Solutions
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Applications built with growth and maintainability in mind.
                </p>
              </div>
            </SkillCard>
            <SkillCard width="196px" height="196px" icon={<Eye size={64} />}>
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  User-focused Interfaces
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Interfaces designed to be clear, usable and intuitive.
                </p>
              </div>
            </SkillCard>
            <SkillCard
              width="196px"
              height="196px"
              icon={<BrainCog size={64} />}
            >
              <div style={{ textAlign: "center" }}>
                <b style={{ fontSize: "1.1rem", display: "block" }}>
                  Continuous Improvement
                </b>
                <p style={{ fontSize: "0.75rem" }}>
                  Constantly refining my skills and my work.
                </p>
              </div>
            </SkillCard>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";

import styles from "./page.module.css";
import { ArrowRight, Github, HyperLink } from "@/components/icons";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p>Here are some projects</p>
      <div className={styles.projectsContainer}>
        <article className={styles.projectCard}>
          <div>
            <span>Name</span>
            <p>Short description</p>
            <div className={styles.tags}>
              <span>HTML</span> <span>CSS</span>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <button className="button">
              <Github />
            </button>
            <button className="button">
              <ArrowRight />
            </button>
          </div>
        </article>
        <article className={styles.projectCard}>
          <div>
            <span>Name</span>
            <p>Short description</p>
            <div className={styles.tags}>
              <span>HTML</span> <span>CSS</span>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <button className="button">
              <HyperLink />
            </button>
            <button className="button">
              <Github />
            </button>
            <button className="button">
              <ArrowRight />
            </button>
          </div>
        </article>{" "}
        <article className={styles.projectCard}>
          <div>
            <span>Name</span>
            <p>Short description</p>
            <div className={styles.tags}>
              <span>HTML</span> <span>CSS</span>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <button className="button">
              <Github />
            </button>
            <button className="button">
              <ArrowRight />
            </button>
          </div>
        </article>
        <button className="button">Hola</button>
      </div>
    </div>
  );
};

export default Projects;

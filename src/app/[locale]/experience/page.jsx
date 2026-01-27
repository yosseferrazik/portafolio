"use client";
import React from "react";
import styles from "./page.module.css";
import { ReactIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};
const Experience = () => {
  const timelineItems = [
    {
      date: "12-12-2012",
      position: "Backend developer",
      org: "Rust ORG",
      modality: "Remote",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      date: "12-12-2012",
      position: "Backend developer",
      org: "Rust ORG",
      modality: "Remote",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      date: "12-12-2012",
      position: "Backend developer",
      org: "Rust ORG",
      modality: "Remote",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <motion.div
      className={styles.experience}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Experience</h1>
      <br />
      <h4>Primary stack</h4>
      <div className={styles.tags}>
        <span>
          <ReactIcon /> React
        </span>
      </div>
      <br />
      <div className={styles.timeline}>
        <hr />
        <div className={styles.timelineItemContainer}>
          {timelineItems.map((item, index) => {
            const { date, position, org, modality, description } = item;

            return (
              <article
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <p>○</p>&nbsp;
                <div className={styles.timelineItem}>
                  <div className={styles.date}>{date}</div>
                  <div className={styles.position}>{position}</div>
                  <div className={styles.org}>{org}</div>
                  <div className={styles.modality}>{modality}</div>
                  <div className={styles.description}>{description}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

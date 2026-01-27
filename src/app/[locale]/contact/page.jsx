"use client";
import React from "react";
import { useTranslations } from "next-intl";

import styles from "./page.module.css";
import { Mail } from "@/components/icons";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};
const Contact = () => {
  return (
    <motion.div
      className={styles.contact}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Get in Touch</h1>
      <p>
        I'm currently available for freelance projects and consulting
        opportunities. Feel free to reach out if you'd like to work together.
      </p>
      <br />
      <div>
        {" "}
        <button className="button">
          <Mail />
          &nbsp;Email me
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;

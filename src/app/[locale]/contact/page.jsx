import React from "react";

import styles from "./page.module.css";
import { Mail } from "@/components/icons";

const Contact = () => {
  return (
    <div className={styles.contact}>
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
    </div>
  );
};

export default Contact;

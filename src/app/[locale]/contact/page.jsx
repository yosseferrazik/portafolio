"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Mail, Github, Linkedin, Pin, Phone } from "@/components/icons";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      detail: "contacto@yosseferrazik.com",
      action: "mailto:contacto@yosseferrazik.com",
      buttonText: "Enviar email",
    },
    {
      icon: <Phone />,
      title: "Teléfono",
      detail: "+34 123 456 789",
      action: "tel:+34123456789",
      buttonText: "Llamar",
    },
    {
      icon: <Pin />,
      title: "Ubicación",
      detail: "Madrid, España",
      action: null,
      buttonText: null,
    },
    {
      icon: <Github />,
      title: "GitHub",
      detail: "github.com/yosseferrazik",
      action: "https://github.com/yosseferrazik",
      buttonText: "Visitar",
    },
    {
      icon: <Linkedin />,
      title: "LinkedIn",
      detail: "linkedin.com/in/yosseferrazik",
      action: "https://linkedin.com/in/yosseferrazik",
      buttonText: "Conectar",
    },
  ];

  return (
    <motion.div
      className={styles.contact}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Contacto</h1>

      <p>
        Actualmente disponible para proyectos freelance y oportunidades de
        consultoría. Especializado en desarrollo full-stack y administración de
        sistemas. No dudes en contactarme si quieres trabajar juntos.
      </p>

      <div className={styles.contactMethods}>
        {contactInfo.map((item, index) => (
          <div key={index} className={styles.contactCard}>
            <div className={styles.contactIcon}>{item.icon}</div>

            <div className={styles.contactInfo}>
              <div className={styles.contactTitle}>{item.title}</div>
              <div className={styles.contactDetail}>{item.detail}</div>
            </div>
            <div>
              {item.action && (
                <a
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.action.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="link"
                >
                  {item.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;

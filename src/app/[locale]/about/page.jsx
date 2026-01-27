"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const About = () => {
  const t = useTranslations("About");

  const hobbies = [
    {
      title: "Senderismo",
      description:
        "Explorar montañas y rutas naturales los fines de semana. Conexión con la naturaleza y despejar la mente.",
      tag: "Aire libre",
    },
    {
      title: "Powerlifting",
      description:
        "Entrenamiento de fuerza enfocado en sentadilla, press banca y peso muerto. Disciplina y superación personal.",
      tag: "Deporte",
    },
    {
      title: "League of Legends",
      description:
        "Main mid/support. Estrategia, trabajo en equipo y análisis de metas para mejorar constantemente.",
      tag: "Gaming",
    },
    {
      title: "Anime",
      description:
        "Desde shonen clásico hasta seinen psicológico. Aprecio la narrativa y dirección artística única.",
      tag: "Entretenimiento",
    },
    {
      title: "Desarrollo de Videojuegos",
      description:
        "Crear prototipos en Unity/Godot. Diseño de mecánicas, balance y programación de gameplay.",
      tag: "Creación",
    },
    {
      title: "Bots de Discord",
      description:
        "Automatización, moderación y utilidades para comunidades. Interés en APIs y arquitectura de bots.",
      tag: "Programación",
    },
    {
      title: "Aplicaciones Web",
      description:
        "Proyectos full-stack con stack moderno. Mejorar UX y probar nuevas tecnologías en entornos reales.",
      tag: "Desarrollo",
    },
    {
      title: "Software Experimental",
      description:
        "Herramientas automáticas, scripts y experimentos técnicos fuera del trabajo convencional.",
      tag: "Innovación",
    },
  ];

  return (
    <motion.div
      className={styles.about}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Sobre mí</h1>

      <div className={styles.aboutSection}>
        <p>
          Desarrollador full-stack que encuentra equilibrio entre el código y la
          disciplina física. Creo que el entrenamiento de fuerza y la
          programación comparten principios fundamentales: técnica, consistencia
          y superación de límites.
        </p>
        <br />
        <p>
          Mi enfoque se basa en resolver problemas complejos con soluciones
          simples y eficientes. Cuando no estoy escribiendo código o entrenando,
          probablemente esté inmerso en algún proyecto personal que combine
          varias de mis pasiones.
        </p>
      </div>

      <h2>Intereses y actividades</h2>
      <div className={styles.hobbyGrid}>
        {hobbies.map((hobby, index) => (
          <div key={index} className={styles.hobbyCard}>
            <div className={styles.hobbyTitle}>{hobby.title}</div>
            <div className={styles.hobbyDescription}>{hobby.description}</div>
            <span className={styles.hobbyTag}>{hobby.tag}</span>
          </div>
        ))}
      </div>

      <div className={styles.aboutSection}>
        <h2>Enfoque de desarrollo</h2>
        <p>
          Aplico la misma mentalidad del powerlifting al código: fundamentos
          sólidos, progresión constante y aprender de cada iteración. Cada
          proyecto es una oportunidad para mejorar, ya sea un bot de Discord,
          una aplicación web o un prototipo de videojuego.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

import React from "react";
import "./hero.css"
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rachit Agnihotri</h1>
        <p className={styles.description}>
          <div className="animated-text">
            I'm a <span></span>
          </div>
        </p>
        <a href="mailto:agnihotrir874@email.com" className={styles.contactBtn} target="_blank">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/28168.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

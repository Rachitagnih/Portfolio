import React from "react";

import styles from "./Coding.module.css";
import codinglinks from "../../data/codinglinks.json";
// import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Coding = () => {
  return (
    <section className={styles.container} id="coding">
      <h2 className={styles.title}>Coding Profiles</h2>
      <div className={styles.content}>
        <div className={styles.profiles}>
          {codinglinks.map((profile, id) => {
            return (
              <div key={id} className={styles.profile}>
                <div className={styles.profileImageContainer}>
                  <a href={profile.src} target="_blank"><img src={getImageUrl(profile.imageSrc)} alt={profile.title} /></a>
                </div>
                <p>{profile.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

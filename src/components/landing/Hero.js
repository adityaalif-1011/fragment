"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.spotlight}></div>

      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className={styles.left}
      >

        <div className={styles.badge}>
          Fragment — Interface Architecture
        </div>

        <h1>
          Build systems,
          not noise.
        </h1>

        <p>
          A cinematic interface system designed
          for modern digital products.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>
            Explore System
          </button>

          <button className={styles.secondary}>
            Documentation
          </button>
        </div>

      </motion.div>

    </section>
  );
}
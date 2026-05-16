"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.gradient}></div>

      <div className={styles.grid}>

        {/* LEFT */}

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
            <span> not noise.</span>
          </h1>

          <p>
            A cinematic interface system crafted
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

        {/* RIGHT */}

        <motion.div
          animate={{ y:[0,-18,0] }}
          transition={{
            duration:8,
            repeat:Infinity,
            ease:"easeInOut"
          }}
          className={styles.right}
        >

          <div className={styles.windowMain}>

            <div className={styles.topbar}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className={styles.sidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.content}>

              <div className={styles.cardLarge}></div>

              <div className={styles.row}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
              </div>

            </div>

          </div>

          <div className={styles.floatCard}></div>

          <div className={styles.floatMini}></div>

        </motion.div>

      </div>

    </section>
  );
}
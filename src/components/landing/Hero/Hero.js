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
          animate={{ y:[0,-16,0] }}
          transition={{
            duration:8,
            repeat:Infinity,
            ease:"easeInOut"
          }}
          className={styles.right}
        >

          {/* MAIN WINDOW */}

          <div className={styles.windowMain}>

            {/* TOPBAR */}

            <div className={styles.topbar}>

              <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={styles.search}></div>

              <div className={styles.status}></div>

            </div>

            {/* SIDEBAR */}

            <div className={styles.sidebar}>

              <div className={styles.sideActive}></div>

              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>

            </div>

            {/* CONTENT */}

            <div className={styles.content}>

              {/* HERO CARD */}

              <div className={styles.heroCard}>

                <div className={styles.heroTop}>
                  <div className={styles.heroTitle}></div>
                  <div className={styles.heroBadge}></div>
                </div>

                <div className={styles.heroGraph}>

                  <div className={styles.graphGlow}></div>

                </div>

                <div className={styles.heroMetrics}>

                  <div className={styles.metric}>
                    <span></span>
                    <strong></strong>
                  </div>

                  <div className={styles.metric}>
                    <span></span>
                    <strong></strong>
                  </div>

                  <div className={styles.metric}>
                    <span></span>
                    <strong></strong>
                  </div>

                </div>

              </div>

              {/* GRID */}

              <div className={styles.cards}>

                <div className={styles.card}>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardBox}></div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardLine}></div>
                  <div className={styles.cardBox}></div>
                </div>

              </div>

              {/* BOTTOM */}

              <div className={styles.bottomGrid}>

                <div className={styles.smallPanel}></div>
                <div className={styles.smallPanel}></div>
                <div className={styles.smallPanel}></div>

              </div>

            </div>

          </div>

          {/* FLOATING PANEL */}

          <div className={styles.floatPanel}>

            <div className={styles.floatLine}></div>
            <div className={styles.floatLineSmall}></div>

            <div className={styles.floatPreview}></div>

          </div>

          {/* MINI */}

          <div className={styles.floatMini}></div>

        </motion.div>

      </div>

    </section>
  );
}
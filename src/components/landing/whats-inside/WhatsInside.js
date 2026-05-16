"use client";

import styles from "./WhatsInside.module.css";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Motion System",
    desc: "Elegant transitions and cinematic interactions.",
    type: "motion",
    className: "large",
  },
  {
    title: "Glass Architecture",
    desc: "Layered interface depth with modular composition.",
    type: "glass",
  },
  {
    title: "Typography Engine",
    desc: "Precise hierarchy and intentional spacing.",
    type: "orbit",
  },
  {
    title: "Adaptive Layout",
    desc: "Responsive systems built for modern interfaces.",
    type: "stack",
    className: "wide",
  },
  {
    title: "AI Ready",
    desc: "Designed for prompting workflows and interface generation.",
    type: "editor",
    className: "wide",
  },
  {
    title: "Growing Fast",
    desc: "Built as a scalable ecosystem for modern products.",
    type: "chart",
  },
];

export default function WhatsInside() {
  return (
    <section className={styles.section}>

      {/* HEADING */}

      <div className={styles.heading}>

        <span>What’s Inside</span>

        <h2>
          A cinematic ecosystem
          for modern interfaces.
        </h2>

      </div>

      {/* GRID */}

      <div className={styles.grid}>

        {cards.map((card, index) => (

          <motion.div
            key={index}
            whileHover={{
              y:-8,
              scale:1.01
            }}
            transition={{
              duration:0.5,
              ease:[0.22,1,0.36,1]
            }}
            className={`
              ${styles.card}
              ${card.className ? styles[card.className] : ""}
            `}
          >

            {/* PREVIEW */}

            <div className={styles.preview}>

              {/* MOTION */}

              {card.type === "motion" && (
                <>
                  <div className={styles.tags}>

                    <span>Motion</span>
                    <span>Glass</span>
                    <span>Adaptive</span>
                    <span>Typography</span>

                  </div>

                  <div className={styles.motionGrid}>

                    <div></div>
                    <div></div>
                    <div></div>

                  </div>
                </>
              )}

              {/* GLASS */}

              {card.type === "glass" && (
                <div className={styles.glassPreview}>

                  <div className={styles.glassCard}></div>
                  <div className={styles.glassCard}></div>
                  <div className={styles.glassCard}></div>

                </div>
              )}

              {/* ORBIT */}

              {card.type === "orbit" && (
                <div className={styles.orbit}>

                  <div className={styles.center}></div>

                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>

                </div>
              )}

              {/* STACK */}

              {card.type === "stack" && (
                <div className={styles.stackPreview}>

                  <div className={styles.stackLine}></div>
                  <div className={styles.stackLine}></div>
                  <div className={styles.stackLine}></div>
                  <div className={styles.stackLine}></div>

                </div>
              )}

              {/* EDITOR */}

              {card.type === "editor" && (
                <div className={styles.editor}>

                  <div className={styles.editorTop}>

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className={styles.editorBody}>

                    <div className={styles.code}></div>
                    <div className={styles.code}></div>
                    <div className={styles.codeSmall}></div>

                  </div>

                </div>
              )}

              {/* CHART */}

              {card.type === "chart" && (
                <div className={styles.chart}>

                  <div className={styles.chartLine}></div>

                </div>
              )}

            </div>

            {/* CONTENT */}

            <div className={styles.content}>

              <h3>{card.title}</h3>

              <p>{card.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
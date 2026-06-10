"use client";

import styles from "./WhatsInside.module.css";
import { motion } from "framer-motion";

const items = [
  {
    title: "UI Components",
    desc: "Reusable building blocks crafted for modern interfaces.",
    type: "components",
    className: "large",
  },
  {
    title: "Build Kits",
    desc: "Complete systems ready to accelerate development.",
    type: "kits",
  },
  {
    title: "Templates",
    desc: "Premium layouts designed for real-world products.",
    type: "templates",
  },
  {
    title: "Documentation",
    desc: "Clear implementation guides and examples.",
    type: "docs",
    className: "wide",
  },
  {
    title: "Developer First",
    desc: "Built for Next.js and modern frontend workflows.",
    type: "dev",
    className: "wide",
  },
  {
    title: "Growing Library",
    desc: "Continuously expanding collection of systems and assets.",
    type: "growth",
  },
];

export default function WhatsInside() {
  return (
    <section className={styles.section}>

      <div className={styles.heading}>

        <span>Why Fragment</span>

        <h2>
          Everything you need
          to build faster.
        </h2>

      </div>

      <div className={styles.grid}>

        {items.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.4,
            }}
            className={`
              ${styles.card}
              ${item.className ? styles[item.className] : ""}
            `}
          >

            <div className={styles.preview}>

              {item.type === "components" && (
                <div className={styles.componentGrid}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}

              {item.type === "kits" && (
                <div className={styles.kitPreview}>
                  <div></div>
                  <div></div>
                </div>
              )}

              {item.type === "templates" && (
                <div className={styles.templatePreview}>
                  <div></div>
                </div>
              )}

              {item.type === "docs" && (
                <div className={styles.docsPreview}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

              {item.type === "dev" && (
                <div className={styles.devPreview}>
                  <div></div>
                </div>
              )}

              {item.type === "growth" && (
                <div className={styles.growthPreview}>
                  <div></div>
                </div>
              )}

            </div>

            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
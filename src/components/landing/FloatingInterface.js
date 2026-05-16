"use client";

import styles from "./FloatingInterface.module.css";
import { motion } from "framer-motion";

export default function FloatingInterface() {
  return (
    <section className={styles.wrapper}>

      <motion.div
        animate={{ y:[0,-20,0] }}
        transition={{
          duration:6,
          repeat:Infinity
        }}
        className={styles.panel}
      >

        <div className={styles.sidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.content}>

          <div className={styles.topbar}></div>

          <div className={styles.grid}>

            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
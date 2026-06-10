"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.glow}></div>

      <div className={styles.container}>

        <motion.div
          className={styles.left}
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.8 }}
        >

          <div className={styles.badge}>
            Fragment • Digital Product Marketplace
          </div>

          <h1>
            Build systems,
            <span> not noise.</span>
          </h1>

          <p>
            Premium UI Kits, Build Kits, Templates,
            and Interface Systems crafted for modern products.
          </p>

          <div className={styles.actions}>

            <button className={styles.primary}>
              Explore Products
            </button>

            <button className={styles.secondary}>
              Read Articles
            </button>

          </div>

        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity:0, scale:.95 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
        >

          <div className={styles.window}>

            <div className={styles.windowTop}>

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className={styles.windowContent}>

              <div className={styles.header}>

                <h3>Featured Products</h3>

                <div className={styles.live}>
                  Live
                </div>

              </div>

              <div className={styles.products}>

                <div className={styles.product}>
                  <div className={styles.thumb}></div>

                  <div>
                    <h4>SaaS Dashboard Kit</h4>
                    <p>$49</p>
                  </div>
                </div>

                <div className={styles.product}>
                  <div className={styles.thumb}></div>

                  <div>
                    <h4>Portfolio Kit</h4>
                    <p>$29</p>
                  </div>
                </div>

                <div className={styles.product}>
                  <div className={styles.thumb}></div>

                  <div>
                    <h4>AI Startup Kit</h4>
                    <p>$59</p>
                  </div>
                </div>

              </div>

              <div className={styles.stats}>

                <div>
                  <strong>120+</strong>
                  <span>Products</span>
                </div>

                <div>
                  <strong>3.2k</strong>
                  <span>Downloads</span>
                </div>

                <div>
                  <strong>98%</strong>
                  <span>Rating</span>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
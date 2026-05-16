import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.light}></div>

      <div className={styles.content}>

        <div className={styles.badge}>
          Modular Interface System
        </div>

        <h1>
          Build systems,
          <br />
          not noise.
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

      </div>

    </section>
  );
}
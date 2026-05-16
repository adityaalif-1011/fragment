import styles from "./FloatingInterface.module.css";

export default function FloatingInterface() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.panelLarge}></div>

      <div className={styles.panelSmall}></div>

      <div className={styles.panelMini}></div>

    </section>
  );
}
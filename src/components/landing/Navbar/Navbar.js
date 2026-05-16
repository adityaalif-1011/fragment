import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Fragment</div>

      <div className={styles.links}>
        <a href="#">System</a>
        <a href="#">Components</a>
        <a href="#">Github</a>
      </div>

      <button className={styles.button}>
        Start
      </button>
    </nav>
  );
}
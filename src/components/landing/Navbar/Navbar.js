import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Fragment</div>

      <div className={styles.links}>
        <a href="/products">Products</a>
<a href="/articles">Articles</a>
<a href="#">About</a>
      </div>

      <button className={styles.button}>
        Explore
      </button>
    </nav>
  );
}
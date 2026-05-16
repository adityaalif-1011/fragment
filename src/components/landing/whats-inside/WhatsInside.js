import styles from "./WhatsInside.module.css";

export default function WhatsInside() {
  return (
    <section className={styles.section}>

      {/* HEADING */}

      <div className={styles.heading}>

        <span>
          What’s Inside
        </span>

        <h2>
          A cinematic ecosystem
          for modern interfaces.
        </h2>

      </div>

      {/* GRID */}

      <div className={styles.grid}>

        {/* CARD 1 */}

        <div className={`${styles.card} ${styles.large}`}>

          <div className={styles.tags}>

            <span>Motion</span>
            <span>Glass</span>
            <span>Adaptive</span>
            <span>Typography</span>
            <span>Layout</span>

          </div>

          <div className={styles.cardContent}>

            <h3>
              130+ Interface Patterns
            </h3>

            <p>
              Motion systems, glass architecture,
              adaptive layouts, and cinematic UI
              crafted into one modular ecosystem.
            </p>

          </div>

        </div>

        {/* CARD 2 */}

        <div className={styles.card}>

          <div className={styles.iconGrid}>

            <div></div>
            <div></div>
            <div></div>

          </div>

          <div className={styles.cardContent}>

            <h3>
              Visual Editors
            </h3>

            <p>
              Interactive tooling designed for
              modern interface workflows.
            </p>

          </div>

        </div>

        {/* CARD 3 */}

        <div className={styles.card}>

          <div className={styles.orbit}>

            <div className={styles.center}></div>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

          <div className={styles.cardContent}>

            <h3>
              Well Organized
            </h3>

            <p>
              Structured systems so everything
              feels intentional and connected.
            </p>

          </div>

        </div>

        {/* CARD 4 */}

        <div className={`${styles.card} ${styles.wide}`}>

          <div className={styles.stackPreview}>

            <div className={styles.stackLine}></div>
            <div className={styles.stackLine}></div>
            <div className={styles.stackLine}></div>
            <div className={styles.stackLine}></div>

          </div>

          <div className={styles.cardContent}>

            <h3>
              Adaptive Stack
            </h3>

            <p>
              Responsive systems built for
              modern devices and layouts.
            </p>

          </div>

        </div>

        {/* CARD 5 */}

        <div className={`${styles.card} ${styles.wide}`}>

          <div className={styles.editor}>

            <div className={styles.editorTop}>

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className={styles.editorCode}>
              $ animate interface motion
            </div>

          </div>

          <div className={styles.cardContent}>

            <h3>
              AI Ready
            </h3>

            <p>
              Designed for modern AI workflows,
              prompting systems, and interface generation.
            </p>

          </div>

        </div>

        {/* CARD 6 */}

        <div className={styles.card}>

          <div className={styles.chart}>

            <div className={styles.chartLine}></div>

          </div>

          <div className={styles.cardContent}>

            <h3>
              Growing Fast
            </h3>

            <p>
              Built to scale as a complete
              interface ecosystem.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
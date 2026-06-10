import styles from "./WhyFragment.module.css";

const reasons = [
  {
    title: "Curated Ecosystem",
    description:
      "Everything follows the same quality standard, structure, and philosophy.",
  },
  {
    title: "Production Ready",
    description:
      "No unfinished resources. Built for real products and real teams.",
  },
  {
    title: "Developer First",
    description:
      "Designed around modern frontend workflows and scalable systems.",
  },
  {
    title: "Built To Scale",
    description:
      "From a single landing page to a complete product ecosystem.",
  },
];

export default function WhyFragment() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>WHY FRAGMENT</span>

        <div className={styles.header}>
          <h2>
            Stop rebuilding
            <br />
            everything.
          </h2>

          <p>
            Most creators waste time searching across dozens of platforms.
            Fragment brings components, templates, systems, and documentation
            together in one curated ecosystem.
          </p>
        </div>

        <div className={styles.comparison}>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Traditional Workflow</span>

            <ul>
              <li>Search multiple marketplaces</li>
              <li>Different design standards</li>
              <li>Inconsistent code quality</li>
              <li>Rebuild common patterns</li>
            </ul>
          </div>

          <div className={styles.center}>
            <div className={styles.orb}></div>
          </div>

          <div className={styles.card}>
            <span className={styles.cardLabel}>Fragment Workflow</span>

            <ul>
              <li>Single curated ecosystem</li>
              <li>Unified design language</li>
              <li>Production-ready resources</li>
              <li>Launch faster with systems</li>
            </ul>
          </div>
        </div>

        <div className={styles.grid}>
          {reasons.map((item) => (
            <div key={item.title} className={styles.reasonCard}>
              <div className={styles.icon}></div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
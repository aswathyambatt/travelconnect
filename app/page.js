import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.kicker}>About Page</span>
          <h1>Welcome, I am Noel Biju</h1>
          <p>
            This page introduces me, my class, and the project I am building.
            It gives a quick snapshot of who I am and what this work is about.
          </p>
        </section>

        <section className={styles.cards} aria-label="About details">
          <article className={styles.card}>
            <span className={styles.cardLabel}>Name</span>
            <strong>Noel Biju</strong>
          </article>

          <article className={styles.card}>
            <span className={styles.cardLabel}>Class</span>
            <strong>S5 CSD</strong>
          </article>

          <article className={styles.card}>
            <span className={styles.cardLabel}>Project</span>
            <strong>Next.js</strong>
          </article>
        </section>
      </main>
    </div>
  );
}

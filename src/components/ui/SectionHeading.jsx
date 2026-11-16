import styles from "./SectionHeading.module.css";

export const SectionHeading = ({ id, title, children }) => (
  <header className={styles.heading}>
    <h2 id={id} className={styles.title}>
      {title}
    </h2>
    {children && <p className={styles.intro}>{children}</p>}
  </header>
);

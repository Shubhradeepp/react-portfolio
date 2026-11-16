import profile from "../../data/profile.json";
import { ArrowUpIcon } from "../ui/Icons";
import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.inner}`}>
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with React and Vite.
      </p>
      <a className={styles.top} href="#top">
        <ArrowUpIcon width={16} height={16} />
        Back to top
      </a>
    </div>
  </footer>
);

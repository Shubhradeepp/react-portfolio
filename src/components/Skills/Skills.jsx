import skills from "../../data/skills.json";
import { SectionHeading } from "../ui/SectionHeading";
import { Star } from "../ui/Decor";
import styles from "./Skills.module.css";

const TONES = [
  ["mustard", "#2b1a12"],
  ["orange", "#2b1a12"],
  ["olive", "#fbf1da"],
  ["teal", "#fbf1da"],
  ["red", "#fbf1da"],
  ["mustard", "#2b1a12"],
];

export const Skills = () => (
  <section id="skills" className={`section ${styles.section}`} aria-labelledby="skills-title">
    <div className="container">
      <SectionHeading id="skills-title" title="Skills">
        The tools I use most day to day are highlighted.
      </SectionHeading>

      <div className={styles.grid}>
        {skills.map(({ group, items }, i) => {
          const [tone, ink] = TONES[i % TONES.length];
          return (
            <div
              key={group}
              className={styles.group}
              style={{ "--tone": `var(--${tone})`, "--tone-ink": ink }}
            >
              <h3 className={styles.groupTitle}>{group}</h3>
              <ul className={styles.list}>
                {items.map(({ name, core }) => (
                  <li key={name} className={`chip ${core ? styles.core : ""}`}>
                    {core && <Star className={styles.mark} points={8} inner={26} />}
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

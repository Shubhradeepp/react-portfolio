import skills from "../../data/skills.json";
import { SectionHeading } from "../ui/SectionHeading";
import { Star } from "../ui/Decor";
import { toneVars } from "../../utils";
import styles from "./Skills.module.css";

const TONES = ["mustard", "orange", "olive", "teal", "primary", "mustard"];

export const Skills = () => (
  <section id="skills" className={`section ${styles.section}`} aria-labelledby="skills-title">
    <div className="container">
      <SectionHeading id="skills-title" title="Skills">
        The tools I use most day to day are highlighted.
      </SectionHeading>

      <div className={styles.grid}>
        {skills.map(({ group, items }, i) => {
          return (
            <div
              key={group}
              className={styles.group}
              style={toneVars(TONES[i % TONES.length])}
            >
              <h3 className={styles.groupTitle}>{group}</h3>
              <ul className={styles.list}>
                {items.map(({ name, core }) => (
                  <li key={name} className={`chip ${core ? `tag-hot ${styles.core}` : ""}`}>
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

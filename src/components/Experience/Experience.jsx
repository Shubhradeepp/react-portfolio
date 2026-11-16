import { useState } from "react";
import history from "../../data/history.json";
import { SectionHeading } from "../ui/SectionHeading";
import { ChevronIcon } from "../ui/Icons";
import styles from "./Experience.module.css";

const VISIBLE = 3;
const TONES = ["mustard", "orange"];
const HIGHLIGHT = ["Kafka", "Camunda BPM", "Spring Boot", "Java", "PostgreSQL"];

const Role = ({ job, defaultOpen, tone }) => {
  const [expanded, setExpanded] = useState(defaultOpen);
  const shown = expanded ? job.highlights : job.highlights.slice(0, VISIBLE);
  const hidden = job.highlights.length - VISIBLE;
  const listId = `role-${job.organisation.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <li className={styles.item}>
      <div className={styles.head} style={{ "--tone": `var(--${tone})` }}>
        <img
          className={styles.logo}
          src={job.logo}
          alt=""
          width="56"
          height="56"
          loading="lazy"
        />
        <div className={styles.who}>
          <h3 className={styles.role}>{job.role}</h3>
          <p className={styles.org}>{job.organisation}</p>
        </div>
        <p className={styles.meta}>
          <span className={styles.dates}>
            <time>{job.start}</time> to <time>{job.end}</time>
          </span>
          <span className={styles.type}>{job.type}</span>
        </p>
      </div>

      <div className={styles.body}>
        <ul id={listId} className={styles.points}>
          {shown.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            className={`btn btn-secondary ${styles.more}`}
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? "Show fewer details" : `Show ${hidden} more`}
            <ChevronIcon width={16} height={16} className={expanded ? styles.flip : ""} />
          </button>
        )}

        <ul className={styles.stack} aria-label="Technologies used">
          {job.stack.map((t) => (
  <li key={t} className={`chip ${HIGHLIGHT.includes(t) ? styles.hot : ""}`}>
    {t}
  </li>
))}
        </ul>
      </div>
    </li>
  );
};

export const Experience = () => (
  <section id="experience" className="section" aria-labelledby="exp-title">
    <div className="container">
      <SectionHeading id="exp-title" title="Experience">
        Where I've worked and what I delivered.
      </SectionHeading>

      <ol className={styles.timeline}>
        {history.main.map((job, i) => (
          <Role key={job.organisation} job={job} defaultOpen={false} tone={TONES[i % TONES.length]} />
        ))}
      </ol>

      <details className={styles.earlier}>
        <summary>
          Earlier roles and internships
          <ChevronIcon width={20} height={20} />
        </summary>
        <ul>
          {history.earlier.map((job) => (
            <li key={job.organisation}>
              <div>
                <h3>{job.role}</h3>
                <p className={styles.earlierOrg}>
                  {job.organisation}, {job.start} to {job.end}
                </p>
              </div>
              <p>{job.text}</p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  </section>
);

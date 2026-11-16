import { useState } from "react";
import projects from "../../data/projects.json";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalIcon, GithubIcon } from "../ui/Icons";
import { toneVars } from "../../utils";
import styles from "./Projects.module.css";

const FILTERS = ["All", "Backend", "AI", "Full stack", "Mobile"];

const TONES = ["orange", "teal", "mustard", "olive", "primary"];

const ProjectCard = ({ project, index }) => {
  const {
    title,
    category,
    origin,
    image,
    description,
    result,
    stack,
    demo,
    source,
  } = project;
  return (
    <article
      className={styles.card}
      data-size={index % 4 === 0 || index % 4 === 3 ? "wide" : "narrow"}
      style={toneVars(TONES[index % TONES.length])}
    >
      {image && (
        <div className={styles.media}>
          <img
            className={styles.image}
            src={image}
            alt={`Cover image of the ${title} project`}
            width="800"
            height="450"
            loading="lazy"
          />
        </div>
      )}
      <div className={styles.body}>
        <p className={styles.origin}>{origin}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {result && <p className={styles.result}>{result}</p>}

        <ul className={styles.stack} aria-label="Technologies used">
          <li className={`chip ${styles.category}`}>{category}</li>
          {stack.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        {(demo || source) && (
          <div className={styles.links}>
            {demo && (
              <a
                className="btn btn-secondary"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalIcon width={16} height={16} />
                {demo.includes("linkedin.com") ? "Watch demo" : "Live demo"}
              </a>
            )}
            {source && (
              <a
                className="btn btn-secondary"
                href={source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon width={16} height={16} />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" title="Builds">
          Engineering solutions, production systems, and personal work.
        </SectionHeading>

        <div
          className={styles.filters}
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={styles.filter}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid} aria-live="polite">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

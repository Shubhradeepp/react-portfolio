import profile from "../../data/profile.json";
import skills from "../../data/skills.json";
import { PaymentFlow } from "./PaymentFlow";
import { Star } from "../ui/Decor";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "../ui/Icons";
import styles from "./Hero.module.css";

// The ticker reuses the skills you already flagged as core, so it stays in sync with skills.json.
const TICKER = skills.flatMap((g) => g.items.filter((i) => i.core).map((i) => i.name));
const TICKER_ROW = [...TICKER, ...TICKER, ...TICKER];

export const Hero = () => (
  <>
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.place}>
            <MapPinIcon width={18} height={18} />
            {profile.location}
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.name}>{profile.name}</span>{" "}
            <span className={styles.what}>builds reliable payment, workflow and AI systems.</span>
          </h1>

          <p className={styles.lead}>
            Full stack software engineer with 2+ years of experience in Java, Spring Boot, Kafka,
            Camunda and React. I turn business processes into maintainable services, from bank
            integrations to event-driven workflows.
          </p>

          <div className={styles.cta}>
            <a className="btn btn-primary" href="#projects">
              See my contributions
            </a>
            <a className="btn btn-secondary" href={profile.resume} download>
              <DownloadIcon width={18} height={18} />
              Download resume
            </a>
          </div>

          <ul className={styles.social} aria-label="Find me online">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Send an email">
                <MailIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.stage}>
          <svg className={styles.discs} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
            <circle cx="200" cy="200" r="194" fill="var(--primary)" stroke="var(--ink)" strokeWidth="4" />
            <circle cx="200" cy="200" r="164" fill="var(--orange)" stroke="var(--ink)" strokeWidth="4" />
            <circle cx="200" cy="200" r="134" fill="var(--mustard)" stroke="var(--ink)" strokeWidth="4" />
          </svg>
          <div className={styles.photo}>
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="640"
              height="640"
            />
          </div>
          <Star className={styles.star} points={12} inner={36} />
          <div className={`halftone ${styles.dots}`} aria-hidden="true" />
          <div className={styles.sticker}>
            <strong>{profile.stats[0].value}</strong>
            <span>{profile.stats[0].label}</span>
          </div>
        </div>
      </div>
    </section>

    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((half) => (
          <ul key={half} className={styles.row}>
            {TICKER_ROW.map((t, i) => (
              <li key={`${half}-${i}`}>
                {t}
                <Star className={styles.tickerStar} points={8} inner={28} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>

    <section className={styles.case} aria-label="Featured work: payment flow">
      <div className="container">
        <PaymentFlow />
      </div>
    </section>
  </>
);

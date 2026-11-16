import profile from "../../data/profile.json";
import { SectionHeading } from "../ui/SectionHeading";
import { Gallery } from "./Gallery";
import { Star } from "../ui/Decor";
import { toneVars } from "../../utils";
import styles from "./About.module.css";

const TONES = ["mustard", "orange", "olive", "teal"];

export const About = () => (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className="container">
      <SectionHeading id="about-title" title="About me" />

      <div className={styles.layout}>
        <figure className={styles.figure}>
          <div className={styles.frame}>
            <img
              className={styles.portrait}
              src={profile.portrait}
              alt={`${profile.name} standing in front of a Kolkata metro station mural`}
              width="450"
              height="450"
              loading="lazy"
            />
            <Star className={styles.star} points={10} inner={32} />
          </div>
          <figcaption className={styles.caption}>{profile.location}</figcaption>
        </figure>

        <div className={styles.text}>
          <p className={styles.lead}>
            I'm a full stack engineer who likes systems that keep working when real money, real
            users and real deadlines are involved.
          </p>
          <p>
            At Caerus IT Consulting I build the backend side of business systems: a payment
            platform integrated with ICICI Bank, an event-driven layer that connects Kafka events to
            Camunda workflows, and an AI knowledge assistant. Before that I shipped payments,
            subscriptions and patient-care features for a healthcare SaaS product at Swingbell Labs.
          </p>
          <p>
            I care about maintainable code, clear APIs and results the business can measure, and I
            work comfortably in Agile teams.
          </p>

          <dl className={styles.stats}>
            {profile.stats.map((s, i) => (
              <div key={s.value + s.label} className={styles.stat} style={toneVars(TONES[i % TONES.length])}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={styles.focus}>
        <h3 className={styles.focusTitle}>What I work on</h3>
        <ul className={styles.focusList}>
          {profile.focus.map((f) => (
            <li key={f.title}>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <Gallery /> */}

      <p className={styles.education}>
        <strong>Education:</strong> {profile.education.degree}, {profile.education.school} (
        {profile.education.years}), {profile.education.score}.
      </p>
    </div>
  </section>
);

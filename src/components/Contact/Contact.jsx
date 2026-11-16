import { useState } from "react";
import profile from "../../data/profile.json";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon } from "../ui/Icons";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setNote(`Couldn't copy automatically. My email is ${profile.email}.`);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setNote(
      `Your email app should open with the message filled in. If it doesn't, copy my address (${profile.email}) and send it from any mail service.`
    );
  };

  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" title="Let's talk">
          I'm happy to hear about Java, backend, workflow or AI projects. Send a message and I'll
          reply by email.
        </SectionHeading>

        <div className={styles.layout}>
          <div className={styles.direct}>
            <div className={styles.emailBox}>
              <MailIcon />
              <a href={`mailto:${profile.email}`} className={styles.email}>
                {profile.email}
              </a>
              <button type="button" className={styles.copy} onClick={copyEmail}>
                {copied ? <CheckIcon width={16} height={16} /> : <CopyIcon width={16} height={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <ul className={styles.links}>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> GitHub
                </a>
              </li>
            </ul>
            <p className={styles.location}>Based in {profile.location}.</p>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.field}>
              <span>Your name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label className={styles.field}>
              <span>Your email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className={styles.field}>
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            <p className={styles.note} role="status" aria-live="polite">
              {note}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

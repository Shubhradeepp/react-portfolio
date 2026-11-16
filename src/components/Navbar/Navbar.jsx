import { useEffect, useState } from "react";
import profile from "../../data/profile.json";
import { useTheme } from "../../hooks/useTheme";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { ThemeToggle } from "../ui/ThemeToggle";
import { CloseIcon, DownloadIcon, MenuIcon } from "../ui/Icons";
import styles from "./Navbar.module.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Contributions" },
  { id: "contact", label: "Contact" },
];
const SECTION_IDS = ["top", ...LINKS.map((l) => l.id)];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header} data-scrolled={scrolled || open ? "true" : "false"}>
      <nav className={`container ${styles.bar}`} aria-label="Main">
        <a className={styles.brand} href="#top" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <ul className={styles.links}>
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={styles.link}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a className={`btn btn-secondary ${styles.resume}`} href={profile.resume} download>
            <DownloadIcon width={18} height={18} />
            Resume
          </a>
          {/* <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button> */}
        </div>
      </nav>

      <div id="mobile-menu" className={styles.panel} hidden={!open}>
        <ul className="container">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={styles.panelLink}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a className={`btn btn-primary ${styles.panelResume}`} href={profile.resume} download>
              <DownloadIcon width={18} height={18} />
              Download resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

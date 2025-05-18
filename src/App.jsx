import { Helmet } from "react-helmet";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Helmet>
        <title>Shubhradeep Maity | Software Engineer</title>
        <meta
          name="description"
          content="Shubhradeep Maity is a full-stack software developer skilled in React, Typescript, Node.js, Java, and Spring Boot. Experienced in building SEO-optimized healthcare platforms, secure fintech systems, and scalable AI integrations. Explore his projects, skills, and professional journey."
        />

        <meta
          name="keywords"
          content="Shubhradeep Maity, Software Developer, Full Stack Developer, React Developer, Java Backend Developer, Node.js, Typescript, Material UI, Spring Boot, MongoDB, PostgreSQL, Tailwind CSS, Express.js"
        />
        <meta name="author" content="Shubhradeep Maity" />


        <meta property="og:title" content="Shubhradeep Maity | Full-Stack Software Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Shubhradeep Maity, a full-stack developer skilled in React, Spring Boot, Node.js, and MongoDB. Specialized in SEO-optimized healthcare platforms, secure fintech apps, and scalable AI integrations."
        />
        <meta property="og:image" content="https://shubhradeep-maity-dev-portfolio.vercel.app/assets/hero/link-preview.jpg" />
        <meta property="og:url" content="https://shubhradeep-maity-dev-portfolio.vercel.app" />
        <meta property="og:type" content="website" />

      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

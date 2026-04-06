import { Link } from "react-scroll";
import { FiArrowDown, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      {/* Background Decoration */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">
            A Future <span className="hero__highlight">IT Professional</span>
          </h1>
          <p className="hero__tagline">
            Information Technology Student • Web Developer • Tech Enthusiast
          </p>
          <p className="hero__description">
            Passionate about building modern web applications and learning new
            technologies. Currently pursuing a degree in Information Technology
            at Bulacan State University.
          </p>

          <div className="hero__actions">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-70}
              className="btn btn--primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
              className="btn btn--outline"
            >
              Get in Touch
            </Link>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/issei-css"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/issei-jansenn-sipagan-131b77378/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.facebook.com/jansenn.sipagan.14/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrapper">
            <div className="hero__photo-ring"></div>
            <div className="hero__photo-ring hero__photo-ring--2"></div>
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="hero__photo"
            />
          </div>
          <div className="hero__code-window">
            <div className="code-window__header">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <pre className="code-window__body">
              <code>
                {`const developer = {
  name: "Issei Jansenn O. Sipagan",
  school: "Bulacan State University",
  degree: "BS Info Tech",
  gradYear: 2027,
  skills: [
    "HTML", "CSS", "JavaScript",
    "PHP", "MySQL", "Firebase",
    "C#", "Supabase", "Cisco Networking"
  ],
  passion: "Building the web"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <Link
        to="about"
        smooth
        duration={500}
        offset={-70}
        className="hero__scroll-down"
      >
        <FiArrowDown />
      </Link>
    </section>
  );
}

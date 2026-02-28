import { FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about who I am and what drives me
        </p>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm an Information Technology student at <strong>Bulacan State University</strong>,
              expected to graduate in <strong>2027</strong>. I have a strong interest in web
              development and software engineering, and I enjoy turning ideas into functional
              and visually appealing digital products.
            </p>
            <p>
              My journey into tech started with curiosity about how websites work, and since then
              I've been continuously learning and improving my skills. I work with both frontend
              and backend technologies, and I'm always eager to explore new tools and frameworks.
            </p>
            <p>
              When I'm not coding, I enjoy exploring design in Figma, studying new technologies,
              and collaborating with fellow developers on meaningful projects.
            </p>
          </div>

          <div className="about__cards">
            <div className="about__card">
              <FiBookOpen className="about__card-icon" />
              <h4>Education</h4>
              <p>BS Information Technology</p>
            </div>
            <div className="about__card">
              <FiMapPin className="about__card-icon" />
              <h4>University</h4>
              <p>Bulacan State University</p>
            </div>
            <div className="about__card">
              <FiCalendar className="about__card-icon" />
              <h4>Graduation</h4>
              <p>Expected 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

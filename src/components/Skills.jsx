import { useState } from 'react'
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaDatabase, FaFigma, FaNetworkWired
} from 'react-icons/fa'
import { SiFirebase, SiSharp, SiCisco } from 'react-icons/si'
import './Skills.css'

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#e44d26', level: 90 },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4', level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e', level: 80 },
  { name: 'React', icon: <FaReact />, color: '#61dafb', level: 75 },
  { name: 'PHP', icon: <FaPhp />, color: '#777bb4', level: 75 },
  { name: 'MySQL', icon: <FaDatabase />, color: '#00758f', level: 75 },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', level: 70 },
  { name: 'C#', icon: <SiSharp />, color: '#68217a', level: 70 },
  { name: 'Figma', icon: <FaFigma />, color: '#a259ff', level: 80 },
]

const networkingSkills = [
  'Cisco Packet Tracer – Network simulation & topology design',
  'Router & Switch Configuration (CLI)',
  'VLAN Setup & Inter-VLAN Routing',
  'Static & Dynamic Routing (RIP, OSPF, EIGRP)',
  'IP Addressing & Subnetting',
  'Network Troubleshooting & Diagnostics',
  'Firewall & ACL Configuration',
  'LAN/WAN Design & Implementation',
]

const certificates = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/cisco-cert-${i + 1}.png`,
  alt: `Cisco Networking Certificate ${i + 1}`,
}))

export default function Skills() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="skill-card__name">{skill.name}</h4>
              <div className="skill-card__bar">
                <div
                  className="skill-card__progress"
                  style={{
                    width: `${skill.level}%`,
                    background: skill.color,
                  }}
                ></div>
              </div>
              <span className="skill-card__level">{skill.level}%</span>
            </div>
          ))}
        </div>

        {/* ── Networking Section ── */}
        <div className="networking-section">
          <div className="networking-section__header">
            <div className="networking-section__icon-row">
              <SiCisco className="networking-section__cisco-icon" />
              <FaNetworkWired className="networking-section__net-icon" />
            </div>
            <h3 className="networking-section__title">Networking</h3>
            <p className="networking-section__desc">
              Alongside web development, I have hands-on experience in computer
              networking — from designing network topologies in Cisco Packet
              Tracer to configuring routers, switches, VLANs, and routing
              protocols. Below are the core networking competencies I've built
              through coursework and practice.
            </p>
          </div>

          <ul className="networking-section__list">
            {networkingSkills.map((item) => (
              <li key={item} className="networking-section__list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Certificates Gallery ── */}
        <div className="certificates-section">
          <h3 className="certificates-section__title">
            Cisco Networking Certificates
          </h3>
          <p className="certificates-section__subtitle">
            Click any certificate to view it in full size
          </p>

          <div className="certificates-grid">
            {certificates.map((cert, i) => (
              <button
                className="cert-card"
                key={cert.src}
                style={{ animationDelay: `${i * 0.07}s` }}
                onClick={() => setLightbox(cert)}
                aria-label={`View ${cert.alt}`}
              >
                <img src={cert.src} alt={cert.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            className="lightbox__img"
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

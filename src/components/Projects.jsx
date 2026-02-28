import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'Bulsu Gate System',
    description:
      'It is a gate system that uses RFID technology to control access to the campus. It allows students and staff to enter and exit the campus using their ID cards.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/issei-css/BulSU-Gate-System',
    live: '#',
  },
  {
    title: 'Dental Clinic Management System',
    description:
      'It is a System that manages the operations of a dental clinic, including patient records, appointments, billing, and inventory management. It is built with Java with GUI and MySQL database.',
    tags: ['Java', 'MySQL', 'JavaFX'],
    github: 'https://github.com/issei-css/Dental_Clinic_Management_System',
    live: '#',
  },
  {
    title: 'Event Driven Programming Project',
    description:
      'It is a project that demonstrates the use of event-driven programming concepts. It is built with Java and MySQL database. It allows users to create and manage events, with a GUI interface.',
    tags: ['Java', 'MySQL', 'JavaFX'],
    github: 'https://github.com/issei-css/MidYear_Project_2025',
    live: '#',
  },
  {
    title: 'PC Parts Inventory System',
    description:
      'It is a system that manages the inventory of PC parts in a store. It allows users to add, update, and delete PC parts, as well as view the current inventory.',
    tags: ['HTML','CSS','JavaScript','React JavaScript','MySQL',],
    github: 'https://github.com/issei-css/REACT-TRAINING',
    live: 'https://pc-parts-inventory.vercel.app/',
  },
  
 {
    title: 'Personal Portfolio Website',
    description:
      'It is a personal portfolio website that showcases my projects, skills, and experience. It is built with React JavaScript and CSS.',
    tags: ['HTML','CSS','JavaScript','React JavaScript'],
    github: 'https://github.com/issei-css/Personal_Portfolio_Website',
    live: '#',
  },
 
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've worked on
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              className="project-card"
              key={project.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-card__header">
                <div className="project-card__folder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



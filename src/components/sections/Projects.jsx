import '../../styles/sections/Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Plataforma Geoespacial",
      type: "Trabajo de título",
      year: "2024",
      description: [
        "Desarrollo de plataforma web para visualización de datos geoespaciales usando Streamlit.",
        "Implementación de algoritmos en JavaScript e integración con QGIS mediante API web.",
        "Diseño de interfaz intuitiva para usuarios no técnicos."
      ],
      technologies: ["Streamlit", "Python", "JavaScript", "QGIS"],
      github: "https://github.com/Gokarson1/TT-Geoespacial",
      
    },
    {
      id: 2,
      title: "App de Gestión de Tareas",
      type: "Proyecto Universitario",
      year: "2024",
      description: [
        "Desarrollo completo de app en Flutter para gestión de tareas.",
        "Implementación de APIs y servicios de almacenamiento y autenticación."
      ],
      technologies: ["Flutter", "Firebase"],
      github: "https://github.com/Gokarson1/AgendaCompuMovil",
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="project-year">{project.year}</span>
                </span>
              </div>
              
              <ul className="project-description">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                    Código
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="demo-link" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
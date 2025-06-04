import '../../styles/sections/Projects.scss';
import geoespacialImg from '/images/geohub.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Plataforma Geoespacial",
      type: "Trabajo de título",
      year: "2024",
      image: geoespacialImg, // Nueva propiedad
      imageAlt: "Captura de pantalla de la plataforma geoespacial",
      description: [
        "Desarrollo de plataforma web para visualización de datos geoespaciales usando Streamlit.",
        "Implementación de algoritmos en JavaScript e integración con QGIS mediante API web.",
        "Diseño de interfaz intuitiva para usuarios no técnicos."
      ],
      technologies: ["Streamlit", "Python", "JavaScript", "QGIS"],
      github: "https://github.com/Gokarson1/TT-Geoespacial",
      
    }
    
  ];
return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Nueva sección para la imagen */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.imageAlt} 
                  className="project-image"
                  loading="lazy" // Optimización de carga
                />
              </div>
              
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="project-year">{project.year}</span>
                </span>
              </div>
              
              {/* Resto del código permanece igual */}
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
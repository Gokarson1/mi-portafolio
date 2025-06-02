import '../../styles/sections/Experience.scss';

const Experience = () => {
  const professionalExperience = [
    {
      id: 1,
      title: "Desarrollo Frontend (Freelance)",
      company: "Kctus Gestión SpA",
      period: "Mayo 2025",
      description: [
        "Diseño e implementación de sitio web corporativo en React.js con Vite, alojado en Vercel.",
        "Integración continua mediante GitHub y dominio personalizado (kctus.cl) configurado desde NIC Chile.",
        "Desarrollo de interfaces responsive con secciones personalizadas, modales interactivos y formulario funcional con EmailJS."
      ],
      tags: ["React", "Vite", "Vercel"]
    },
    {
      id: 2,
      title: "Práctica profesional Frontend",
      company: "Wift SpA",
      period: "Diciembre 2024 – Febrero 2025",
      description: [
        "Desarrollo de interfaces en Bubble.io con integración de código en JavaScript y CSS.",
        "Automatización del envío de contratos en Odoo mediante SignAPI.",
        "Optimización de chatbots en Chattigo para el área de ventas."
      ],
      tags: ["Bubble.io", "JavaScript", "Odoo"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experiencia Profesional</h2>
        
        <div className="timeline">
          {professionalExperience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company-period">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </span>
                </div>
                
                <ul className="timeline-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className="timeline-tags">
                  {exp.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import '../../styles/sections/Technologies.scss';
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiAngular,SiFlutter,SiC,SiCplusplus, SiDart,SiMysql,SiPostgresql, SiGooglecloud,SiNotion } from 'react-icons/si';

const Technologies = () => {
  const technologies = [
     // 🌐 Frontend
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Dart", icon: <SiDart />, color: "#0175C2" },

  // ⚙️ Backend
  { name: "Node.js", icon: <FaJs />, color: "#339933" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "C", icon: <SiC />, color: "#A8B9CC" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },

  // 🛢️ Bases de datos y nube
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },

  // 🛠️ Herramientas
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Notion", icon: <SiNotion />, color: "#000000" }
  ];

  return (
    <section id="technologies" className="section">
      <div className="container">
        <h2>Tecnologías</h2>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-item"
              style={{ '--tech-color': tech.color }}
            >
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
import '../styles/footer.scss';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/fabian-alejandro-sanhueza-garrido-11799a2bb" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Gokarson1" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:fabiansanhueza.ga@gmail.com" 
             aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Fabián Sanhueza</p>
          <p className="tech-stack">Desarrollado con React + Vite</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
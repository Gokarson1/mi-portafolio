// components/sections/About.jsx
import '../../styles/sections/About.scss';

export default function About() {
  return (
    <section id="about">
      <div className="container about-content">
        <img src="/images/yo.jpg" alt="Fabián Sanhueza" />

        <div className="info">
          <h1>Fabián Sanhueza</h1>
          <h3>Full Stack Developer</h3>
          <p className="location">Santiago, Chile</p>

          <div className="buttons">
            <a href="mailto:fabiansanhueza.ga@gmail.com" className="btn">fabiansanhueza.ga@gmail.com</a>
            <a href="https://docs.google.com/document/d/1Xc4S9y-YmKwyYIaBUmsvErkqrj9Nw4UgzkeN00XLgiQ/export?format=pdf" target="_blank" rel="noopener noreferrer" className="btn">Descargar CV</a>
            <a href="https://github.com/Gokarson1" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/fabian-alejandro-sanhueza-garrido-11799a2bb/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="about-description">
        <h2>Sobre Mí</h2>
        <p>
          Ingeniero en Informática con experiencia en desarrollo de software, gestión de equipos y metodologías ágiles.
          Apasionado por la tecnología y en constante aprendizaje, con habilidades en desarrollo frontend y backend.
          Busco continuar creciendo profesionalmente en el área de desarrollo de software, aportando mis conocimientos
          y habilidades en entornos dinámicos y desafiantes.

        </p>
      </div>
    </section>
  );
}

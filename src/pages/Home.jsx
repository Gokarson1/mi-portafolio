
import Footer from '../components/Footer'
import About from '../components/sections/About'
import Technologies from '../components/sections/Technologies'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'

const Home = () => {
  return (
    <>
      <main>
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Education /> 
      </main>
      <Footer />
    </>
  )
}

export default Home

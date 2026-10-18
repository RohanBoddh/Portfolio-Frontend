import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
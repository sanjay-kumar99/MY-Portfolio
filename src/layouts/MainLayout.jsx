import "./MainLayout.css";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Timeline from "../components/Timeline/Timeline";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import CursorGlow from "../components/CursorGlow/CursorGlow";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import AnimatedBlob from "../components/AnimatedBlob/AnimatedBlob";

const MainLayout = () => {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <AnimatedBlob />

      <Navbar />

      <main className="main-container">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="blogs">
          <Blogs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;

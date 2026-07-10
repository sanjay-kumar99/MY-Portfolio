import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import heroVideo from "../../assets/videos/hero.mp4";
import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// import profile from "../../assets/images/profile.jpeg";

import "./Hero.css";

const Hero = () => {
  const videoRef = useRef();

  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !muted;

    if (muted) {
      videoRef.current.play();
    }

    setMuted(!muted);
  };
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <button className="sound-toggle" onClick={toggleSound}>
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}

      <div className="hero-container">
        {/* Left */}

        <motion.div
          className="hero-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>
            Sanjay
            <span> Kumar</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <div className="typing">
            <TypeAnimation
              sequence={[
                "React.js Developer",
                2000,

                "Node.js Developer",
                2000,

                "Express.js",
                2000,

                "MongoDB",
                2000,

                "Tailwind CSS",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">
            Passionate MERN Stack Developer focused on building modern,
            responsive, scalable web applications with beautiful UI and clean
            backend architecture.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">
            <Link
              to="projects"
              smooth
              duration={600}
              className="btn primary-btn"
            >
              View Projects
            </Link>

            <a href="/resume.pdf" download className="btn secondary-btn">
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Social */}

          <div className="hero-social">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right */}

        {/* <motion.div
          className="hero-right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-circle">
            <img src={profile} alt="profile" />
          </div>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;

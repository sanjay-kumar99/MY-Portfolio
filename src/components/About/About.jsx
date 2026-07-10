import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../../assets/images/profile.png";

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </motion.div>

      <div className="about-container">
        {/* LEFT CARD */}

        <motion.div
          className="about-card"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={profile} alt="profile" />

          <h3>Sanjay Kumar</h3>

          <span>Full Stack Developer</span>

          <div className="info">
            <p>
              <FaMapMarkerAlt />
              Punjab, India
            </p>

            <p>
              <FaEnvelope />
              sanjayldhsanjay556@gmail.com
            </p>

            <p>
              <FaLaptopCode />
              MERN Stack
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Passionate Full Stack Developer</h3>

          <p>
            I am a MERN Stack Developer passionate about building modern,
            scalable and user-friendly web applications. I enjoy creating
            responsive interfaces with React.js and developing secure REST APIs
            using Node.js, Express.js and MongoDB.
          </p>

          {/* Education */}

          <div className="about-box">
            <FaGraduationCap className="icon" />

            <div>
              <h4>Education</h4>

              <p>
                Bachelor of Computer Applications (BCA)
                <br />
                Punjab University
              </p>
            </div>
          </div>

          {/* Certification */}

          <div className="about-box">
            <FaCertificate className="icon" />

            <div>
              <h4>Certification</h4>

              <p>
                MERN Stack Development
                <br />
                Full Stack Training
              </p>
            </div>
          </div>

          {/* Stats */}

          <div className="stats">
            <div>
              <h2>3+</h2>

              <span>Projects</span>
            </div>

            <div>
              <h2>1</h2>

              <span>Internship</span>
            </div>

            <div>
              <h2>100%</h2>

              <span>Dedication</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

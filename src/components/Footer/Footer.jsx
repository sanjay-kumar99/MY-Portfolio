import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <h2>Sanjay Kumar</h2>

        <h4>Full Stack Developer (MERN Stack)</h4>

        <p>
          Passionate about building scalable,
          responsive and user-friendly web applications
          using modern technologies.
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sanjayldhsanjay556@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">

          © {new Date().getFullYear()} Sanjay Kumar.

          Made with <FaHeart className="heart" /> using React.js

        </p>

      </motion.div>

    </footer>
  );
};

export default Footer;
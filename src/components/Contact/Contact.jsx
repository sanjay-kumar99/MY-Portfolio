import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <SectionTitle
          subtitle="Let's Connect"
          title="Contact Me"
        />

        <div className="contact-wrapper">

          {/* LEFT */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3>Let's Build Something Amazing 🚀</h3>

            <p>
              I'm currently looking for Full Stack Developer
              opportunities. Whether you have a project,
              freelance work, or just want to say hello,
              feel free to contact me.
            </p>

            <div className="info-item">
              <FaEnvelope />
              <span>sanjayldhsanjay556@gmail.com</span>
            </div>

            <div className="info-item">
              <FaPhone />
              <span>+91 8146774370</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Ludhiana, Punjab, India</span>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
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

            <a
              href="/resume.pdf"
              download
              className="download-btn"
            >
              <FaDownload />
              Download CV
            </a>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
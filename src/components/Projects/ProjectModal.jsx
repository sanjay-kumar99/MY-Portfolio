import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const ProjectModal = ({ project, closeModal }) => {
  return (
    <AnimatePresence>

      <motion.div
        className="modal-backdrop"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          className="project-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{
            scale: .8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: .8,
            opacity: 0,
          }}
        >

          {/* Close */}

          <button
            className="close-btn"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Image */}

          <img
            src={project.image}
            alt={project.title}
          />

          {/* Content */}

          <h2>{project.title}</h2>

          <p className="modal-description">
            {project.description}
          </p>

          {/* Tech */}

          <div className="modal-tech">

            {project.tech.map((tech, index) => (

              <span key={index}>
                {tech}
              </span>

            ))}

          </div>

          {/* Features */}

          <h3>Key Features</h3>

          <ul>

            {project.features.map((feature, index) => (

              <li key={index}>
                {feature}
              </li>

            ))}

          </ul>

          {/* Buttons */}

          <div className="modal-buttons">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
};

export default ProjectModal;
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: -3,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {/* Image */}

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-overlay">

          <button
            onClick={() => setSelectedProject(project)}
          >
            View Details
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* Tech */}

        <div className="tech-stack">

          {project.tech.map((tech, index) => (

            <span key={index}>
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="project-buttons">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt />
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <button
            className="details-btn"
            onClick={() => setSelectedProject(project)}
          >
            Details
            <FaArrowRight />
          </button>

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;
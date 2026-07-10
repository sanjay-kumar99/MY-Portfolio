import { motion } from "framer-motion";
import "./SectionTitle.css";

const SectionTitle = ({ subtitle, title, center = true }) => {
  return (
    <motion.div
      className={`section-title ${center ? "center" : "left"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-subtitle">{subtitle}</span>

      <h2 className="section-heading">
        {title}
      </h2>

      <div className="section-line"></div>
    </motion.div>
  );
};

export default SectionTitle;
import { motion } from "framer-motion";
import "./AnimatedBlob.css";

const AnimatedBlob = () => {
  return (
    <div className="blob-wrapper">

      <motion.div
        className="blob blob-one"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-two"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob-three"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
};

export default AnimatedBlob;
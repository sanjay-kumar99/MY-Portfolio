import { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage = (scrollTop / height) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", calculateScroll);

    calculateScroll();

    return () =>
      window.removeEventListener("scroll", calculateScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
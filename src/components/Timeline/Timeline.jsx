import { motion } from "framer-motion";

import SectionTitle from "../SectionTitle/SectionTitle";

import timeline from "../../data/timeline";

import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="timeline">

      <div className="timeline-container">

        <SectionTitle
          subtitle="Career Journey"
          title="My Timeline"
        />

        <div className="timeline-wrapper">

          {timeline.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}

                key={index}

                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: .6,
                }}

                viewport={{
                  once: true,
                }}

              >

                <div className="timeline-content">

                  <div className="timeline-icon">

                    <Icon />

                  </div>

                  <span className="timeline-year">

                    {item.year}

                  </span>

                  <h3>

                    {item.title}

                  </h3>

                  <h4>

                    {item.company}

                  </h4>

                  <p>

                    {item.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Timeline;
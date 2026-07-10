import { motion } from "framer-motion";

import SectionTitle from "../SectionTitle/SectionTitle";

import skillsData from "../../data/skills";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">

      <div className="skills-container">

        <SectionTitle
          subtitle="My Expertise"
          title="Skills"
        />

        <div className="skills-grid">

          {skillsData.map((group, index) => (

            <motion.div

              className="skill-card"

              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .6,
                delay: index * .2,
              }}

              viewport={{
                once: true,
              }}
            >

              <h3>

                {group.category}

              </h3>

              {group.skills.map((item, i) => {

                const Icon = item.icon;

                return (

                  <div className="skill-item" key={i}>

                    <div className="skill-header">

                      <div className="skill-name">

                        <Icon className="skill-icon"/>

                        {item.name}

                      </div>

                      <span>

                        {item.level}%

                      </span>

                    </div>

                    <div className="progress">

                      <motion.div

                        className="progress-bar"

                        initial={{ width:0 }}

                        whileInView={{
                          width:`${item.level}%`
                        }}

                        transition={{
                          duration:1
                        }}

                        viewport={{
                          once:true
                        }}

                      />

                    </div>

                  </div>

                );

              })}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;
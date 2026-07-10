import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import SectionTitle from "../SectionTitle/SectionTitle";
import blogs from "../../data/blogs";

import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="blogs">

      <div className="blogs-container">

        <SectionTitle
          subtitle="Latest Articles"
          title="My Blogs"
        />

        <div className="blogs-grid">

          {blogs.map((blog, index) => (

            <motion.div
              className="blog-card"
              key={blog.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >

              <div className="blog-image">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

              </div>

              <div className="blog-content">

                <span className="blog-category">
                  {blog.category}
                </span>

                <small>{blog.date}</small>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <a href={blog.link}>
                  Read More
                  <FaArrowRight />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Blogs;
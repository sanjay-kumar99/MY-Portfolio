import reactImg from "../assets/images/react-blog.webp";
import nodeImg from "../assets/images/node-blog.webp";
import interviewImg from "../assets/images/interview-blog.webp";

const blogs = [
  {
    id: 1,
    title: "Building a MERN Stack E-Commerce Website",
    image: reactImg,
    category: "React",
    date: "15 June 2026",
    description:
      "How I built a complete MERN stack e-commerce application with authentication, cart, Razorpay integration, and admin dashboard.",
    link: "#",
  },

  {
    id: 2,
    title: "React Performance Optimization Tips",
    image: nodeImg,
    category: "React",
    date: "30 June 2026",
    description:
      "Simple techniques like lazy loading, memoization, code splitting, and optimized rendering to improve React applications.",
    link: "#",
  },

  {
    id: 3,
    title: "MERN Interview Preparation Guide",
    image: interviewImg,
    category: "Career",
    date: "08 July 2026",
    description:
      "Frequently asked MERN Stack interview questions along with practical coding tips for freshers.",
    link: "#",
  },
];

export default blogs;

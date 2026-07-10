import ecommerce from "../assets/images/ecommerce.png";
import ridenow from "../assets/images/ridenow.png";
import sai from "../assets/images/sai.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: ecommerce,

    tech: ["React", "Node", "Express", "MongoDB"],

    description:
      "Complete MERN E-Commerce website with authentication, admin dashboard, Razorpay integration, cart and orders.",

    features: [
      "JWT Authentication",
      "Admin Dashboard",
      "Shopping Cart",
      "Wishlist",
      "Razorpay Payment",
      "Order Tracking",
    ],

    github: "https://github.com/sanjay-kumar99/San-Store",

    live: "https://san-store-zeta.vercel.app/",
  },

  {
    id: 2,

    title: "RideNow",

    image: ridenow,

    tech: ["HTML", "CSS", "JS"],

    description:
      "RideNow is a modern cab booking platform offering safe, affordable, and on‑time rides with transparent fares and 24/7 support.",

    features: [
      "Quick City Rides",
      "Airport Transfers",
      "One‑Way & Round Trips",
      "Transparent Fare System",
      "24/7 Customer Support",
    ],

    github: "https://github.com/sanjay-kumar99/RideNow",

    live: "https://ridenow-dev.netlify.app/",
  },

  {
    id: 3,

    title: "Sai Alluminium & Glass House",

    image: sai,

    tech: ["HTML", "CSS", "JS", "Nodejs"],

    description:
      "A responsive interior services website where product and service images are dynamically fetched from the backend API.",

    features: [
      "Dynamic Image Rendering from Backend",
      "Responsive Layout with Modern UI",
      "Service Showcase Section",
      "Contact Form Integration",
      "Lightweight Node.js Backend",
    ],

    github: "https://github.com/sanjay-kumar99/interior-website",

    live: "https://interior-website-bwn1.onrender.com/",
  },

  {
    id: 4,

    title: "Portfolio",

    image: portfolio,

    tech: ["React", "CSS", "Framer Motion"],

    description: "Premium animated developer portfolio.",

    features: ["Animations", "Responsive"],

    github: "https://github.com/sanjay-kumar99/MY-Portfolio",

    live: "#",
  },
];

export default projects;

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        {/* Logo */}

        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          className="logo-link"
        >
          <motion.h2 whileHover={{ scale: 1.05 }} className="logo">
            Sanjay<span>.</span>
          </motion.h2>
        </Link>

        {/* Desktop Menu */}

        <nav className="desktop-nav">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="active"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Resume */}

        <a href="/CV.pdf" download className="resume-btn desktop-btn">
          <FaDownload />
          Resume
        </a>

        {/* Mobile Menu Button */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/CV.pdf"
              download
              className="resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              <FaDownload />
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
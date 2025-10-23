import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/WfOS-LOGO.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceLinks = [
    { path: "/services/proposal", label: "Proposal Development" },
    { path: "/services/recruitment", label: "Cleared Recruitment" },
    { path: "/services/staffing", label: "Staffing Services" },
    { path: "/services/software", label: "Software Development" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      path: "/services",
      label: "Services",
      hasDropdown: true,
      onMouseEnter: () => setShowServicesDropdown(true),
      onMouseLeave: () => setShowServicesDropdown(false),
    },
    { path: "/contact", label: "Contact" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-glass-border shadow-lg`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt="Company logo" className="h-15 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={link.onMouseEnter}
                onMouseLeave={link.onMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 group flex items-center ${
                    location.pathname === link.path || 
                    (link.path === "/services" && location.pathname.startsWith("/services"))
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        showServicesDropdown ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent-glow transition-transform duration-300 origin-left ${
                      location.pathname === link.path ||
                      (link.path === "/services" && location.pathname.startsWith("/services"))
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 w-64 bg-glass/90 backdrop-blur-xl border border-glass-border rounded-lg shadow-lg"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              location.pathname === service.path
                                ? "text-accent bg-accent/10"
                                : "text-foreground hover:text-accent hover:bg-accent/5"
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#45A3FF] to-[#3454FF] hover:shadow-lg text-white transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-glass/90 backdrop-blur-lg z-50 flex flex-col px-6 pt-24 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className={`block py-3 text-xl font-semibold rounded transition-colors duration-300 ${
                    location.pathname === link.path ||
                    (link.path === "/services" && location.pathname.startsWith("/services"))
                      ? "text-accent bg-gradient-to-r from-accent/20 to-accent-glow/10"
                      : "text-foreground hover:text-accent hover:bg-gradient-to-r hover:from-accent/10 hover:to-secondary/10"
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-lg transition-colors duration-200 ${
                          location.pathname === service.path
                            ? "text-accent"
                            : "text-foreground/80 hover:text-accent"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#45A3FF] to-[#3454FF] hover:shadow-lg text-white py-3 mt-4"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;

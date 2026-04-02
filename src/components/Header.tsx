import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Lavori", path: "/lavori" },
  { label: "Chi sono", path: "/chi-sono" },
  { label: "Contatti", path: "/contatti" },
];

const Header = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container flex items-center justify-between h-16 max-w-5xl mx-auto px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="logo.png" alt="Fabrizio Parodi" className="h-8" />
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

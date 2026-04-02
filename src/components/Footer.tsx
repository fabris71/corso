import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fabrizio Parodi. Tutti i diritti riservati.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/contatti" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contatti
          </Link>
          <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

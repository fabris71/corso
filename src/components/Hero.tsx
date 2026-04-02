import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-16">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-6"
          >
            Senior Multimedia Developer · Formatore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-8"
          >
            Promozione multimediale,
            <br />
            <span className="text-accent">prodotti web & app.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Progetto e sviluppo applicazioni iOS e Android, siti web, 
            segnaletiche interattive e formazione digitale con un focus 
            sull'Intelligenza Artificiale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <Link
              to="/lavori"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Vedi i lavori
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contatti"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contattami
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

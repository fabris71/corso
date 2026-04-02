import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4"
          >
            Contatti
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Parliamo del
            <br />
            tuo progetto.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed mb-14 max-w-lg"
          >
            Hai un'idea o un progetto in mente? Scrivimi e troviamo insieme la soluzione migliore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <a
              href="mailto:fabrizio@studioand.it"
              className="flex items-center gap-4 group p-5 rounded-xl border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  fabrizio@studioand.it
                </p>
              </div>
            </a>

            <a
              href="tel:+393384195644"
              className="flex items-center gap-4 group p-5 rounded-xl border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Telefono</p>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  338 419 5644
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Sede</p>
                <p className="text-sm font-medium text-foreground">Via Cappuccini 3 – Albino (BG)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contatti;

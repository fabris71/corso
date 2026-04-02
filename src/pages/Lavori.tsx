import Header from "@/components/Header";
import WorksGrid from "@/components/WorksGrid";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Lavori = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-8">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Lavori
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            Una selezione di progetti recenti tra web design, app e branding.
          </motion.p>
        </div>
      </div>
      <WorksGrid showHeader={false} showFilters />
      <Footer />
    </div>
  );
};

export default Lavori;

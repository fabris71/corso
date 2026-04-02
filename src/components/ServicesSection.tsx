import { motion } from "framer-motion";
import { Smartphone, Palette, MapPin, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App & Web Development",
    description:
      "Progetto e sviluppo applicazioni iOS e Android, dando risposta alle esigenze di comunicazione e business delle imprese innovative con soluzioni personalizzate e all'avanguardia.",
  },
  {
    icon: Palette,
    title: "Design & Comunicazione",
    description:
      "Tecniche professionali per la sperimentazione visiva. Dal video alla grafica, sviluppo soluzioni creative per aziende e privati, utilizzando tutti i canali di comunicazione.",
  },
  {
    icon: MapPin,
    title: "Valorizzazione del territorio",
    description:
      "Lettura e individuazione degli elementi paesaggistici, culturali e della tradizione per la creazione di itinerari georeferenziati e fruizione interattiva del territorio.",
  },
  {
    icon: BrainCircuit,
    title: "Formazione Digitale & AI",
    description:
      "Percorsi di formazione digitale per comunità, associazioni e aziende, con attenzione all'Intelligenza Artificiale e al suo impatto nei processi creativi, educativi e organizzativi.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3">
            Servizi
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Cosa offro
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border hover:border-accent/30 transition-colors"
            >
              <service.icon className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

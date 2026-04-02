import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const collaborazioni = [
  {
    nome: "Il Dato s.r.l.",
    ruolo: "Sviluppo applicazioni per il mondo aziendale",
    periodo: "2018 – oggi",
    luogo: "Italia",
    link: "https://www.ildato.it/",
  },
  {
    nome: "Formazione AI",
    ruolo: "Docente e formatore sull'Intelligenza Artificiale",
    periodo: "2023 – oggi",
    luogo: "Italia",
  },
  {
    nome: "Scuola d'Arte Andrea Fantoni",
    ruolo: "Professore area grafica / tecnica professionale",
    periodo: "2018 – oggi",
    luogo: "Bergamo",
  },
  {
    nome: "Istituto Europeo di Design (IED)",
    ruolo: "Docente di Adobe Flash, ActionScript, portfolio design",
    periodo: "2004 – 2013",
    luogo: "Torino",
  },
  {
    nome: "Cityteller – Boosted by TreataBit",
    ruolo: "Co-fondatore e responsabile sviluppo app",
    periodo: "2013 – 2024",
    luogo: "Torino",
  },
  {
    nome: "Università degli Studi di Bergamo",
    ruolo: "Progettazione app mobile per il racconto del territorio",
    periodo: "2013",
    luogo: "Bergamo",
  },
  {
    nome: "Università degli Studi Milano – Bicocca",
    ruolo: "Sviluppo app Tag Your Place (iOS)",
    periodo: "2012 – 2013",
    luogo: "Milano",
  },
  {
    nome: "Politecnico di Torino",
    ruolo: "Laurea in Architettura – 110/110 con lode e menzione",
    periodo: "2002",
    luogo: "Torino",
  },
];

const competenze = [
  "UI/UX Design",
  "App Design",
  "Web Design",
  "React Native",
  "Adobe Suite",
  "Generative AI",
  "HTML / CSS / JS",
  "Formazione",
  "Branding",
  "Architettura",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const ChiSono = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4"
              >
                Chi sono
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
              >
                Fabrizio Parodi
              </motion.h1>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-5 text-muted-foreground leading-relaxed"
              >
                <p>
                  Architetto di formazione, designer digitale per vocazione. Dal 2001 mi occupo di comunicazione digitale,
                  specializzandomi nella progettazione di app mobile, siti web e identità visive.
                </p>
                <p>
                  La mia formazione al Politecnico di Torino — dove mi sono laureato con 110 e lode e menzione —
                  mi ha insegnato a unire visione progettuale e rigore tecnico. Un approccio che porto in ogni
                  progetto: dall'ascolto del cliente alla cura dell'ultimo pixel.
                </p>
                <p>
                  Accanto alla professione, ho sempre coltivato la passione per la formazione: ho insegnato allo
                  IED di Torino, all'Università di Bergamo e alla Scuola Andrea Fantoni, dove sono tuttora
                  professore di grafica e tecnica professionale.
                </p>
                <p>
                  Nel 2013 ho co-fondato <strong className="text-foreground">Cityteller</strong>, startup
                  innovativa che ha portato i luoghi dei libri su una mappa geo-emozionale — un progetto che
                  unisce la mia passione per il territorio, la lettura e la tecnologia.
                </p>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-10"
            >
              <div className="aspect-[3/4] bg-card rounded-xl border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-display">Foto</span>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-4">
                  Competenze
                </h3>
                <div className="flex flex-wrap gap-2">
                  {competenze.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">
                  Contatti
                </h3>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <p>fabrizio@studioand.it</p>
                  <p>338 419 5644</p>
                  <p>Albino (BG) – Via Cappuccini 3</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaborazioni */}
      <section className="pb-24">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3">
              Percorso
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Collaborazioni
            </h2>
          </motion.div>

          <div className="space-y-0 border-t border-border">
            {collaborazioni.map((collab, i) => (
              <motion.div
                key={collab.nome}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-8 items-baseline py-6 border-b border-border"
              >
                <span className="text-sm text-muted-foreground font-medium">
                  {collab.periodo}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {collab.link ? (
                      <a href={collab.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
                        {collab.nome}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : collab.nome}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {collab.ruolo}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {collab.luogo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSono;

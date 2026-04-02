import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProgettoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Progetto non trovato</h1>
          <Link to="/lavori" className="text-accent hover:underline text-sm">
            ← Torna ai lavori
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/lavori"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Tutti i lavori
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3"
          >
            {project.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Cover Image */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="pb-20"
      >
        <div className="container max-w-5xl mx-auto px-6">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-card border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Content + Sidebar */}
      <section className="pb-24">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {project.sections?.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                </motion.div>
              ))}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-card border border-border">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {project.client && (
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Cliente
                  </h3>
                  <p className="text-sm font-medium text-foreground">{project.client}</p>
                </div>
              )}
              {project.date && (
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Data
                  </h3>
                  <p className="text-sm font-medium text-foreground">{project.date}</p>
                </div>
              )}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                  Categoria
                </h3>
                <p className="text-sm font-medium text-foreground">{project.category}</p>
              </div>
              {project.links && project.links.length > 0 && (
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    Link
                  </h3>
                  <div className="space-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgettoDetail;

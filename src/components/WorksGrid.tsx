import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

interface WorksGridProps {
  limit?: number;
  showHeader?: boolean;
  showFilters?: boolean;
}

const categories = ["Tutti", ...Array.from(new Set(projects.map((p) => {
  if (p.category.includes("App")) return "App Design";
  if (p.category.includes("Website") && p.category.includes("Logo")) return "Logo Rebranding";
  if (p.category.includes("Website")) return "Website";
  if (p.category.includes("Logo")) return "Logo Rebranding";
  return p.category;
})))];

const getSimpleCategory = (cat: string) => {
  if (cat.includes("App")) return "App Design";
  if (cat.includes("Website") && cat.includes("Logo")) return "Logo Rebranding";
  if (cat.includes("Website")) return "Website";
  if (cat.includes("Logo")) return "Logo Rebranding";
  return cat;
};

const WorksGrid = ({ limit, showHeader = true, showFilters = false }: WorksGridProps) => {
  const [activeFilter, setActiveFilter] = useState("Tutti");

  const filteredProjects = activeFilter === "Tutti"
    ? projects
    : projects.filter((p) => getSimpleCategory(p.category) === activeFilter);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        {showHeader && (
          <div className="flex items-end justify-between mb-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3"
              >
                Portfolio
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground"
              >
                Lavori selezionati
              </motion.h2>
            </div>
            {limit && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/lavori"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Vedi tutti
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )}
          </div>
        )}

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
                {cat !== "Tutti" && (
                  <span className="ml-1.5 opacity-60">
                    {projects.filter((p) => getSimpleCategory(p.category) === cat).length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <Link to={`/lavori/${project.id}`}>
                  <div className="aspect-[4/3] bg-card rounded-xl mb-5 overflow-hidden border border-border relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground text-sm font-display">{project.category}</span>
                      </div>
                    )}
                    {/* Slide-in overlay from left */}
                    <div className="absolute bottom-[10%] left-0 bg-foreground/80 p-[30px] translate-x-[calc(-100%+10px)] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] rounded-r-lg">
                      <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-200">
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-1">
                          {project.category}
                        </p>
                        <h3 className="font-display text-lg font-semibold text-primary-foreground whitespace-nowrap">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-sm">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mt-1.5 flex-shrink-0" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WorksGrid;

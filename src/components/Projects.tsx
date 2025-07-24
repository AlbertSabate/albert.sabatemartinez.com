import { motion } from "framer-motion";
import { ArrowUpRight, Award, Calendar, Github, Play, Users, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/use-translation";
import type { ProfileData } from "@/types";
import { cn } from "@/utils/cn";

interface ProjectsProps {
  data: ProfileData["projects"];
}

export function Projects({ data }: ProjectsProps) {
  const { t } = useTranslation();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const getProjectIcon = (title: string) => {
    if (title.includes("Binance") || title.includes("Alipay") || title.includes("Grab")) {
      return <Users className="h-5 w-5" />;
    }
    if (title.includes("Framework") || title.includes("Brisa")) {
      return <Github className="h-5 w-5" />;
    }
    return <Award className="h-5 w-5" />;
  };

  const formatTechnologies = (technologies: string[]) => {
    // Show only the most important ones
    const featured = technologies.slice(0, 4);
    const remaining = technologies.length - featured.length;
    return { featured, remaining };
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-headings mb-4">{t("projects.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.map((project, index) => {
              const { featured, remaining } = formatTechnologies(project.technologies);
              const hasMedia = project.image || project.video;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "group relative bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col",
                    index === 0 && "lg:col-span-2", // Feature the first project
                  )}
                >
                  {/* Media Section */}
                  {hasMedia && (
                    <div className="relative h-64 lg:h-80 overflow-hidden bg-muted">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : project.video ? (
                        <div className="relative w-full h-full">
                          {playingVideo === project.video ? (
                            <iframe
                              src={`https://www.youtube.com/embed/${project.video}?autoplay=1`}
                              title={project.title}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <>
                              <img
                                src={`https://img.youtube.com/vi/${project.video}/maxresdefault.jpg`}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <button
                                type="button"
                                onClick={() => setPlayingVideo(project.video || null)}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer z-10"
                                aria-label={`Play video for ${project.title}`}
                              >
                                <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                              </button>
                            </>
                          )}
                        </div>
                      ) : null}

                      {/* Overlay gradient */}
                      {!playingVideo && (
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 pointer-events-none" />
                      )}
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getProjectIcon(project.title)}
                          <h3 className="text-xl lg:text-2xl font-bold font-headings">{project.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>

                      {project.links && project.links.length > 0 && (
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          aria-label={`View ${project.title}`}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                      {project.description.split("\n")[0]}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6 space-y-2">
                        {project.highlights.slice(0, 2).map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {featured.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {remaining > 0 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                          +{remaining} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground">{t("projects.cta")}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal Overlay */}
      {playingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && setPlayingVideo(null)}
            role="dialog"
            aria-label="Video player"
          >
            <button
              type="button"
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close video"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
              title="Project video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

import { supabase } from "@/lib/supabase";
import { ExpandableCard } from "./ui/expandable-card";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech_stack: string[] | null;
  live_url: string | null;
  github_url: string | null;
  image_url: string | null;
  category: string | null;
}

export default async function Projects() {
   const { data, error, count } = await supabase
    .from("projects")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error("Error fetching projects:", error);
  }

  const projects: ProjectItem[] = data || [];

  const fallbackImage = "https://placehold.co/600x400/18181b/ffffff?text=No+Image";

  return (
    <section id="projects">
      <div className="flex flex-col px-6 md:px-12 lg:px-20 pb-4 lg:pb-2 w-full bg-black lg:gap-0 pt-8">
        <p className="text-2xl font-semibold uppercase mb-8 text-white">Projects</p>

        <div className="mx-auto grid w-fit max-w-5xl grid-cols-1 justify-items-center gap-6 lg:grid-cols-2">
          {projects?.map((project) => (
            <ExpandableCard
              key={project.id}
              title={project.title}
              description={project.category ? `${project.category} Project` : "Project"} 
              src={project.image_url || fallbackImage}
            >
              <div className="flex flex-col gap-6 w-full">
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {project.tech_stack && project.tech_stack.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-zinc-900 border border-zinc-700 text-zinc-300 px-4 py-1 rounded-full text-sm font-bold"
                        >
                            {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-80 transition-opacity"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.github_url && (
                    <span className="inline-flex rounded-full bg-linear-to-tr from-[#252525] via-[#18181b] to-[#353535] p-px">
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                      >
                        <FaGithub size={16} />
                        Source Code
                      </a>
                    </span>
                  )}
                </div>
              </div>
            </ExpandableCard>
          ))}
        </div>

        {(count ?? 0) > 4 && (
          <a
            href="/projects"
            className=" flex items-center mt-2 self-center rounded-full px-6 py-3 text-md font-semibold text-zinc-400 hover:underline hover:text-white"
          >
            More Project
          </a>
        )}
      </div>
    </section>
  );
}
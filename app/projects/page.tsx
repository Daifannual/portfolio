// app/projects/page.tsx
import { supabase } from "@/lib/supabase";
import { ExpandableCard } from "@/components/ui/expandable-card";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const revalidate = 3600; // ISR cache 1 jam

export default async function AllProjectsPage() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error("Error fetching all projects:", error);

  const projects = data || [];
  const fallbackImage =
    "https://placehold.co/600x400/18181b/ffffff?text=No+Image";

  return (
    <main className="flex flex-col min-h-screen px-6 md:px-12 lg:px-20 py-12 bg-black text-white">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 w-fit"
      >
        <FaArrowLeft /> Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-2">
        All Projects
      </h1>
      <p className="text-zinc-400 mb-10">
        A collection of things I've built, designed, and experimented with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <ExpandableCard
            key={project.id}
            title={project.title}
            description={
              project.category ? `${project.category} Project` : "Project"
            }
            src={project.image_url || fallbackImage}
          >
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base font-semibold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full bg-linear-to-tr from-[#252525] via-[#18181b] to-[#353535] p-px"
                      >
                        <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                          {tech}
                        </div>
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
    </main>
  );
}

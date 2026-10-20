import { supabase } from "@/lib/supabase";

export default async function Skills() {
  const { data: skills, error } = await supabase
    .from("skills")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching skills:", error);
  }

  return (
    <section id="skills">
      <div className="flex flex-col px-6 md:px-12 lg:px-20 py-16 lg:py-20 w-full bg-black rounded-t-3xl md:rounded-t-4xl lg:gap-0">
        <p className="text-2xl font-semibold uppercase mb-4">Skills & Tools</p>

        <ul className="flex flex-wrap gap-2">
          {skills?.map((skill) => (
            <li key={skill.id} className="bg-zinc-900 border border-zinc-700 text-zinc-300 px-4 py-1 rounded-full text-sm font-bold">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

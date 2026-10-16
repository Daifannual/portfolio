import { supabase } from "@/lib/supabase";

// Sesuaikan interface dengan struktur kolom di tabel Supabase
interface ExperienceItem {
  id: string;
  company_name: string;
  role: string;
  start_date: string;
  end_date: string | null;
  description: string;
}

export default async function Experience() {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("start_date", { ascending: false });

  if (error) {
    console.error("Error fetching experiences:", error);
  }

  const experiences: ExperienceItem[] = data || [];

  return (
    <section id="experience">
      <div
        id="experience"
        className="flex flex-col px-6 md:px-12 lg:px-20 pb-12 lg:pb-20 w-full bg-black lg:gap-0"
      >
        <p className="text-2xl font-semibold uppercase mb-4">Experience</p>

        <div className="relative border-l-2 border-zinc-300 dark:border-zinc-800 ml-3 pl-8 space-y-10 w-full text-left">
          {experiences.map((item) => {
            const formatDate = (date: string) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });
            const startDate = formatDate(item.start_date);
            const endDate = item.end_date ? formatDate(item.end_date) : "Present";
            const dateString = `${startDate} - ${endDate}`;

            return (
              <div key={item.id} className="relative">
                <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-600 border-4 border-white dark:border-black" />

                <div className="flex flex-col gap-y-1">
                  <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                    {dateString}
                  </span>

                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white leading-none mt-0.5">
                    {item.company_name}
                  </h3>

                  <h4 className="text-md font-bold text-zinc-100 dark:text-zinc-300/75 mt-0.5">
                    {item.role}
                  </h4>

                  <p className="text-md font-bold leading-relaxed text-zinc-600 dark:text-[#BFBFBF] mt-2 max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import Hero from "@/components/Hero";
// import Description from "@/components/Description";
import Description from "@/components/Description";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";

export const revalidate = 3600; 

export default function Home() {
  return (
    <main className="bg-[#E9E7E7]">
      <Hero/>
      <Description />
      <Skills />
      <Experience />
      <Projects />
      <Cta />
    </main>
  );
}

//acc pull gwa bg

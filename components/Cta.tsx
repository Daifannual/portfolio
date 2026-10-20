import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Cta() {
 return (
    <section className="w-full px-6 md:px-12 lg:px-32 py-16 bg-black">
      <div className="group relative w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl mb-20">
        
        <div className="hidden lg:block absolute -left-6 -bottom-10 w-44 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 pointer-events-none group-has-[a:hover]:-translate-x-6">
          <Image
            src="https://wbexphmfxluogaiuptpp.supabase.co/storage/v1/object/public/portfolio-images/cta%201.png" 
            alt="Design Insight Preview 1"
            width={300}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex w-full max-w-xl mx-auto flex-col items-center text-center z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            UI/UX & Design Insights
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-medium mb-6 leading-relaxed">
            Catch my latest design experiments, teardowns, and UI insights daily on Instagram. Come say hi!
          </p>

          <div className="rounded-full bg-gradient-to-br from-zinc-600 via-zinc-900 to-zinc-700 p-px">
            <a
              href="https://instagram.com/deffolioo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-950 text-white font-bold text-sm transition-all transform hover:bg-zinc-950/90 shadow-lg"
            >
              <FaInstagram size={18}  />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute -right-6 -top-10 w-44 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 pointer-events-none group-has-[a:hover]:translate-x-6">
          <Image
            src="https://wbexphmfxluogaiuptpp.supabase.co/storage/v1/object/public/portfolio-images/cta%202.png" 
            alt="Design Insight Preview 2"
            width={300}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}
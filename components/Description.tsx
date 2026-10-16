import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Description() {
  return (
    <section id="description" className={spaceGrotesk.className}>
      <div className="flex flex-col w-full justify-center items-center my-6">
        <div className="flex flex-col gap-y-1 justify-center items-center  mb-2 ">
          <p className="font-bold text-zinc-400 text-center text-xs">
            CONNECT WITH ME
          </p>
          <div className="flex">
            <div className="flex items-center w-fit text-sm sm:text-md font-bold px-4 py-2 rounded-full">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                style={{ color: "#71717b" }}
              >
                <FaInstagram size={18} className="font-semibold" />
              </a>
            </div>
            <div className="flex items-center w-fit text-sm sm:text-md font-bold px-4 py-2 rounded-full">
              <a
                href="https://github.com"
                aria-label="GitHub"
                style={{ color: "#71717b" }}
              >
                <FaGithub size={18} className="font-semibold" />
              </a>
            </div>
            <div className="flex items-center w-fit text-sm sm:text-md font-bold px-4 py-2 rounded-full">
              <a
                href="https://Linkedin.com"
                aria-label="Linkedin"
                style={{ color: "#71717b" }}
              >
                <FaLinkedin size={18} className="font-semibold" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-8 md:px-12 my-12 sm:my-20">
          <p className="text-base sm:text-lg text-zinc-600 font-bold mb-6">
            I’m a Informatics Engineering student based in Malang, Indonesia. I
            enjoy creating simple, clean, and intuitive interfaces that are easy
            to understand and comfortable to use. My journey started with three
            years of studying Software Engineering at vocational high school,
            where I first explored frontend development and later developed an
            interest in UI/UX design. I’m currently pursuing a D4 in Informatics
            Engineering at Politeknik Negeri Malang, while continuing to grow my
            skills in both design and development.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLenis } from "lenis/react";
import { WordRotate } from "./ui/word-rotate";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Hero() {
  const lenis = useLenis();

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (lenis) {
      lenis.scrollTo("#projects", {
        offset: -40,
        duration: 1.2,
      });
    } else {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 md:px-12 lg:px-32 min-h-screen py-12 lg:py-0 w-full bg-white rounded-b-3xl md:rounded-b-4xl gap-10 lg:gap-0">
        <div className="w-full lg:max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold tracking-[-0.08em] mb-4 sm:mb-5">
            Daifan Nur Amali
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 font-bold mb-6 max-w-md lg:max-w-none">
            I build digital products with clean systems, clear flows, and
            interfaces that feel modern, calm, and easy to use.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8">
            <div className="bg-zinc-100 text-zinc-600 text-sm sm:text-md font-bold px-4 py-2 rounded-full">
              Malang, Indonesia
            </div>
            <div className="bg-zinc-100 text-zinc-600 text-sm sm:text-md font-bold px-4 py-2 rounded-full">
              2+ years experience
            </div>
          </div>

          <div>
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="text-black text-sm font-bold underline hover:opacity-80 transition-opacity inline-block cursor-pointer"
            >
              See my work <MdOutlineArrowOutward className="inline-block ml-2" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[52px] drop-shadow-2xl border-8 border-white rotate-6">
            <Image
              src="/img/profile.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="justify-items-center absolute top-4 -left-16 backdrop-blur-sm bg-zinc-900/65 border border-zinc-500 text-zinc-100 font-bold px-2 py-0 lg:px-4 rounded-full shadow-lg w-30 lg:w-40">
            <WordRotate
              className="text-xs sm:text-sm lg:text-base"
              words={["UIUX Designer", "Frontend Dev"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

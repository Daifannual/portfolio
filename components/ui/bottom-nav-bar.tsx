"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
} from "react-icons/fi";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", target: "#hero", icon: FiHome, width: 44 },
  { label: "About", target: "#description", icon: FiUser, width: 48 },
  { label: "Experience", target: "#experience", icon: FiBriefcase, width: 76 },
  { label: "Projects", target: "#projects", icon: FiFolder, width: 60 },
];

type BottomNavBarProps = {
  className?: string;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  stickyBottom = true,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();
  
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return; 

    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.target));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleClick = (target: string, index: number) => {
    setActiveIndex(index);

    if (!isHome) {
      router.push(`/${target}`);
      return;
    }

    if (lenis) {
      lenis.scrollTo(target, {
        offset: -40,
        duration: 1.2,
      });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-zinc-800/75 backdrop-blur-lg border border-zinc-700 rounded-full flex items-center p-1.5 shadow-xl space-x-1 w-fit",
        stickyBottom && "fixed inset-x-0 bottom-6 mx-auto z-50",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx && isHome; 

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-h-[40px] cursor-pointer",
              isActive
                ? "bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary gap-2"
                : "bg-transparent text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted gap-0",
              "focus:outline-none focus-visible:ring-0",
            )}
            onClick={() => handleClick(item.target, idx)}
            aria-label={item.label}
            type="button"
          >
            <Icon
              size={20}
              className="transition-colors duration-200 shrink-0"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${item.width}px` : "0px",
                opacity: isActive ? 1 : 0,
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 30 },
                opacity: { duration: 0.15 },
              }}
              className="overflow-hidden flex items-center"
            >
              <span
                className={cn(
                  "font-medium text-xs whitespace-nowrap select-none overflow-hidden text-ellipsis leading-none pl-1",
                  isActive ? "text-primary dark:text-primary" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
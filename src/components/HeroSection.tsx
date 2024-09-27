"use client";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { SearchBox } from "./SearchBox";
import { ParallaxScrollGallery } from "./ParallaxScrollGallery";

interface PropsHeaderText {
  text1: string;
  text2: any;
}

export function HeroSection({text1,text2}:PropsHeaderText) {

  return (
      <>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white w-full pt-[2.5rem] pb-[0.5rem] px-2 md:py-[2rem] leading-relaxed lg:leading-snug text-center"
      >
        {text1} <br/> {" "}
        <Highlight className="text-black dark:text-white">
          {text2}
        </Highlight>
      </motion.h1>
      </>
  );
}

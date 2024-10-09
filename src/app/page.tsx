"use client"
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ParallaxScrollGallery } from "@/components/ParallaxScrollGallery";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <HeroHighlight>
        <div
          className={cn(
            "rounded-md flex flex-col md:flex-row w-[100vw] flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-x-hidden",
            "h-screen"
          )}
        >
          <SidebarNav />
          <div className="w-full h-[101vh]">
            <HeroSection text1="Unleash the Art of Your Screen: Dive into a" text2="World of Stunning Wallpapers" />
            <ParallaxScrollGallery />
            <Footer />
          </div>
        </div>
      </HeroHighlight>
      
    </>
  );
}


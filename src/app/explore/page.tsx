import { ExploreWithFilters } from "@/components/ExploreWithFilters";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export default function Explore() {
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
          <div className="w-full">
            <HeroSection text1="Let's Explore and Find the Perfect One: From" text2="1.2 M+ Stunning Wallpappers" />
            <ExploreWithFilters />
            <Footer />
          </div>

        </div>
      </HeroHighlight>
    </>
  );
}

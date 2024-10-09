import { FavoriteGallery } from "@/components/FavoriteGallery";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { IconHeartFilled } from "@tabler/icons-react";

export default function Hot() {
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
            <HeroSection text1="Unleash the Art of Your Screen: Dive into a" text2="World of Stunning Wallpapers" />
            <div className="max-w-6xl m-auto px-2 py-5 md:py-1 md:px-10">
              <div className="p-2 rounded-lg bg-gradient-to-r from-slate-800 to-transparent">
                <div className="flex items-center justify-start gap-4 pb-1">
                  <IconHeartFilled stroke={2.5} className="w-6 h-6 md:w-10 md:h-10 text-red-500 stroke stroke-white" />
                  <p className="text-xl md:text-2xl text-white">Favorite</p>
                </div>
                <p className="text-sm md:text-lg text-white transition ease-in-out delay-250">Browse your Favorite images at one place.</p>
              </div>
            </div>
            <FavoriteGallery />
            <Footer />
          </div>

        </div>
      </HeroHighlight>
    </>
  );
}

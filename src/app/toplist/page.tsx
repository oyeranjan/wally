import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ImageGalleryCommon } from "@/components/ImageGalleryCommon";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { API_URL } from '@/custom-config';
import { cn } from "@/lib/utils";
import { IconDiamond } from "@tabler/icons-react";

export default function Toplist() {
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
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-700 to-transparent text-white">
                <div className="flex items-center justify-start gap-4 pb-1">
                  <IconDiamond stroke={2.5} className="w-6 h-6 md:w-10 md:h-10" />
                  <p className="text-xl md:text-2xl">Toplist</p>
                </div>
                <p className="text-sm md:text-lg transition ease-in-out delay-250">Here are the most Popular Wallpapers Uploaded within the Last Month</p>
              </div>
            </div>
            <ImageGalleryCommon queryUrl={`${API_URL}/wallpapers?categories=111&purity=110&topRange=1M&sorting=toplist&order=desc&ai_art_filter=1`} />
            <Footer />
          </div>

        </div>
      </HeroHighlight>
    </>
  );
}

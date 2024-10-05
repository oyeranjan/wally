import { Footer } from "@/components/Footer";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { IconCoffee } from "@tabler/icons-react";

export default function Contact(){
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
                <div className="max-w-6xl min-h-[65vh] mx-auto my-10">
                    <div className="breadcrumbs text-sm my-10 px-4">
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="container mx-auto px-5">
                        <h2 className="text-3xl mb-8"><strong>Contact us</strong></h2>
                        <section className="mb-8">
                            <p className="text-md mb-4">
                            For general inquiries and suggestions: <a href="mailto:hello.rajeevr@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">hello.rajeevr@gmail.com</a>
                            </p>
                        </section>

                        <section className="mb-8">
                            <p className="text-md">
                            Live chat / quick connect : <a href={"https://www.instagram.com/rajeev_raju_singh"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a> | <a href={"https://telegram.me/oyeranjan"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Telegram</a> | <a href={'https://x.com/hey_mr_rajeev'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">X (Twitter)</a>
                            </p>
                        </section>

                        <section className="mb-8">
                            <p className="text-md">
                            For copyright issues or any other issues, please email me: <a href="mailto:hello.rajeevr@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">hello.rajeevr@gmail.com</a>
                            </p>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Support my work</h2>
                            <p className="text-md mb-4">
                                If you've enjoyed using this website and appreciate the work I've put into it, your support—-no matter how big or small-—would mean the world to me. Even a single cent can make a difference! Thank you!
                            </p>
                        </section>
                        <section className="mb-8 max-w-fit">
                            <a href="https://www.buymeacoffee.com/heyrajeev" target="_blank" rel="noopener noreferrer">
                                <button className="flex bg-yellow-400 text-black italic py-2 px-4 rounded hover:bg-yellow-300 transition">
                                    Buy me a coffee <span className="ms-2 icon-tada"><IconCoffee stroke={1.5}/></span>
                                </button>
                            </a>
                        </section>
                    </div>
                </div>
                <Footer />
              </div>
    
            </div>
          </HeroHighlight>
        </>
      );
}
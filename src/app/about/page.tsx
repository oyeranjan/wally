import { Footer } from "@/components/Footer";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { IconCoffee } from "@tabler/icons-react";

export default function About(){
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
                <div className="max-w-6xl min-h-[90vh] mx-auto my-10">
                    <div className="breadcrumbs text-sm my-10 px-4">
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li>About us</li>
                        </ul>
                    </div>

                    <div className="container mx-auto px-5">
                        <h2 className="text-3xl mb-8"><strong>About us</strong></h2>
                        <section className="mb-8">
                            <p className="text-md mb-4">
                            Welcome to <strong>Wally</strong>, a platform designed to offer millions of free, high-quality wallpapers for all your devices! Whether you're looking to personalize your phone, desktop, or tablet, we've got you covered with a vast collection of wallpapers across various categories.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Who am I ?</h2>
                            <p className="text-md">
                            I'm a passionate <strong>Front-end Web Developer</strong>, and I built this website as part of my journey to learn <strong>Next.js</strong> and <strong>TypeScript</strong>. Using <strong>Wallhaven's API</strong>, I’ve designed and developed this website to provide users with an intuitive and seamless experience while browsing and downloading wallpapers.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Why I built this project ?</h2>
                            <p className="text-lg">
                            My primary goal in building this project was to dive deep into <strong>Next.js</strong> and explore its features like server-side rendering, dynamic routing, and image optimization. I also wanted to create something practical while learning, and <strong>Wally</strong> was the perfect fit for that.
                            </p>
                            <p className="text-md mt-4">
                            As a developer who believes in open collaboration, I've made this project <strong>open-source</strong>. You can find the entire codebase on my <a href="https://github.com/oyeranjan/wally"  target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Long-Term commitment</h2>
                            <p className="text-md">
                            I'm committed to maintaining and serving this website for the long term—potentially even <strong>forever</strong>. Your support will motivate me to continue improving and adding new features to <strong>Wally</strong>. If you'd like to contribute with code, ideas, or feedback, you are always welcome!
                            </p>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Support my work</h2>
                            <p className="text-md mb-4">
                                If you've enjoyed using this website and appreciate the work I've put into it, your support—-no matter how big or small-—would mean the world to me. Even a single cent can make a difference! Your contribution will help cover the ongoing costs of running this platform and inspire me to keep enhancing and maintaining it. Thank you!
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
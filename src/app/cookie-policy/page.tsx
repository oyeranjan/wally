import { Footer } from "@/components/Footer";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export default function Cookie() {
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
                                    <li>Cookie policy</li>
                                </ul>
                            </div>

                            <div className="container mx-auto px-5">
                                <h2 className="text-3xl mb-8"><strong>Cookie policy</strong></h2>
                                <section className="mb-8">
                                    <p className="text-md pb-4">
                                        Last updated: October 04, 2024
                                    </p>
                                    <p className="text-md">
                                        At <strong>Wally</strong> (https://wally.auroraoss.com), we prioritize your privacy and strive to offer a transparent experience when using our website. This Cookie Policy explains what data is stored in your browser, how we use it, and why it’s important for the functionality of the website.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Use of local storage</h2>
                                    <p className="text-md pb-4">
                                        <strong>Wally</strong> does not use cookies to track your personal data or to serve ads. Instead, we use <strong>local storage</strong> in your browser to store certain information that helps enhance your experience on the site. This data is stored locally on your device and is used for the following purposes:
                                    </p>
                                    <ul className="list-disc list-inside pb-4">
                                        <li className="text-md">
                                            <strong>Improving functionality:</strong> We store data such as your preferences and interactions with the website to provide a seamless and efficient browsing experience. This includes remembering the wallpapers you’ve viewed or liked, so you can access them easily without having to search again.
                                        </li>
                                        <li className="text-md">
                                            <strong>Performance enhancements:</strong> Local storage helps us improve the speed and responsiveness of the website by caching certain elements, reducing load times, and minimizing data usage.
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">What data do we store?</h2>
                                    <p className="text-md pb-4">
                                        The data stored in local storage is limited to information necessary to improve your user experience on <strong>Wally</strong>. This includes:
                                    </p>
                                    <ul className="list-disc list-inside pb-4">
                                        <li className="text-md">
                                            <strong>Wallpaper data:</strong> We store information about the wallpapers you interact with (such as IDs, paths, and thumbnails) to provide quick access to your favorite content.
                                        </li>
                                        <li className="text-md">
                                            <strong>User preferences:</strong> Settings or preferences that enhance your experience, such as theme choices, filters, or the layout of the website.
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Managing local storage</h2>
                                    <p className="text-md">
                                        You have control over the local storage data. You can clear your browser&apos;s local storage at any time, which will remove any stored data from <strong>Wally</strong>. However, please note that doing so may affect the functionality of certain features on the website.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">No third-party tracking</h2>
                                    <p className="text-md">
                                        We do not use any third-party cookies or trackers on <strong>Wally</strong>. All data stored in your browser is used solely to enhance the performance and user experience of our website and is not shared with any external parties.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Changes to this cookie policy</h2>
                                    <p className="text-md">
                                        We may update this Cookie Policy from time to time to reflect any changes in the way we use local storage or to align with legal requirements. Any changes will be posted on this page, and the &quot;Last updated&quot; date will be revised accordingly.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Contact us</h2>
                                    <p className="text-md">
                                        If you have any questions or concerns about this privacy policy, please <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">contact us</a>.
                                    </p>
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
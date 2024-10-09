import { Footer } from "@/components/Footer";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export default function Terms() {
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
                                    <li>Terms of use</li>
                                </ul>
                            </div>

                            <div className="container mx-auto px-5">
                                <h2 className="text-3xl mb-8"><strong>Terms of use</strong></h2>
                                <section className="mb-8">
                                    <p className="text-md mb-4">
                                        Last updated: October 04, 2024
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Content</h2>
                                    <p className="text-md pb-4">
                                        Our Service provides access to a large collection of wallpapers through the use of the Wallhaven API. We do not claim ownership of the wallpapers displayed on <strong>Wally</strong>. All wallpapers are fetched directly from Wallhaven, and we are not responsible for the content provided by Wallhaven or its accuracy, legality, or reliability.
                                    </p>
                                    <p className="text-md pb-4">
                                        <strong className="text-red-400">Warning:</strong> Some wallpapers available through Wallhaven may include content that is inappropriate for individuals under the age of 18. By using <strong>Wally</strong>, you acknowledge that certain images may be unsuitable for younger audiences and agree that you are of legal age (18 years or older) to access such content.
                                    </p>
                                    <p className="text-md">
                                        Parents or guardians are responsible for monitoring and restricting access to the Service for minors. We disclaim any responsibility for content deemed inappropriate for children or any user who accesses this content without appropriate oversight.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Accounts</h2>
                                    <p className="text-md pb-4">
                                        If you create an account on <strong>Wally</strong>, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for any and all activities or actions that occur under your account.
                                    </p>
                                    <p className="text-md">
                                        You may not use a username that is offensive, vulgar, or infringes on the rights of another person or entity.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Copyright Policy</h2>
                                    <p className="text-md">
                                        Since all content on <strong>Wally</strong> is sourced from Wallhaven, any copyright concerns should be addressed according to Wallhaven’s policies. We respect the intellectual property rights of others, and if you believe that any content on <strong>Wally</strong> infringes on your intellectual property rights, please contact Wallhaven directly to resolve the matter.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Links to Other Websites</h2>
                                    <p className="text-md">
                                        Our Service may contain links to third-party websites or services that are not owned or controlled by <strong>Wally</strong>. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that <strong>Wally</strong> shall not be liable for any damage or loss caused or alleged to be caused by or in connection with your use of any third-party websites or services.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Termination</h2>
                                    <p className="text-md pb-4">
                                        We may terminate or suspend your access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason, including a breach of the Terms.
                                    </p>
                                    <p className="text-md">
                                        If you wish to terminate your account, you may discontinue using the Service.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
                                    <p className="text-md pb-4">
                                        These Terms shall be governed and construed in accordance with the laws applicable in your jurisdiction, without regard to its conflict of law provisions.
                                    </p>
                                    <p className="text-md">
                                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions of these Terms will remain in effect.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Changes</h2>
                                    <p className="text-md pb-4">
                                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                                    </p>
                                    <p className="text-md">
                                        If you do not agree to the new terms, you are no longer authorized to use the Service.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                                    <p className="text-md">
                                        If you have any questions about these Terms, please <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">contact us</a>.
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
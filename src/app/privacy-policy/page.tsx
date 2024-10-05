import { Footer } from "@/components/Footer";
import { SidebarNav } from "@/components/SidebarNav";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export default function Privacy(){
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
                            <li>Privacy policy</li>
                        </ul>
                    </div>

                    <div className="container mx-auto px-5">
                        <h2 className="text-3xl mb-8"><strong>Privacy policy</strong></h2>
                        <section className="mb-8">
                            <p className="text-md pb-4">
                            Last updated: October 04, 2024
                            </p>
                            <p className="text-md pb-4">
                                At <strong>Wally</strong> (https://wally.auroraoss.com), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights concerning your information when you use our website.
                            </p>
                            <p className="text-md">
                                By using <strong>Wally</strong>, you agree to the collection and use of information as described in this policy. If you do not agree with this policy, please do not use the Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Information we collect</h2>
                            <p className="text-md pb-4">
                                When using <strong>Wally</strong>, we may collect certain information to enhance your experience and improve the website. The types of information we may collect include:
                            </p>
                            <ul className="list-disc list-inside pb-4">
                                <li className="text-md">Non-personal data: such as your browser type, device type, and the pages you visit.</li>
                                <li className="text-md">IP address: We may collect your IP address to monitor traffic and identify usage trends on our website.</li>
                            </ul>
                            <p className="text-md">
                                We do not collect personally identifiable information (PII) unless you voluntarily provide it (e.g., by contacting us directly).
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Use of information</h2>
                            <p className="text-md pb-4">
                                The information we collect is primarily used to:
                            </p>
                            <ul className="list-disc list-inside pb-4">
                                <li className="text-md">Improve the functionality and user experience of <strong>Wally</strong>.</li>
                                <li className="text-md">Analyze website traffic and monitor performance.</li>
                                <li className="text-md">Troubleshoot technical issues and improve overall service quality.</li>
                                <li className="text-md">Respond to inquiries or feedback from users.</li>
                            </ul>
                            <p className="text-md">
                                We do not sell, trade, or otherwise transfer your information to third parties, except when required by law or to protect our legal rights.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Third-party services</h2>
                            <p className="text-md pb-4">
                                <strong>Wally</strong> uses the <strong>Wallhaven API</strong> to provide all the wallpapers available on the site. Please be aware that <strong>Wallhaven</strong> may have its own privacy policies, and we are not responsible for their practices or content. We encourage you to review the privacy policy of <strong>Wallhaven</strong> (https://wallhaven.cc/privacy-policy) for details on how they collect and use information.
                            </p>
                            <p className="text-md">
                                Additionally, <strong>Wally</strong> may contain links to other third-party websites. We have no control over and assume no responsibility for the privacy policies or content of any third-party sites.
                            </p>
                            </section>

                            <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Data security</h2>
                            <p className="text-md">
                                We take reasonable steps to protect your data from unauthorized access, use, or disclosure. However, please note that no method of electronic transmission or storage is 100% secure, and we cannot guarantee the absolute security of your information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Children's privacy</h2>
                            <p className="text-md">
                                <strong>Wally</strong> is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will promptly take steps to remove that information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Changes to this privacy policy</h2>
                            <p className="text-md">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page, and the "Last updated" date will be revised accordingly. By continuing to use <strong>Wally</strong> after any changes to this policy are made, you agree to the updated terms.
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
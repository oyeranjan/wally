"use client";
import Logo_dark from "@/data/images/logo_dark.webp"
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconDeviceImac, IconHeartFilled, IconMoon, IconSun } from "@tabler/icons-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "next-themes"

  
export const Footer: React.FC = () => {
    const { setTheme } = useTheme()

    return(
        <>
        <footer className="footer bg-slate-100 dark:bg-base-300 text-slate-800 dark:text-base-content p-5 md:p-10">
            <aside>
                <div className="flex gap-4 mb-3 items-center">
                    <Image src={Logo_dark} alt="Wally" className="h-10 w-10 flex-shrink-0" />
                    <h2 className="font-bold text-2xl">Wally</h2>
                </div>
                <p>{`Over 1.2 Million Wallpapers - Redefine Your Screen's Look!`}</p>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    <a href="https://github.com/oyeranjan" aria-label="social.label" target="_blank" rel="noopener noreferrer"><IconBrandGithub stroke={1.5} className="text-slate-500 hover:text-slate-400" /></a>
                    <a href="https://linkedin.com/in/heyrajeev" aria-label="social.label" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin stroke={1.5} className="text-slate-500 hover:text-slate-400" /></a>
                    <a href="https://x.com/hey_mr_rajeev" aria-label="social.label" target="_blank" rel="noopener noreferrer"><IconBrandX stroke={1.5} className="text-slate-500 hover:text-slate-400" /></a>
                    <a href="https://www.instagram.com/rajeev_raju_singh" aria-label="social.label" target="_blank" rel="noopener noreferrer"><IconBrandInstagram stroke={1.5} className="text-slate-500 hover:text-slate-400" /></a>
                </div>

            </aside>
            <nav className="visible md:hidden">
                <h6 className="footer-title">More pages</h6>
                <Link href={'/toplist'} className="link link-hover">Toplist</Link>
                <Link href={'/hot'} className="link link-hover">Hot</Link>
                <Link href={'/random'} className="link link-hover">Random</Link>
            </nav>
            <nav>
                <a href={'/about'} className="link link-hover">About us</a>
                <a href={'/contact'} className="link link-hover">Contact</a>
                <p className="footer-title pt-3">Preferences</p>
                <ToggleGroup size={"sm"} type="single" defaultValue="system" className='grid grid-cols-3 border-2 border-slate-800 rounded-xl'>
                    <ToggleGroupItem value="system" aria-label="System" className='hover:bg-slate-900' data-stae='on' onClick={() => setTheme("system")}>
                        <IconDeviceImac className="p-1" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="light" aria-label="Light" className='hover:bg-slate-900' onClick={() => setTheme("light")}>
                        <IconSun className="p-1" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="dark" aria-label="Dark" className='hover:bg-slate-900' onClick={() => setTheme("dark")}>
                        <IconMoon className="p-1" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </nav>
            
            <nav>
                <a href={'/terms'} className="link link-hover">Terms of use</a>
                <a href={'/privacy-policy'} className="link link-hover">Privacy policy</a>
                <a href={'/cookie-policy'} className="link link-hover">Cookie policy</a>
            </nav>
            
        </footer>
        
        <footer className="footer footer-center bg-slate-100 dark:bg-base-300 text-slate-800 dark:text-base-content border-t-2 border-base-100 p-4 mb-[4.3rem] md:mb-0">
            <aside>
                <div className="flex">Made with <IconHeartFilled className="text-red-600 mx-2 w-5 h-5" /> in India.</div>
            </aside>
        </footer>
        </>
    )
}

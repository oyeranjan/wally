"use client";
import React from "react";
import Logo_dark from "@/data/images/logo_dark.webp"
import Image from "next/image";
import Link from "next/link";
import { IconHeartFilled } from "@tabler/icons-react";

export function Footer(){
    return(
        <>
        <footer className="footer bg-slate-100 dark:bg-base-300 text-slate-800 dark:text-base-content p-5 md:p-10">
            <aside>
                <div className="flex gap-4 mb-3 items-center">
                    <Image src={Logo_dark} alt="Wally" className="h-10 w-10 flex-shrink-0" />
                    <h2 className="font-bold text-2xl">Wally</h2>
                </div>
                <p>{`Over 1.2 Million Wallpapers - Redefine Your Screen's Look!`}</p>
            </aside>
            <nav className="visible md:hidden">
                <h6 className="footer-title">More pages</h6>
                <Link href={'/toplist'} className="link link-hover">Toplist</Link>
                <Link href={'/hot'} className="link link-hover">Hot</Link>
                <Link href={'/random'} className="link link-hover">Random</Link>
            </nav>
            <nav>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav>
            
            <nav>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
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
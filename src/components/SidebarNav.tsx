"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconSearch,
  IconTrendingUp,
  IconDiamond,
  IconArrowsShuffle,
  IconCategory2,
  IconTags,
  IconFlame,
  IconHeartFilled,
  IconUserSquare
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo_light from "@/data/images/logo_light.webp"
import Logo_dark from "@/data/images/logo_dark.webp"


export function SidebarNav() {
  const links = [
    {
      label: "Explore",
      href: "/explore",
      icon: (
        <IconSearch className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Latest",
      href: "/latest",
      icon: (
        <IconTrendingUp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Toplist",
      href: "/toplist",
      icon: (
        <IconDiamond className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
        label: "Hot",
        href: '/hot',
        icon: (
            <IconFlame className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        )
    },
    {
      label: "Random",
      href: "/random",
      icon: (
        <IconArrowsShuffle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Category",
      href: "/category",
      icon: (
        <IconCategory2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Favorite",
      href: "/favorite",
      icon: (
        <IconHeartFilled className="text-red-600 dark:text-red-500 h-5 w-5 flex-shrink-0" />
      ),
    }
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 sticky top-0">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* <div>
            <SidebarLink
              link={{
                label: "Login",
                href: "#",
                icon: (
                  <IconUserSquare className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
                ),
              }}
            />
          </div> */}
        </SidebarBody>
      </Sidebar>
    </>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={Logo_dark} alt="Wally" className="h-6 w-6 flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Wally
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={Logo_dark} alt="Wally" className="h-6 w-6 flex-shrink-0" />
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
    </Link>
  );
};

// Dummy dashboard component with content
export const DummyDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center text-center mt-[2rem]">
      {[...new Array(12)].map((_, index) => (
        <div
          key={"first-array" + index}
          className="shadow rounded-md p-4 max-w-sm w-full max-full mx-auto">
          <div className="animate-pulse space-x-4">
            <div className="h-40 bg-slate-700 rounded space-y-6 py-1"></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};


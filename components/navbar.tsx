"use client";

import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import MobileSidebar from "@/components/mobile-sidebar";

const pop = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />

        <Link href={"/"} className="md:block hidden">
          <h1
            className={cn(
              "text-xl md:text-2xl font-bold text-primary",
              pop.className
            )}
          >
            companion.AI
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        <Button size={"sm"} variant={"premium"}>
          Upgrade
          <Sparkles className="h-4 w-4 ml-2 text-white" fill="white" />
        </Button>

        <ThemeToggle />

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const pop = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MenuIcon className="md:hidden block" />

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
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;

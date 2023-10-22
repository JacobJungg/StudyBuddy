"use client";

//Global Imports
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Kanit } from "next/font/google";

//Local Imports
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "./mode-toggle";


const font = Kanit({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}
//                <<Menu className="block md:hidden" />>
export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">          
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary", 
                        font.className
                    )}>
                        StudyBuddy
                    </h1>
                </Link>
            </div>

            <div className="flex items-center gap-x-3">


                <ModeToggle />        
                <UserButton />

                </div>    
                </div>       

    );
};
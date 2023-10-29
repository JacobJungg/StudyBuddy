/**
 * StudyBuddy Jacob Jung
 * Creating Navbar
 */

"use client";


import { Home, FileText, MenuSquare, Settings,  } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


//Global Imports
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Comfortaa } from "next/font/google";
import { BookOpenText   } from "lucide-react";

//Local Imports
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "./mode-toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const font = Comfortaa({ weight: "600", subsets: ["latin"] });
export const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();


  const onNavigate = (url: string) => {
    return router.push(url);
  }












  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 ">
      <div className="flex items-center">          
        <MobileSidebar />
        <Link href="/">
          <h1 className={cn("hidden md:flex text-xl md:text-3xl font-bold text-primary", font.className)}>
            <span className="flex items-center">
              <BookOpenText  /> 
              <span className="ml-0">
                StudyBuddy
              </span>
            </span>
          </h1>
        </Link>
      </div>



      <div className="flex flex-col h-full text-primary bg-secondary rounded-lg"> 
        <div className=" flex-1 flex flex-wrap justify-center">     
          <div className="flex h-full flex-row space-x-2">

          <HoverCard>
            <HoverCardTrigger>
              <div
                onClick={() => onNavigate('/')}
                className={cn(
                  "text-muted-foreground text-xs group flex p-3 h-full w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  pathname === '/' && "bg-primary/10 text-primary"
                )}
              >
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  <Home className="h-5 w-5" />
                </div>
              </div>
            </HoverCardTrigger>
              <HoverCardContent>
                Home
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/flashcards')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === '/flashcards' && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <MenuSquare className="h-5 w-5" />
              </div>
            </div>
            </HoverCardTrigger>
              <HoverCardContent>
                Flashcards
            </HoverCardContent>
          </HoverCard>


          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/quizzes')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === '/quizzes' && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <FileText className="h-5 w-5" />
              </div>
            </div>
            </HoverCardTrigger>
              <HoverCardContent>
                Quizzes
            </HoverCardContent>
          </HoverCard>


          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/chatbot')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === '/chatbot' && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <BookOpenText className="h-5 w-5" />
              </div>
            </div>
            </HoverCardTrigger>
              <HoverCardContent>
                ChatBot
            </HoverCardContent>
          </HoverCard>


          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/settings')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === '/settings' && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <Settings className="h-5 w-5" />
              </div>
            </div>
            </HoverCardTrigger>
              <HoverCardContent>
                Settings
            </HoverCardContent>
          </HoverCard>


          </div>
        </div>
      </div>








            <div className="flex items-center gap-x-3">
                <ModeToggle />        
                <UserButton />
            </div>    
        </div>       

    );
};
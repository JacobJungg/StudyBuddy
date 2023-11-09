
"use client";


import { FileText, MenuSquare, Settings,  } from "lucide-react";
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




export const Dashboardbutton = () => {

  const pathname = usePathname();
  const router = useRouter();


  const onNavigate = (url: string) => {
    return router.push(url);
  }












  return (
    <div className="fixed inset-x-0 top-1/2 transform -translate-y-1/2 z-50 py-2 px-4 h-16 flex justify-center">
      <div className="flex h-full ">
        <div className="flex-1 flex flex-wrap justify-center">
          <div className="flex flex-row space-x-2">



          
          <div
  onClick={() => onNavigate('/flashcards')}
  className={cn("w-60 text-primary bg-secondary rounded-lg")}
  style={{ height: '100px' }}
>
          
          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/flashcards')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition h-full ",
                pathname === '/flashcards' && "bg-primary/10 text-primary"
              )}
            >
                
                <div class="flex flex-col h-full w-full justify-center items-center bg-secondary">
                  <div class="flex items-center justify-center h-1/2 w-full">
                    <MenuSquare className="h-5 w-5" />
                  </div>
                  <div class="flex items-center justify-center h-1/2 w-full">
                    <p class="text-1xl text-center">Practise with flashcards</p>
                  </div>
                </div>
              </div>
           
            </HoverCardTrigger>
              <HoverCardContent>
                Cards
            </HoverCardContent>
          </HoverCard>
          </div>

          </div>

          <div className="w-60 text-primary bg-secondary rounded-lg">
          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/quizzes')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition h-full ",
                pathname === '/quizzes' && "bg-primary/10 text-primary"
              )}
            >
              <div class="flex flex-col h-full w-full justify-center items-center bg-secondary">
                  <div class="flex items-center justify-center h-1/2 w-full">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div class="flex items-center justify-center h-1/2 w-full">
                    <p class="text-1xl text-center">Test your knowledge with quizzes</p>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
              <HoverCardContent>
                Quizzes
            </HoverCardContent>
          </HoverCard>

 </div>
 <div className="w-60 text-primary bg-secondary rounded-lg">
          <HoverCard>
            <HoverCardTrigger>
            <div
              onClick={() => onNavigate('/chatbot')}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition h-full ",
                pathname === '/chatbot' && "bg-primary/10 text-primary"
              )}
            >
              <div class="flex flex-col h-full w-full justify-center items-center bg-secondary">
                  <div class="flex items-center justify-center h-1/2 w-full">
                    <BookOpenText className="h-5 w-5" />
                  </div>
                  <div class="flex items-center justify-center h-1/2 w-full">
                    <p class="text-1xl text-center">Talk to an AI</p>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
              <HoverCardContent>
                ChatBot
            </HoverCardContent>
          </HoverCard>



          </div>
          </div>
        </div>
      </div>       

    );
}; 

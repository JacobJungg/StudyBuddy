/**
 * StudyBuddy Jacob Jung
 * Layout for main page
 * 
 * @param sidebar Calling from @/components/navbar
 * @param navbar Calling from @/components/sidebar
 * @return main page layout
 */
import { MessagesSquare    } from "lucide-react";
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { ChatClient } from "@/components/chat/main-chat";

const RootLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {

  //Navbar fill 100% vertical space of parent container
  //Sidebar being set to fill horizontal space and disapear
  //when on smaller screens eg.mobile
  return ( 
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
      <Sidebar />
      </div>
      <main className="md:pl-20 pt-16 h-full">
      {children} 
      <div className="fixed bottom-4 right-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger><MessagesSquare/></MenubarTrigger>
          <MenubarContent>
            <div className="h-full p-4 space-y-2">
              <ChatClient />
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar> 
      </div>  
        
        
        
      </main>
    </div>
   );
}
 
export default RootLayout;
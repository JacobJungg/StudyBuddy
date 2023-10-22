/**
 * StudyBuddy Jacob Jung
 * Layout for main page
 * 
 * @param sidebar Calling from @/components/navbar
 * @param navbar Calling from @/components/sidebar
 * @return main page layout
 */

import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar";


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
      </main>
    </div>
   );
}
 
export default RootLayout;
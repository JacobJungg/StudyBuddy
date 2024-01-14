/**
 * StudyBuddy Jacob Jung
 * Layout for main page
 * Setting Navbar, Sidebar and ChatBot as they
 * will be the same on every page. Calling "chidlren"
 * from whichever page is in use. Children will fill
 * the pages content.
 */

import { Navbar } from "@/components/mainstructure/navbar"
const RootLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {

  //Navbar fill 100% vertical space of parent container
  //Sidebar being set to fill horizontal space and disapear
  //when on smaller screens eg.mobile

//<div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
//  <Sidebar />
//</div>
  return ( 
    <div className="h-full">
      <Navbar />
      <main className="md:pl-20 pr-10 pt-16 h-full">
        {children} 
      </main>
    </div>
   );
}
 
export default RootLayout;
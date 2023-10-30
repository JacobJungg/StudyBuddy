/**
 * StudyBuddy Jacob Jung
 * 
 * Landing page if havnt signed in
 * Add clerk form for sign up in middle of screen
 * Will redirect to [[...sign-in]] or [[...sign-up]]
 */

import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
      <Sidebar />
      </div>
      <main className="md:pl-10 pr-10 pt-16 h-full">
        <div className="flex justify-center items-center h-full">
          {children}
        </div>
      </main>
    </div>
   );
}
 
export default AuthLayout;
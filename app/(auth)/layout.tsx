/**
 * StudyBuddy Jacob Jung
 * Centers contents in folder (SignUp and SignIn)
 */

const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
    //Centers
      <div className="flex justify-center items-center h-full">
        {children}
      </div>
     );
  }
   
  export default AuthLayout;
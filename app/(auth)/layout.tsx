import { ModeToggle } from "@/components/mode-toggle";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-1/2">
      </div>
      <div className="h-full w-1/2 flex justify-center items-center bg-secondary">
      <div
          className="absolute top-4 right-4 bg-secondary text-white py-2 px-4 rounded"
         >

          <ModeToggle />
        </div>
        
        
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

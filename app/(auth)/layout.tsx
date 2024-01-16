
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-1/2" style={{ background: "linear-gradient(135deg, #FFA500, #FF6347)" }}>
      <div className="absolute bottom-10 left-10 text-left">
          <h2 className="text-5xl font-bold text-white">StudyBuddy</h2>
          <p className="text-4xl text-white">Dive Into Learning</p>
        </div>
      </div>
      
      <div className="h-full w-1/2 flex justify-center items-center bg-white">
     
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

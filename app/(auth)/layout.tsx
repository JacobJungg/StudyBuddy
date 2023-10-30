
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-1/2">
      </div>
      <div className="h-full w-1/2 flex justify-center items-center bg-secondary">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

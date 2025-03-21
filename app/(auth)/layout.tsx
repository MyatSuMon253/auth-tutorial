const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-sky-500">
      {children}
    </div>
  );
};

export default AuthLayout;

import Logo from "@/shared/components/Logo";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <nav className="relative z-20 container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Logo asLink />
        {children && <div>{children}</div>}
      </div>
    </nav>
  );
};

export default Navbar;

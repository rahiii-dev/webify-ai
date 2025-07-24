import Logo from "@components/Logo";

const Navbar = () => {
  return (
    <nav className="relative z-20 container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Logo asLink />
      </div>
    </nav>
  );
};

export default Navbar;

import { Outlet } from "react-router-dom";
import Navbar from "@/modules/landing/components/Navbar";
import Footer from "@/modules/landing/components/Footer";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "@/shared/components/ui/button";
import GoToDashboardButton from "@/modules/dashboard/components/GoToDashboardButton";

const RootLayout = () => {

  return (
    <div className="bg-gradient-to-br from-background via-background to-ai-primary/10 min-h-screen flex flex-col relative z-10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 z-0" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-ai-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-secondary/20 rounded-full blur-3xl z-0" />

      <Navbar>
        <div className="flex items-center gap-2">
          <SignedIn>
            <GoToDashboardButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </Navbar>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

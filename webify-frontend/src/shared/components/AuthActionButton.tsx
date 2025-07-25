import { useUser, SignInButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Button, type ButtonProps } from "@/shared/components/ui/button";

interface AuthActionButtonProps extends ButtonProps {
  children: React.ReactNode;
  to: string;
  redirect?: boolean;
}

export const AuthActionButton = ({
  children,
  to,
  redirect,
  ...props
}: AuthActionButtonProps) => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return (
      <Button {...props} onClick={() => navigate(to)}>
        {children}
      </Button>
    );
  }

  return (
    <SignInButton mode="modal" forceRedirectUrl={redirect ? to : undefined}>
      <Button {...props}>
        {children}
      </Button>
    </SignInButton>
  );
};

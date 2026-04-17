"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";

import AppleLogo from "./logos/apple-logo";
import GithubLogo from "./logos/github-logo";
import GoogleLogo from "./logos/google-logo";

type Props = {
  provider: "google" | "github" | "apple";
  className?: string;
  signUp?: boolean;
};

const SignInOauthButton = ({ provider, className, signUp = false }: Props) => {
  const [isPending, setIsPending] = useState(false);

  const handleClick = async () => {
    setIsPending(true);
    try {
      await signIn.social({
        provider,
        callbackURL: "/dashboard",
        errorCallbackURL: "/sign-in/error",
      });
    } catch (error) {
      toast.error("Failed to sign in");
    } finally {
      setIsPending(false);
    }
  };

  const action = signUp ? "Sign up with" : "Login with";

  const providerLogo = {
    apple: <AppleLogo />,
    google: <GoogleLogo />,
    github: <GithubLogo />,
  };

  const providerText = {
    apple: "Apple",
    google: "Google",
    github: "GitHub",
  };

  return (
    <Button
      variant="outline"
      type="button"
      onClick={handleClick}
      className={className}
      disabled={isPending}
    >
      {providerLogo[provider]}
      {action} {providerText[provider]}
    </Button>
  );
};

export default SignInOauthButton;

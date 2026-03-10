"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import { Button } from "../ui/button";
import { ROUTES } from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    " min-h-12 flex-1 cursor-pointer w-full rounded-2 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);

      toast.error("Sign-in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
        style: {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          border: "1px solid #f5c6cb",
        },
      });
    }
  };
  return (
    <div className="mt-10 w-full">
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain "
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;

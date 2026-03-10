import React, { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <section className="min-w-full max-w-4xl rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="font-bold text-lg">Join LeParlement</h1>
            <p className="text-sm text-neutral-500">
              To post your articles and share your thoughts with the world
            </p>
          </div>
        </div>

        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;

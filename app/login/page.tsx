"use client";

import { logInAction } from "@/lib/actions";
import SignInButton from "./sign-in-button";

export default function Login() {
  return (
    <form
      action={logInAction}
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-md space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Welcome back
          </h1>
          <p className="text-muted-foreground">
            Sign in with your Google account to access your account.
          </p>
        </div>
        <div className="space-y-4">
          <SignInButton />
        </div>
      </div>
    </form>
  );
}

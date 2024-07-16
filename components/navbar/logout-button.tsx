"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { logOutAction } from "@/lib/actions";

export default function LogoutButton() {
  return (
    <form action={logOutAction}>
      <Button variant="ghost" size="icon" className="rounded-full">
        <LogOutIcon className="h-6 w-6" />
        <span className="sr-only">Logout</span>
      </Button>
    </form>
  );
}

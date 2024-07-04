import { LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function LogoutButton() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <LogOutIcon className="h-6 w-6" />
      <span className="sr-only">Logout</span>
    </Button>
  );
}

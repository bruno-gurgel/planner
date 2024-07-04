import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import LogoutButton from "./logout-button";

export default function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Planner</h1>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            Study Topics
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            Reading List
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            Calendar
          </Link>

          <ThemeToggle />

          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}

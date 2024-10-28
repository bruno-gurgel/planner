import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";
import LogoutButton from "./logout-button";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">Planner</h1>
        </Link>
        {session ? (
          <nav className="flex items-center gap-4">
            <Link href="/courses" className="hover:text-primary-foreground/80">
              Courses
            </Link>
            <Link href="/reading" className="hover:text-primary-foreground/80">
              Books
            </Link>

            <ThemeToggle />

            <LogoutButton />
          </nav>
        ) : null}
      </div>
    </header>
  );
}

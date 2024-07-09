"use client";

import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import {
  deleteCourseAction,
  markCourseAsDone,
  markCourseAsNotDone,
} from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function StudyingActions({
  id,
  done = false,
}: {
  id: number;
  done?: boolean;
}) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={`/courses/edit/${id}`}>Edit</Link>
        </DropdownMenuItem>

        {done ? (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={async () => {
              await markCourseAsNotDone(id);

              router.refresh();
            }}
          >
            Mark as Not Done
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={async () => {
              await markCourseAsDone(id);

              router.refresh();
            }}
          >
            Mark as Done
          </DropdownMenuItem>
        )}

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await deleteCourseAction(id);

            router.refresh();
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

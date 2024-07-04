"use client";

import { Settings } from "lucide-react";

import Link from "next/link";
import { deleteBookAction, markBookAsDone } from "@/lib/actions";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function ReadingActions({
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
          <Link href={`/reading/edit/${id}`}>Edit</Link>
        </DropdownMenuItem>

        {done ? null : (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={async () => {
              await markBookAsDone(id);

              router.refresh();
            }}
          >
            Mark as Done
          </DropdownMenuItem>
        )}

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await deleteBookAction(id);

            router.refresh();
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

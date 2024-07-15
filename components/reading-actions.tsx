"use client";

import { Settings } from "lucide-react";

import Link from "next/link";
import {
  deleteBookAction,
  markBookAsDone,
  markBookAsNotDone,
  startBook,
} from "@/lib/actions";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import TagsForm from "./tags-form";

export default function ReadingActions({
  id,
  done = false,
  notStarted = false,
  tags,
  name,
}: {
  id: number;
  done?: boolean;
  notStarted?: boolean;
  tags: string[];
  name: string;
}) {
  const router = useRouter();

  const action = (() => {
    if (done) {
      return (
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await markBookAsNotDone(id);

            router.refresh();
          }}
        >
          Mark as Not Done
        </DropdownMenuItem>
      );
    } else if (notStarted) {
      return (
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await startBook(id);

            router.refresh();
          }}
        >
          Mark as Started
        </DropdownMenuItem>
      );
    } else {
      return (
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await markBookAsDone(id);

            router.refresh();
          }}
        >
          Mark as Done
        </DropdownMenuItem>
      );
    }
  })();

  return (
    <Dialog>
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

          {action}

          <DialogTrigger className="w-full">
            <DropdownMenuItem className="cursor-pointer">Tags</DropdownMenuItem>
          </DialogTrigger>

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

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Add, edit, or delete tags to help organize your books.
          </DialogDescription>
        </DialogHeader>

        <TagsForm initialTags={tags} type="book" id={id} />
      </DialogContent>
    </Dialog>
  );
}

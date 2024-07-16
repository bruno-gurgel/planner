"use client";

import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import {
  deleteCourseAction,
  markCourseAsDone,
  markCourseAsNotDone,
  startCourse,
} from "@/lib/actions";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TagsForm from "../tags/tags-form";
import { Courses } from "@prisma/client";

export default function StudyingActions({
  id,
  done = false,
  notStarted = false,
  tags,
  name,
}: {
  id: number;
  done?: boolean;
  notStarted?: boolean;
  tags: Courses["tags"];
  name: string;
}) {
  const router = useRouter();

  const action = (() => {
    if (done) {
      return (
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () => {
            await markCourseAsNotDone(id);

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
            await startCourse(id);

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
            await markCourseAsDone(id);

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
            <Link href={`/courses/edit/${id}`}>Edit</Link>
          </DropdownMenuItem>

          {action}

          <DialogTrigger className="w-full">
            <DropdownMenuItem className="cursor-pointer">Tags</DropdownMenuItem>
          </DialogTrigger>

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

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Add, edit, or delete tags to help organize your courses.
          </DialogDescription>
        </DialogHeader>

        <TagsForm initialTags={tags} type="course" id={id} />
      </DialogContent>
    </Dialog>
  );
}

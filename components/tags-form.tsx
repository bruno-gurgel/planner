"use client";

import { useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Courses } from "@prisma/client";
import { LoadingSpinner } from "./ui/loading-spinner";
import { addTagAction, deleteTagAction, editTagAction } from "@/lib/actions";
import TagLine from "./tag-line";
import { useRouter } from "next/navigation";

export default function TagsForm({
  initialTags,
  type,
  id,
}: {
  initialTags: Courses["tags"];
  type: "course" | "book";
  id: number;
}) {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const addTag = () => {
    if (newTag.trim() !== "") {
      startTransition(() => {
        addTagAction(type, id, newTag.trim()).then((success) => {
          console.log({ success });
          if (success) {
            setTags([...tags, newTag.trim()]);
            setNewTag("");

            router.refresh();
          }
        });
      });
    }
  };

  const editTag = (index: number, newValue: string) => {
    const updatedTags = [...tags];
    updatedTags[index] = newValue.trim();

    startTransition(() => {
      editTagAction(type, id, updatedTags).then((success) => {
        if (success) {
          setTags(updatedTags);

          router.refresh();
        }
      });
    });
  };
  const deleteTag = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);

    startTransition(() => {
      deleteTagAction(type, id, updatedTags).then((success) => {
        if (success) {
          setTags(updatedTags);

          router.refresh();
        }
      });
    });
  };

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4">
        <Input
          placeholder="Add new tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTag();
            }
          }}
        />
        <Button onClick={addTag}>Add</Button>
      </div>
      <div className="grid gap-2">
        {isPending ? (
          <LoadingSpinner className="w-10 h-10 mx-auto" />
        ) : (
          tags.map((tag, index) => (
            <TagLine
              key={tag}
              tag={tag}
              editTag={editTag}
              deleteTag={deleteTag}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

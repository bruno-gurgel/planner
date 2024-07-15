"use client";

import { Check, Pencil, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useTransition } from "react";
import { LoadingSpinner } from "./ui/loading-spinner";

export default function TagLine({
  tag,
  editTag,
  deleteTag,
  index,
}: {
  tag: string;
  editTag: (index: number, newValue: string) => void;
  deleteTag: (index: number) => void;
  index: number;
}) {
  const [value, setValue] = useState(tag);
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
          <Pencil className="w-4 h-4" />
          <span className="sr-only">Edit tag</span>
        </Button>
        {isEditing ? (
          <>
            <Input value={value} onChange={(e) => setValue(e.target.value)} />

            {isPending ? (
              <LoadingSpinner className="w-5 h-5" />
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  startTransition(() => {
                    editTag(index, value);
                  });

                  setIsEditing(false);
                }}
              >
                <Check className="w-4 h-4" />
                <span className="sr-only">Save tag</span>
              </Button>
            )}
          </>
        ) : (
          <span>{tag}</span>
        )}
      </div>
      <Button variant="ghost" size="icon" onClick={() => deleteTag(index)}>
        <X className="w-4 h-4" />
        <span className="sr-only">Delete tag</span>
      </Button>
    </div>
  );
}

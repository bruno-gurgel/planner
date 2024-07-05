"use client";

import { Reminders } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import { formatDate } from "@/lib/utils";
import { toggleReminderAction } from "@/lib/actions";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

export default function ReminderLine({
  reminder,
  redirectTo,
}: {
  reminder: Reminders;
  redirectTo: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
      {isPending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Checkbox
          checked={reminder.done}
          onCheckedChange={() =>
            startTransition(
              async () =>
                await toggleReminderAction(
                  reminder.id,
                  !reminder.done,
                  redirectTo
                )
            )
          }
        />
      )}
      <div>
        <h3 className="text-lg font-medium">{reminder.title}</h3>
        {reminder.dueDate ? (
          <p className="text-muted-foreground">
            Due {formatDate(reminder.dueDate)}
          </p>
        ) : null}
      </div>
    </div>
  );
}

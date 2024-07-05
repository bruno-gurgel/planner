import { getPreviewRemindersDTO } from "@/data/reminders-dto";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { createReminderAction } from "@/lib/actions";
import { DatePicker } from "../ui/date-picker";
import ReminderLine from "../reminder-line";

export default async function Reminders() {
  const reminders = await getPreviewRemindersDTO();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <ReminderLine
              key={reminder.id}
              reminder={reminder}
              redirectTo="/"
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="d-flex flex-col gap-4 items-start">
        <form action={createReminderAction}>
          <div className="flex items-center gap-2">
            <Input placeholder="Add a new reminder" name="title" required />
            <DatePicker name="dueDate" placeholder="Due date" />
            <Button>Add</Button>
          </div>
        </form>

        <Button asChild>
          <Link href="/reminders">View All</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

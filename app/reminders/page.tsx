import ReminderLine from "@/components/reminder-line";
import { getRemindersDTO } from "@/data/reminders-dto";

export default async function Reminders() {
  const { todos, done } = await getRemindersDTO();
  return (
    <div>
      <div className="grid gap-4">
        <div>
          <h3 className="text-lg font-medium">To-Do</h3>
          <div className="space-y-2">
            {todos.map((todo) => (
              <ReminderLine
                key={todo.id}
                reminder={todo}
                redirectTo="/reminders"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">Done</h3>
          <div className="space-y-2">
            {done.map((todo) => (
              <ReminderLine
                key={todo.id}
                reminder={todo}
                redirectTo="/reminders"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

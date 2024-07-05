import "server-only";
import { getCurrentUser } from "./auth";

import prisma from "@/lib/db";
import { Reminders } from "@prisma/client";

export async function getPreviewRemindersDTO(): Promise<Reminders[]> {
  const currentUser = await getCurrentUser();

  // Find the current reading (if it exists)
  const reminders = await prisma.reminders.findMany({
    where: {
      userId: currentUser.id,
      done: false,
    },
  });

  return reminders;
}

export async function getRemindersDTO(): Promise<{
  todos: Reminders[];
  done: Reminders[];
}> {
  const currentUser = await getCurrentUser();

  const todos = await prisma.reminders.findMany({
    where: {
      userId: currentUser.id,
      done: false,
    },
  });

  const done = await prisma.reminders.findMany({
    where: {
      userId: currentUser.id,
      done: true,
    },
  });

  return {
    todos,
    done,
  };
}

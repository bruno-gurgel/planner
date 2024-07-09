"use server";

import { signIn, signOut } from "@/auth";
import prisma from "./db";
import { getCurrentUser } from "@/data/auth";
import { redirect } from "next/navigation";

export async function logInAction() {
  return signIn("google");
}

export async function logOutAction() {
  return signOut({ redirectTo: "/login" });
}

export async function createCourseAction(formData: FormData) {
  const name = formData.get("name") as string;
  const author = formData.get("author") as string | null;
  const platform = formData.get("platform") as string | null;
  const startedAt = formData.get("startedAt") as string | null;
  const doneAt = formData.get("doneAt") as string | null;

  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    await prisma.courses.create({
      data: {
        name,
        author,
        platform,
        startedAt: startedAt ? new Date(startedAt) : null,
        doneAt: doneAt ? new Date(doneAt) : null,
        userId: currentUser.id,
      },
    });

    success = true;
  } catch (error) {
    success = false;
  }

  if (success) {
    redirect("/");
  }
}

export async function updateCourseAction(id: number, formData: FormData) {
  const name = formData.get("name") as string;
  const author = formData.get("author") as string | null;
  const platform = formData.get("platform") as string | null;
  const startedAt = formData.get("startedAt") as string | null;
  const doneAt = (formData.get("doneAt") as string | null) || null;

  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    const result = await prisma.courses.update({
      where: {
        id,
      },
      data: {
        name,
        author,
        platform,
        startedAt: startedAt ? new Date(startedAt) : null,
        doneAt: doneAt ? new Date(doneAt) : null,
        userId: currentUser.id,
      },
    });

    success = true;
  } catch (error) {
    success = false;
  }

  if (success) {
    redirect("/");
  }
}

export async function markCourseAsDone(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.courses.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      doneAt: new Date(),
    },
  });
}

export async function markCourseAsNotDone(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.courses.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      doneAt: null,
    },
  });
}

export async function deleteCourseAction(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.courses.delete({
    where: {
      id,
      userId: currentUser.id,
    },
  });
}

/* BOOKS */

export async function createBookAction(formData: FormData) {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const startedAt = formData.get("startedAt") as string | null;
  const doneAt = formData.get("doneAt") as string | null;

  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    await prisma.books.create({
      data: {
        title,
        author,
        startedAt: startedAt ? new Date(startedAt) : null,
        doneAt: doneAt ? new Date(doneAt) : null,
        userId: currentUser.id,
      },
    });

    success = true;
  } catch (error) {
    success = false;
  }

  if (success) {
    redirect("/");
  }
}

export async function updateBookAction(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const startedAt = formData.get("startedAt") as string | null;
  const doneAt = formData.get("doneAt") as string | null;

  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    await prisma.books.update({
      where: {
        id,
      },
      data: {
        title,
        author,
        startedAt: startedAt ? new Date(startedAt) : null,
        doneAt: doneAt ? new Date(doneAt) : null,
        userId: currentUser.id,
      },
    });

    success = true;
  } catch (error) {
    success = false;
  }

  if (success) {
    redirect("/");
  }
}

export async function markBookAsDone(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.books.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      doneAt: new Date(),
    },
  });
}

export async function markBookAsNotDone(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.books.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      doneAt: null,
    },
  });
}

export async function deleteBookAction(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.books.delete({
    where: {
      id,
      userId: currentUser.id,
    },
  });
}

/* REMINDERS */
export async function createReminderAction(formData: FormData) {
  const title = formData.get("title") as string;
  const dueDate = formData.get("dueDate") as string | null;

  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    await prisma.reminders.create({
      data: {
        title,
        dueDate: dueDate ? new Date(dueDate) : null,
        userId: currentUser.id,
      },
    });

    success = true;
  } catch (error) {
    success = false;
  }

  if (success) {
    redirect("/");
  }
}

export async function toggleReminderAction(
  id: number,
  done: boolean,
  redirectTo: string
) {
  const currentUser = await getCurrentUser();

  await prisma.reminders.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      done: {
        set: done,
      },
    },
  });

  redirect(redirectTo);
}

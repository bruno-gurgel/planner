import "server-only";
import { getCurrentUser } from "./auth";

import prisma from "@/lib/db";
import { Books } from "@prisma/client";

export async function getBookByIdDTO(id: number): Promise<Books> {
  return await prisma.books.findUniqueOrThrow({
    where: {
      id,
    },
  });
}

export async function getPreviewBooksDTO(): Promise<{
  current: Books[];
  next: Books[];
}> {
  const currentUser = await getCurrentUser();

  // Find the current reading (if it exists)
  const currentReading = await prisma.books.findMany({
    where: {
      userId: currentUser.id,
      startedAt: {
        not: null,
      },
      doneAt: null,
    },
    orderBy: {
      startedAt: "asc",
    },
  });

  // Find up to 3 subjects that are TO_READ
  const toStudySubjects = await prisma.books.findMany({
    where: {
      userId: currentUser.id,
      startedAt: null,
      doneAt: null,
    },
    take: 3, // Limit to 3 records
    orderBy: {
      order: "asc",
    },
  });

  return {
    current: currentReading,
    next: toStudySubjects,
  };
}

export async function getBooksDTO(): Promise<{
  read: Books[];
  current: Books[];
  next: Books[];
}> {
  // Don't pass values, read back cached values, also solves context and easier to make it lazy

  const currentUser = await getCurrentUser();

  const read = await prisma.books.findMany({
    where: {
      userId: currentUser.id,
      doneAt: {
        not: null,
      },
    },
  });

  const currentReading = await prisma.books.findMany({
    where: {
      userId: currentUser.id,
      startedAt: {
        not: null,
      },
      doneAt: null,
    },
  });

  const toStudy = await prisma.books.findMany({
    where: {
      userId: currentUser.id,
      startedAt: null,
      doneAt: null,
    },
  });

  return {
    read,
    current: currentReading,
    next: toStudy,
  };
}

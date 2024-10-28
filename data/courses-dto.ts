import "server-only";
import { getCurrentUser } from "./auth";
import { Courses } from "@prisma/client";
import prisma from "@/lib/db";

export async function getCourseByIdDTO(id: number): Promise<Courses> {
  return await prisma.courses.findUniqueOrThrow({
    where: {
      id,
    },
  });
}

export async function getPreviewCoursesDTO(): Promise<{
  current: Courses[];
  next: Courses[];
}> {
  const currentUser = await getCurrentUser();

  // Find the current reading (if it exists)
  const currentReading = await prisma.courses.findMany({
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

  // Find up to 3 subjects that are TO_STUDY
  const toStudySubjects = await prisma.courses.findMany({
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

  console.log({ currentReading, toStudySubjects });

  return {
    current: currentReading,
    next: toStudySubjects,
  };
}

export async function getCoursesDTO(): Promise<{
  read: Courses[];
  current: Courses[];
  next: Courses[];
}> {
  // Don't pass values, read back cached values, also solves context and easier to make it lazy

  const currentUser = await getCurrentUser();

  const read = await prisma.courses.findMany({
    where: {
      userId: currentUser.id,
      doneAt: {
        not: null,
      },
    },
  });

  const currentReading = await prisma.courses.findMany({
    where: {
      userId: currentUser.id,
      startedAt: {
        not: null,
      },
      doneAt: null,
    },
    orderBy: { order: "asc" },
  });

  const toStudy = await prisma.courses.findMany({
    where: {
      userId: currentUser.id,
      startedAt: null,
      doneAt: null,
    },
    orderBy: { order: "asc" },
  });

  return {
    read,
    current: currentReading,
    next: toStudy,
  };
}

export async function addCourseTagsDTO(
  courseId: number,
  tags: Courses["tags"]
): Promise<void> {
  await prisma.courses.update({
    where: {
      id: courseId,
    },
    data: {
      tags: tags,
    },
  });
}

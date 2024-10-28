"use server";

import { signIn, signOut } from "@/auth";
import prisma from "./db";
import { getCurrentUser } from "@/data/auth";
import { redirect } from "next/navigation";
import { Books, Courses, Prisma } from "@prisma/client";

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
  const tags = (formData.get("tags") as string) || "";
  const startedAt = formData.get("startedAt") as string | null;
  const doneAt = formData.get("doneAt") as string | null;

  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    const lastItem = await prisma.courses.findFirst({
      orderBy: {
        order: "desc",
      },
    });

    await prisma.courses.create({
      data: {
        name,
        author,
        platform,
        startedAt: startedAt ? new Date(startedAt) : null,
        doneAt: doneAt ? new Date(doneAt) : null,
        userId: currentUser.id,
        tags: tags.split(",").map((tag) => tag.trim()),
        order: lastItem ? lastItem.order + 1 : 0,
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

export async function startCourse(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.courses.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      startedAt: new Date(),
    },
  });
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

  const removedItem = await prisma.courses.findUnique({
    where: { id },
  });

  if (!removedItem) {
    return;
  }

  await prisma.courses.delete({
    where: {
      id,
      userId: currentUser.id,
    },
  });

  await prisma.courses.updateMany({
    where: {
      order: { gt: removedItem.order },
    },
    data: {
      order: { decrement: 1 },
    },
  });
}

export async function updateCoursesOrder(courses: Courses[]) {
  const transactions: Prisma.Prisma__CoursesClient<Courses>[] = [];
  courses.forEach(async (course) => {
    transactions.push(
      prisma.courses.update({
        where: {
          id: course.id,
        },
        data: {
          order: course.order,
        },
      })
    );
  });

  await prisma.$transaction(transactions);
}

/* BOOKS */

export async function createBookAction(formData: FormData) {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const startedAt = formData.get("startedAt") as string | null;
  const doneAt = formData.get("doneAt") as string | null;
  const tags = (formData.get("tags") as string) || "";

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
        tags: tags.split(",").map((tag) => tag.trim()),
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
  const tags = (formData.get("tags") as string) || "";

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
        tags: tags.split(",").map((tag) => tag.trim()),
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

export async function startBook(id: number) {
  const currentUser = await getCurrentUser();

  await prisma.books.update({
    where: {
      id,
      userId: currentUser.id,
    },
    data: {
      startedAt: new Date(),
    },
  });
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

export async function updateBooksOrder(books: Books[]) {
  const transactions: Prisma.Prisma__BooksClient<Books>[] = [];
  books.forEach(async (book) => {
    transactions.push(
      prisma.books.update({
        where: {
          id: book.id,
        },
        data: {
          order: book.order,
        },
      })
    );
  });

  await prisma.$transaction(transactions);
}

/* TAGS */

export async function addTagAction(
  type: "course" | "book",
  id: number,
  tag: string
) {
  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    if (type === "course") {
      await prisma.courses.update({
        where: {
          id,
          userId: currentUser.id,
        },
        data: {
          tags: {
            push: tag,
          },
        },
      });
    } else {
      await prisma.books.update({
        where: {
          id,
          userId: currentUser.id,
        },
        data: {
          tags: {
            push: tag,
          },
        },
      });
    }

    success = true;
  } catch (error) {
    success = false;
  }

  return success;
}

export async function editTagAction(
  type: "course" | "book",
  id: number,
  tags: string[]
) {
  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    if (type === "course") {
      await prisma.courses.update({
        where: {
          id,
          userId: currentUser.id,
        },
        data: {
          tags,
        },
      });
    } else {
      await prisma.books.update({
        where: {
          id,
          userId: currentUser.id,
        },
        data: {
          tags,
        },
      });
    }

    success = true;
  } catch (error) {
    success = false;
  }

  return success;
}

export async function deleteTagAction(
  type: "course" | "book",
  id: number,
  tags: string[]
) {
  const currentUser = await getCurrentUser();

  // Send the data to the server
  let success = false;
  try {
    if (type === "course") {
      await prisma.courses.update({
        where: {
          id,
          userId: currentUser.id,
        },
        data: {
          tags,
        },
      });
    } else {
      await prisma.books.update({
        where: {
          id,
          userId: currentUser.id,
        },
        data: {
          tags,
        },
      });
    }

    success = true;
  } catch (error) {
    success = false;
  }

  return success;
}

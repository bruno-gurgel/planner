/*
  Warnings:

  - You are about to drop the `Reading` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Studying` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reading" DROP CONSTRAINT "Reading_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Studying" DROP CONSTRAINT "Studying_user_id_fkey";

-- DropTable
DROP TABLE "Reading";

-- DropTable
DROP TABLE "Studying";

-- DropEnum
DROP TYPE "ReadingStatus";

-- DropEnum
DROP TYPE "StudyingStatus";

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "doneAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT,
    "platform" TEXT,
    "user_id" TEXT NOT NULL,
    "doneAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

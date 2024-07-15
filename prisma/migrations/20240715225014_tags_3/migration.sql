/*
  Warnings:

  - You are about to drop the `BookTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookTag" DROP CONSTRAINT "BookTag_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BookTag" DROP CONSTRAINT "BookTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "CourseTag" DROP CONSTRAINT "CourseTag_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseTag" DROP CONSTRAINT "CourseTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_user_id_fkey";

-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "BookTag";

-- DropTable
DROP TABLE "CourseTag";

-- DropTable
DROP TABLE "Tag";

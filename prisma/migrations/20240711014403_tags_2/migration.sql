/*
  Warnings:

  - You are about to drop the column `coursesId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_coursesId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "coursesId";

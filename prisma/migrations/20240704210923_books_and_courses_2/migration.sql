/*
  Warnings:

  - You are about to drop the column `name` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `title` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Made the column `author` on table `Books` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `name` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" DROP COLUMN "name",
DROP COLUMN "platform",
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "author" SET NOT NULL;

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "platform" TEXT,
ALTER COLUMN "author" DROP NOT NULL;

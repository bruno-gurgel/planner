/*
  Warnings:

  - You are about to drop the column `subject` on the `Studying` table. All the data in the column will be lost.
  - Added the required column `name` to the `Studying` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Studying" DROP COLUMN "subject",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "platform" TEXT;

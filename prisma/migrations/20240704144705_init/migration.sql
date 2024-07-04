-- CreateEnum
CREATE TYPE "ReadingStatus" AS ENUM ('CURRENT', 'READ', 'TO_READ');

-- CreateEnum
CREATE TYPE "StudyingStatus" AS ENUM ('CURRENT', 'STUDIED', 'TO_STUDY');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT,
    "status" "ReadingStatus" NOT NULL,

    CONSTRAINT "Reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Studying" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "status" "StudyingStatus" NOT NULL,

    CONSTRAINT "Studying_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

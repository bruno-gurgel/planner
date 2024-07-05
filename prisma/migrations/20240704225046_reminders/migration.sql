-- CreateTable
CREATE TABLE "Reminders" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reminders" ADD CONSTRAINT "Reminders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

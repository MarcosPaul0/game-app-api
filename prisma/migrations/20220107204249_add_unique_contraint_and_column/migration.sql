/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `refresh_token` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `refresh_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refresh_token" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_email_key" ON "refresh_token"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

/*
  Warnings:

  - You are about to drop the column `expiresIn` on the `refresh_token` table. All the data in the column will be lost.
  - Added the required column `expires_in` to the `refresh_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refresh_token" DROP COLUMN "expiresIn",
ADD COLUMN     "expires_in" INTEGER NOT NULL;

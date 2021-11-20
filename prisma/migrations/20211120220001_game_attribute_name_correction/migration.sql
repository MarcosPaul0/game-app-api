/*
  Warnings:

  - You are about to drop the column `development` on the `games` table. All the data in the column will be lost.
  - Added the required column `developer` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_development_fkey";

-- AlterTable
ALTER TABLE "games" DROP COLUMN "development",
ADD COLUMN     "developer" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_developer_fkey" FOREIGN KEY ("developer") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

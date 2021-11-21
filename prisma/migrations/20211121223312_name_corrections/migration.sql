/*
  Warnings:

  - You are about to drop the column `avaliation_id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the `avaliations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `assessment_id` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "avaliations" DROP CONSTRAINT "avaliations_game_id_fkey";

-- DropForeignKey
ALTER TABLE "avaliations" DROP CONSTRAINT "avaliations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_avaliation_id_fkey";

-- AlterTable
ALTER TABLE "likes" DROP COLUMN "avaliation_id",
ADD COLUMN     "assessment_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "avaliations";

-- CreateTable
CREATE TABLE "assessmentss" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,

    CONSTRAINT "assessmentss_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "assessmentss" ADD CONSTRAINT "assessmentss_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessmentss" ADD CONSTRAINT "assessmentss_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_assessment_id_fkey" FOREIGN KEY ("assessment_id") REFERENCES "assessmentss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

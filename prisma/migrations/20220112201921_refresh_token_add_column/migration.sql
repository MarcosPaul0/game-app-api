/*
  Warnings:

  - Added the required column `is_developer` to the `refresh_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refresh_token" ADD COLUMN     "is_developer" BOOLEAN NOT NULL;

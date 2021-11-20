-- AlterTable
ALTER TABLE "games" ALTER COLUMN "cover_url" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar_url" SET DEFAULT E'';

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_development_fkey" FOREIGN KEY ("development") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

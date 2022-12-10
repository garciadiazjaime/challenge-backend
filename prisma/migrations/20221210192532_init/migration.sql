-- AlterTable
ALTER TABLE "Hacker" ADD COLUMN "status" TEXT DEFAULT 'pending';

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN "status" TEXT DEFAULT 'pending';

-- AlterTable
ALTER TABLE "Partner" ADD COLUMN "status" TEXT DEFAULT 'pending';

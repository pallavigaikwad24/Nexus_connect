-- AlterTable
ALTER TABLE "UserContact" ADD COLUMN     "linkedUserId" TEXT;

-- AddForeignKey
ALTER TABLE "UserContact" ADD CONSTRAINT "UserContact_linkedUserId_fkey" FOREIGN KEY ("linkedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `countryCode` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."User_mobile_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "countryCode" TEXT NOT NULL;

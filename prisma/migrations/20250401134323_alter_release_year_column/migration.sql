/*
  Warnings:

  - You are about to drop the column `realeaseyear` on the `animes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "animes" DROP COLUMN "realeaseyear",
ADD COLUMN     "realeaseYear" INTEGER;

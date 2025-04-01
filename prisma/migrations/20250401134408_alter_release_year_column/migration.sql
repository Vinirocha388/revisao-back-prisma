/*
  Warnings:

  - You are about to drop the column `realeaseYear` on the `animes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "animes" DROP COLUMN "realeaseYear",
ADD COLUMN     "releaseYear" INTEGER;

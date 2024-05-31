/*
  Warnings:

  - The `solution` column on the `datagame24` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "datagame24" DROP COLUMN "solution",
ADD COLUMN     "solution" TEXT[];

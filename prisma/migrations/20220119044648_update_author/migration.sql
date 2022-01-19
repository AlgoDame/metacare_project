/*
  Warnings:

  - You are about to drop the column `ip_address` on the `CommentModel` table. All the data in the column will be lost.
  - Added the required column `author` to the `CommentModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentModel" DROP COLUMN "ip_address",
ADD COLUMN     "author" TEXT NOT NULL;

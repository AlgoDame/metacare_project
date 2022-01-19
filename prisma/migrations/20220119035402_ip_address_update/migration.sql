/*
  Warnings:

  - Added the required column `ip_address` to the `CommentModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentModel" ADD COLUMN     "ip_address" TEXT NOT NULL;

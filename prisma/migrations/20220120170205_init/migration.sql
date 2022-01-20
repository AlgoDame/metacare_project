-- CreateTable
CREATE TABLE "CommentModel" (
    "id" TEXT NOT NULL,
    "episode_id" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommentModel_pkey" PRIMARY KEY ("id")
);

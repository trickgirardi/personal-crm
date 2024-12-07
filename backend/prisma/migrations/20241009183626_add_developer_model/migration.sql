-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Developer_id_key" ON "Developer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Developer_email_key" ON "Developer"("email");

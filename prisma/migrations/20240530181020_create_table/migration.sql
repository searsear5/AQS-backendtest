-- CreateTable
CREATE TABLE "datagame24" (
    "number" INTEGER NOT NULL,
    "solution" TEXT NOT NULL,

    CONSTRAINT "datagame24_pkey" PRIMARY KEY ("number")
);

-- CreateIndex
CREATE UNIQUE INDEX "datagame24_number_key" ON "datagame24"("number");

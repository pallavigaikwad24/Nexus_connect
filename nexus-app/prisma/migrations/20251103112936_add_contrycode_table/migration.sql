-- CreateTable
CREATE TABLE "CountryCode" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CountryCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountryCode_countryName_key" ON "CountryCode"("countryName");

-- CreateIndex
CREATE UNIQUE INDEX "CountryCode_countryCode_key" ON "CountryCode"("countryCode");

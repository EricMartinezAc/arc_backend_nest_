-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "psw" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "credits" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 0,
    "createdAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" TIMESTAMP(3) NOT NULL,
    "updatedAtnew" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "Nationality" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "martialStatus" TEXT NOT NULL,
    "kWords" TEXT NOT NULL,
    "createdAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "psw" TEXT NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "idPreson" INTEGER NOT NULL,
    "createdAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_email_key" ON "Product"("email");

-- CreateIndex
CREATE INDEX "Product_state_idx" ON "Product"("state");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Person_contact_key" ON "Person"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Person_kWords_key" ON "Person"("kWords");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idPreson_fkey" FOREIGN KEY ("idPreson") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

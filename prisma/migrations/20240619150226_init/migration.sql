-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "psw" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "credits" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 0,
    "createdAd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Product_state_idx" ON "Product"("state");

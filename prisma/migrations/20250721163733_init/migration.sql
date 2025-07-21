-- CreateTable
CREATE TABLE "Denuncia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vinculo" TEXT NOT NULL,
    "tipoVinculo" TEXT,
    "denuncia" TEXT NOT NULL,
    "departamento" TEXT,
    "identificacao" TEXT,
    "anonimo" BOOLEAN NOT NULL,
    "nome" TEXT,
    "contacto" TEXT,
    "email" TEXT,
    "fotoPath" TEXT,
    "anexoPath" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nif" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nif_key" ON "User"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

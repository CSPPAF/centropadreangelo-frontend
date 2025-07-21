import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const hashed = await bcrypt.hash("qQQ!000p_?83", 10)

  const admin = await prisma.user.create({
    data: {
      name: "Administrador",
      nif: "218773358", // login será com este NIF
      email: "qualidade@centropadreangelo.pt",
      password: hashed,
      role: "admin",
    },
  })

  console.log("Admin criado com sucesso:", admin)
}

main().finally(() => prisma.$disconnect())
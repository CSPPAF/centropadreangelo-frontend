import type { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || "segredo-super-seguro"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Método não permitido" })

  const { token, novaSenha } = req.body

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }

    const hashed = await bcrypt.hash(novaSenha, 10)

    await prisma.user.update({
      where: { id: decoded.userId },
      data: { password: hashed },
    })

    res.status(200).json({ message: "Senha redefinida com sucesso" })
  } catch (err) {
    console.error("Erro ao redefinir senha:", err)
    res.status(400).json({ message: "Token inválido ou expirado" })
  }
}
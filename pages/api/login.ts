import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || "segredo-super-seguro"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Método não permitido" })

  const { nif, password } = req.body

  const user = await prisma.user.findUnique({ where: { nif } })
  if (!user) return res.status(401).json({ message: "Credenciais inválidas" })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ message: "Credenciais inválidas" })

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" })

  res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/; Max-Age=86400`)

  res.status(200).json({ message: "Login com sucesso" })
}
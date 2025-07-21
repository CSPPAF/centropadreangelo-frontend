import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || "segredo-super-seguro"
const BASE_URL = process.env.BASE_URL || "http://localhost:3000"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Método não permitido" })

  const { email } = req.body

  if (!email) return res.status(400).json({ message: "Email é obrigatório" })

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) return res.status(200).json({ message: "Se o email existir, enviaremos instruções." })

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "15m" })

  const resetLink = `${BASE_URL}/redefinir-senha?token=${token}`

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // ou outro serviço
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // no .env
      pass: process.env.EMAIL_PASS, // no .env
    },
  })

  await transporter.sendMail({
    from: `"Centro Padre Ângelo" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Recuperação de senha",
    html: `
      <p>Olá ${user.name},</p>
      <p>Clique no link abaixo para redefinir a sua palavra-passe:</p>
      <a href="${resetLink}" target="_blank">${resetLink}</a>
      <p>Este link expira em 15 minutos.</p>
    `,
  })

  res.status(200).json({ message: "Se o email existir, enviaremos instruções." })
}
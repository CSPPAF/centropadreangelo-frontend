import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import formidable, { File } from "formidable"
import fs from "fs"
import path from "path"

// Desativa o bodyParser do Next.js para permitir form-data
export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), "/public/uploads"),
    keepExtensions: true,
  })

  // Garante que a pasta /uploads existe
  fs.mkdirSync(path.join(process.cwd(), "/public/uploads"), { recursive: true })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Erro ao processar formulário:", err)
      return res.status(500).json({ message: "Erro ao processar formulário" })
    }

    try {
      const {
        vinculo,
        tipoVinculo,
        denuncia,
        departamento,
        identificacao,
        anonimo,
        nome,
        contacto,
        email,
      } = fields

      const fotoFile = files.foto as File | undefined
      const anexoFile = files.anexo as File | undefined

      const fotoPath = fotoFile ? `/uploads/${path.basename(fotoFile.filepath)}` : null
      const anexoPath = anexoFile ? `/uploads/${path.basename(anexoFile.filepath)}` : null

      const novaDenuncia = await prisma.denuncia.create({
        data: {
          vinculo: String(vinculo),
          tipoVinculo: tipoVinculo ? String(tipoVinculo) : null,
          denuncia: String(denuncia),
          departamento: departamento ? String(departamento) : null,
          identificacao: identificacao ? String(identificacao) : null,
          anonimo: anonimo === "true" || anonimo === true,
          nome: anonimo === "true" ? null : nome ? String(nome) : null,
          contacto: anonimo === "true" ? null : contacto ? String(contacto) : null,
          email: anonimo === "true" ? null : email ? String(email) : null,
          fotoPath,
          anexoPath,
        },
      })

      return res.status(200).json(novaDenuncia)
    } catch (error) {
      console.error("Erro ao guardar denúncia:", error)
      return res.status(500).json({ message: "Erro ao guardar denúncia" })
    }
  })
}
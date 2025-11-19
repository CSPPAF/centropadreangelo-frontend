import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, File } from "formidable";
import fs from "fs";
import path from "path";
import { encrypt } from "@/lib/crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Garante que a pasta /uploads existe
  fs.mkdirSync(path.join(process.cwd(), "/public/uploads"), { recursive: true });

  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), "/public/uploads"),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Erro ao processar formulário:", err);
      return res.status(500).json({ message: "Erro ao processar formulário" });
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
      } = fields;

      const fotoFile = files.foto as File | undefined;
      const anexoFile = files.anexo as File | undefined;

      const fotoPath = fotoFile ? `/uploads/${path.basename(fotoFile.filepath)}` : null;
      const anexoPath = anexoFile ? `/uploads/${path.basename(anexoFile.filepath)}` : null;
	  // Normaliza anonimo para uma string ou boolean coerente
	  const anonimoValueRaw = Array.isArray(anonimo) ? anonimo[0] : anonimo;
	  const anonimoValue = anonimoValueRaw === "true" || anonimoValueRaw === true;
	  
	  // Normaliza "anonimo" para boolean
	  let anonimoValue = false;

	  if (Array.isArray(anonimo)) {
	    anonimoValue = anonimo[0] === "true";
	  } else if (typeof anonimo === "string") {
	    anonimoValue = anonimo === "true";
	  }

      const novaDenuncia = await prisma.denuncia.create({
        data: {
          vinculo: String(vinculo),
          tipoVinculo: tipoVinculo ? String(tipoVinculo) : null,
          denuncia: String(denuncia),
          departamento: departamento ? String(departamento) : null,
          identificacao: identificacao ? encrypt(String(identificacao)) : null,
          anonimo: anonimoValue,
		  nome: anonimoValue ? null : nome ? encrypt(String(nome)) : null,
		  contacto: anonimoValue ? null : contacto ? encrypt(String(contacto)) : null,
		  email: anonimoValue ? null : email ? encrypt(String(email)) : null,
          fotoPath,
          anexoPath,
        },
      });

      return res.status(200).json(novaDenuncia);
    } catch (error) {
      console.error("Erro ao guardar denúncia:", error);
      return res.status(500).json({ message: "Erro ao guardar denúncia" });
    }
  });
}
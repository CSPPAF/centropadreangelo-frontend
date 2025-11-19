import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // podes mudar para outro serviço se quiseres
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email para o centro
    await transporter.sendMail({
      from: `"Centro Padre Ângelo" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
	  replyTo: 'no-reply@centropadreangelo.pt', // impedir resposta
      subject: `Nova denúncia`,
      html: `
        <p>Foi submetida uma denúncia no site da instituição.</p>
      `,
    })

    return res.status(200).json({ message: 'Emails enviados com sucesso' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao enviar o email' })
  }
}
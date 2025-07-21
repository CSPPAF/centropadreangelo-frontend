import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const { nome, email, assunto, mensagem } = req.body

  if (!nome || !email || !assunto || !mensagem) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' })
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
      subject: `Novo contacto: ${assunto}`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `,
    })

    // Email para o utilizador (confirmação)
    await transporter.sendMail({
	  from: `"Centro Padre Ângelo" <${process.env.EMAIL_USER}>`,
	  to: email,
	  replyTo: 'no-reply@centropadreangelo.pt', // impedir resposta
	  subject: 'Recebemos o seu contacto',
	  html: `
		<p>Estimado(a) ${nome},</p>
		<p>O <strong>Centro Social Paroquial Padre Ângelo Ferreira Pinto</strong> agradece o seu contacto.</p>
		<p>Passamos a indicar os dados fornecidos através do formulário:</p>
		<p><strong>Nome:</strong> ${nome}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Assunto:</strong> ${assunto}</p>
		<p><strong>Mensagem:</strong><br/>${mensagem}</p>
		<p>Por favor aguarde um contacto da nossa parte nas próximas 24 a 72 horas.</p>
		<p>Este email foi enviado por um formulário de contacto em Centro Social Paroquial Padre Ângelo Ferreira Pinto https://centropadreangelo.pt</p>
	  `,
	})

    return res.status(200).json({ message: 'Emails enviados com sucesso' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao enviar o email' })
  }
}
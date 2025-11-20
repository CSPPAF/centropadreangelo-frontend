import type { NextApiRequest, NextApiResponse } from 'next'
import { IncomingForm, File } from 'formidable'
import nodemailer from 'nodemailer'
import fs from 'fs'

// Desativa o body parser de Next.js
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const form = new IncomingForm({ keepExtensions: true })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Erro ao fazer parse do form:', err)
      return res.status(500).json({ message: 'Erro no envio do formulário' })
    }

    const { nomecompleto, nascimento, email, telefone, cargo, apresentacao } = fields
    const rawCurriculo = files.curriculo
    let curriculo: File | undefined

    if (Array.isArray(rawCurriculo)) {
      curriculo = rawCurriculo[0]
    } else {
      curriculo = rawCurriculo as File | undefined
    }

    if (
      !nomecompleto || !nascimento || !email ||
      !telefone || !cargo || !apresentacao || !curriculo
    ) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' })
    }

    const filepath = (curriculo as File).filepath || (curriculo as any).path

    if (!filepath || !fs.existsSync(filepath)) {
      return res.status(400).json({ message: 'Ficheiro inválido ou não encontrado' })
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

      // Enviar para o centro com anexo
      await transporter.sendMail({
        from: `"Centro Padre Ângelo" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: 'no-reply@centropadreangelo.pt',
        subject: `Nova Candidatura Espontânea: ${cargo}`,
        html: `
          <p><strong>Nome Completo:</strong> ${nomecompleto}</p>
          <p><strong>Data de nascimento:</strong> ${nascimento}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contacto Telefónico:</strong> ${telefone}</p>
          <p><strong>Cargo a que se candidata:</strong> ${cargo}</p>
          <p><strong>Apresentação:</strong> ${apresentacao}</p>
        `,
        attachments: [
          {
            filename: curriculo.originalFilename || 'cv.pdf',
            content: fs.createReadStream(filepath),
          },
        ],
      })

      // Resposta ao candidato
      await transporter.sendMail({
        from: `"Centro Padre Ângelo" <${process.env.EMAIL_USER}>`,
        to: email,
        replyTo: 'no-reply@centropadreangelo.pt',
        subject: 'Recebemos a sua Candidatura Espontânea',
        html: `
          <p>Cara/o ${nomecompleto},</p>
          <p>Acusamos a receção da sua candidatura e agradecemos o seu interesse em fazer parte da nossa equipa.</p>
          <p>Todos os CVs são analisados e considerados quando surge uma nova oportunidade. Assim que tal aconteça será contactada/o através dos dados que forneceu no formulário.</p>
          <p>A apresentação de candidatura a emprego é confidencial.</p>
          <p>Informamos que os dados fornecidos no seu CV, serão guardados na nossa base de dados durante 5 anos, apenas para efeitos de avaliação do seu curriculum para possível preenchimento de vagas.</p>
          <p>Os dados que ora nos deu a conhecer serão tratados, por meios automatizados ou não, nos termos previstos na política de privacidade.</p>
          <p>Caso não deseje a conservação da sua documentação, pode recusa-lo respondendo para o e-mail contabilidade@centropadreangelo.pt, em conformidade com a Lei nº 67/98 de Proteção de Dados Pessoais e de acordo com o Regulamento (UE) 2016/679 Do Parlamento Europeu e do Conselho de 27 de Abril de 2016.</p>
          <p>Se quiser desistir da Candidatura, deve enviar e-mail para contabilidade@centropadreangelo.pt.</p>
          
          <p>Com os melhores cumprimentos,</p>
          
          <p>Centro Social Paroquial Padre Ângelo Ferreira Pinto,</p>

          <hr />
          <p>A sua candidatura:</p>
          <p><strong>Nome Completo:</strong> ${nomecompleto}</p>
          <p><strong>Data de nascimento:</strong> ${nascimento}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contacto Telefónico:</strong> ${telefone}</p>
          <p><strong>Cargo a que se candidata:</strong> ${cargo}</p>
          <p><strong>Apresentação:</strong> ${apresentacao}</p>
          <p>Este email foi enviado por um formulário de contacto em Centro Social Paroquial Padre Ângelo Ferreira Pinto https://centropadreangelo.pt</p>
        `,
      })

      return res.status(200).json({ message: 'Emails enviados com sucesso' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      return res.status(500).json({ message: 'Erro ao enviar email' })
    }
  })
}
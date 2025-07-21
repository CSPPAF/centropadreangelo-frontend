import type { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apagar o cookie com o token
  res.setHeader("Set-Cookie", serialize("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // Expira imediatamente
  }))

  return res.status(200).json({ message: "Logout efetuado com sucesso" })
}
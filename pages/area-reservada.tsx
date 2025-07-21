import jwt from "jsonwebtoken"
import type { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useState } from "react"

type Props = {
  user: {
    userId: number
    role: string
  }
}

export default function AreaReservada({ user }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    await fetch("/api/logout")
    router.push("/")
  }

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Bem-vindo, {user.role === "admin" ? "Administrador" : "Utilizador"}
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "A terminar sessão..." : "Terminar Sessão"}
      </button>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token || ""

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "segredo-super-seguro")
    return { props: { user: decoded } }
  } catch (err) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }
}
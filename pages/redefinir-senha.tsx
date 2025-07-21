import { useState } from "react"
import { useRouter } from "next/router"

export default function RedefinirSenha() {
  const [novaSenha, setNovaSenha] = useState("")
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState("")
  const router = useRouter()
  const { token } = router.query

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/redefinir-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, novaSenha }),
    })

    if (res.ok) {
      setSucesso(true)
      setErro("")
    } else {
      const { message } = await res.json()
      setErro(message || "Erro ao redefinir senha")
    }
  }

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Redefinir Senha</h1>

      {sucesso ? (
        <div className="text-green-600">Senha redefinida com sucesso. Pode agora iniciar sessão.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Nova Palavra-passe"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            className="w-full border p-2"
            required
          />
          {erro && <p className="text-red-600">{erro}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Redefinir Senha
          </button>
        </form>
      )}
    </main>
  )
}
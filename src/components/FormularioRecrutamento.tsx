"use client"
import { useState } from "react"

export default function FormularioRecrutamento() {
  const [nomecompleto, setNomecompleto] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cargo, setCargo] = useState("")
  const [apresentacao, setApresentacao] = useState("")
  const [curriculo, setCurriculo] = useState<File | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    if (!curriculo) {
      alert("Por favor selecione um ficheiro PDF.")
      setStatus("error")
      return
    }

    if (curriculo.size > 2 * 1024 * 1024) {
      alert("O ficheiro deve ter no máximo 2MB.")
      setStatus("error")
      return
    }

    try {
      const formData = new FormData()
      formData.append("nomecompleto", nomecompleto)
      formData.append("nascimento", nascimento)
      formData.append("email", email)
      formData.append("telefone", telefone)
      formData.append("cargo", cargo)
      formData.append("apresentacao", apresentacao)
      formData.append("curriculo", curriculo)

      const res = await fetch("/api/recrutamento", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) throw new Error("Erro no envio")

      setStatus("success")
      // limpar campos
      setNomecompleto("")
      setNascimento("")
      setEmail("")
      setTelefone("")
      setCargo("")
      setApresentacao("")
      setCurriculo(null)
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div>
        <label className="block font-medium">Nome Completo</label>
        <input
          type="text"
          value={nomecompleto}
          onChange={(e) => setNomecompleto(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Data de nascimento</label>
        <input
          type="date"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Contacto telefónico</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Cargo a que se candidata</label>
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Curriculum Vitae (PDF, até 2MB)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setCurriculo(e.target.files?.[0] || null)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium">Apresentação</label>
        <textarea
          value={apresentacao}
          onChange={(e) => setApresentacao(e.target.value)}
          required
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <p className="mt-1 text-xs text-gray-600">
          Faça uma breve apresentação sua, bem como as razões da sua candidatura e porque devemos escolhê-lo(a) de entre os outros candidatos.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Mensagem enviada com sucesso!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Erro ao enviar. Verifique os dados e tente novamente.</p>
      )}
    </form>
  )
}
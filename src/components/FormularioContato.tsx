import { useState } from 'react'

export default function FormularioContato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, assunto, mensagem }),
      })

      if (!res.ok) throw new Error('Erro no envio')

      setStatus('success')
      setNome('')
      setEmail('')
      setAssunto('')
      setMensagem('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
	
	  <div>
        <label className="block font-medium">Nome</label>
        <input
          type="text"
		  placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
	  
	  <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
		  placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
	  
	  <div>
        <label className="block font-medium">Assunto</label>
        <input
          type="text"
		  placeholder="Assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
	  
	  <div>
        <label className="block font-medium">Mensagem</label>
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
		
      </div>
	  
	  <button
		type="submit"
		disabled={status === 'loading'}
		className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
	  >
		{status === 'loading' ? 'Enviando...' : 'Enviar'}
	  </button>

	  {status === 'success' && (
		<p className="text-green-600">Mensagem enviada com sucesso!</p>
	  )}
	  {status === 'error' && (
		<p className="text-red-600">Erro ao enviar mensagem. Tente novamente.</p>
	  )}
    </form>
  )
}
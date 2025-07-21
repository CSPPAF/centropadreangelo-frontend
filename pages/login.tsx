import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Login() {
  const [nif, setNif] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nif, password }),
    })
    setLoading(false)
    res.ok ? router.push("/area-reservada") : alert("Credenciais inválidas")
  }

  return (
    <main className="min-h-screen bg-blue-700 flex items-center justify-center px-4">
      <Card className="w-[40%] min-w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100">
        <CardHeader className="flex flex-col items-center text-center py-8 bg-white">
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="rounded-full shadow-md mb-4"
          />
          <CardTitle className="text-2xl font-semibold text-gray-800">Área Reservada</CardTitle>
          <p className="text-sm text-gray-500 mt-1">Acesso exclusivo a colaboradores</p>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="nif" className="text-gray-700">NIF</Label>
              <Input
                id="nif"
                type="text"
                placeholder="123456789"
                value={nif}
                onChange={e => setNif(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700">Palavra-passe</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loading}
            >
              {loading ? "A entrar..." : "Entrar"}
            </Button>
          </form>

          <div className="text-center pt-4">
            <a
              href="/recuperar-senha"
              className="text-sm text-blue-600 hover:underline"
            >
              Esqueceu a palavra-passe?
            </a>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

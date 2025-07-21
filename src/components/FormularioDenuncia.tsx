"use client"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import PoliticaPrivacidade from "./PoliticaPrivacidade"

export default function FormularioDenuncia() {
  const [anonimo, setAnonimo] = useState(true)
  const [form, setForm] = useState({
    vinculo: "",
    tipoVinculo: "",
    denuncia: "",
    departamento: "",
    identificacao: "",
    nome: "",
    contacto: "",
    email: "",
  })

  // Refs para os inputs de ficheiro
  const fotoRef = useRef<HTMLInputElement>(null)
  const anexoRef = useRef<HTMLInputElement>(null)

  const handleChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()

    // Adiciona campos de texto
    Object.entries(form).forEach(([key, value]) => {
      if (!anonimo || (key !== "nome" && key !== "contacto" && key !== "email")) {
        formData.append(key, value)
      }
    })
    formData.append("anonimo", anonimo.toString())

    // Adiciona ficheiros
    if (fotoRef.current?.files?.[0]) {
      formData.append("foto", fotoRef.current.files[0])
    }
    if (anexoRef.current?.files?.[0]) {
      formData.append("anexo", anexoRef.current.files[0])
    }

    try {
      const res = await fetch("/api/denuncia", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        alert("Denúncia enviada com sucesso!")

        // Limpa formulário
        setForm({
          vinculo: "",
          tipoVinculo: "",
          denuncia: "",
          departamento: "",
          identificacao: "",
          nome: "",
          contacto: "",
          email: "",
        })
        setAnonimo(true)

        if (fotoRef.current) fotoRef.current.value = ""
        if (anexoRef.current) anexoRef.current.value = ""
      } else {
        alert("Erro ao enviar denúncia.")
      }
    } catch (error) {
      console.error("Erro ao comunicar com servidor:", error)
      alert("Erro ao comunicar com o servidor.")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-600 underline hover:text-blue-800 transition">formulário</button>
      </DialogTrigger>
      <DialogContent className="!w-full !max-w-7xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Formulário de Denúncia</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-800" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div>
			  <Label htmlFor="foto">Foto</Label>
			  <Input id="foto" name="foto" type="file" ref={fotoRef} />
			</div>

			<div>
			  <Label htmlFor="anexo">Anexo</Label>
			  <Input id="anexo" name="anexo" type="file" ref={anexoRef} />
			 </div>
		  </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Trabalha no Centro Padre Ângelo?</Label>
              <Select onValueChange={(value) => handleChange("vinculo", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sim">Sim</SelectItem>
                  <SelectItem value="Não">Não</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tipo de vínculo</Label>
              <Select onValueChange={(value) => handleChange("tipoVinculo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Colaborador">Colaborador/a</SelectItem>
                  <SelectItem value="Fornecedor">Fornecedor/a</SelectItem>
                  <SelectItem value="Prestador de Serviços">Prestador de Serviços</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="denuncia">Digite a sua denúncia *</Label>
            <Textarea
              id="denuncia"
              name="denuncia"
              required
              value={form.denuncia}
              onChange={(e) => handleChange("denuncia", e.target.value)}
              placeholder="Escreva aqui a denúncia..."
            />
          </div>
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			  <div>
				<Label>Área do assunto</Label>
				<Select onValueChange={(value) => handleChange("departamento", value)}>
				  <SelectTrigger>
					<SelectValue placeholder="Selecione..." />
				  </SelectTrigger>
				  <SelectContent>
					<SelectItem value="Direção">Direção</SelectItem>
					<SelectItem value="Infância">Área Infância</SelectItem>
					<SelectItem value="Sénior">Área Sénior</SelectItem>
					<SelectItem value="Financeiro">Serviço Administrativo e Financeiro</SelectItem>
					<SelectItem value="Logistico">Serviço Logístico</SelectItem>
					<SelectItem value="Psicologia">Serviço de Desenvolvimento Pessoal e Social</SelectItem>
				  </SelectContent>
				</Select>
			  </div>

			  <div>
				<Label htmlFor="identificacao">Quem está envolvido?</Label>
				<Input
				  id="identificacao"
				  name="identificacao"
				  value={form.identificacao}
				  onChange={(e) => handleChange("identificacao", e.target.value)}
				  placeholder="Identificação"
				/>
			  </div>
		  </div>
          <div className="flex items-center space-x-2">
            <Switch checked={anonimo} onCheckedChange={setAnonimo} />
            <Label>Quero permanecer anónimo</Label>
          </div>

          {!anonimo && (
            <>
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  placeholder="Nome completo"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefone">Contacto</Label>
                  <Input
                    id="telefone"
                    name="contacto"
                    type="tel"
                    value={form.contacto}
                    onChange={(e) => handleChange("contacto", e.target.value)}
                    placeholder="912345678"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="exemplo@dominio.pt"
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox id="privacidade" required />
            <Label htmlFor="privacidade">
              Li e entendi a Politica de Privacidade e aceito as condições.
            </Label>
          </div>
          <p className="text-blue-600 underline">
            Clique <PoliticaPrivacidade /> para ler a Política de Privacidade
          </p>

          <div className="flex justify-between">
            <Button type="reset" variant="outline">Limpar</Button>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
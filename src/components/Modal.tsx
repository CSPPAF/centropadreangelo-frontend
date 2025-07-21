'use client'
import { ReactNode, useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

export default function Modal({ open, onClose, children, title }: Props) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-6">
        {/* Título */}
        <h2 className="text-xl font-semibold mb-4 pr-10">{title}</h2>

        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Conteúdo */}
        <div className="text-sm text-gray-800 space-y-4">{children}</div>
      </div>
    </div>
  )
}
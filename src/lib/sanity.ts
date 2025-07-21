import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'cb54bm8b', // <-- usa o teu ID real do projeto Sanity
  dataset: 'production',
  useCdn: true, // true = mais rápido, mas dados podem estar ligeiramente desatualizados
  apiVersion: '2025-07-15', // usa uma data estável no formato YYYY-MM-DD
})
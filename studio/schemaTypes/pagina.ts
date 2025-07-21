// frontend/studio/schemas/pagina.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pagina',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'text', // ou 'blockContent' se usares rich text
    }),
  ],
})
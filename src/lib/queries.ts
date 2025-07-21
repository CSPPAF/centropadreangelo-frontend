import { groq } from 'next-sanity';

export const querySobre = groq`
  *[_type == "pagina" && slug.current == "sobre"][0] {
    title,
    slug,
    content
  }
`;
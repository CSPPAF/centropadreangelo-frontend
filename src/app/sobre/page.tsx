import { client } from '@/lib/sanity';
import { querySobre } from '@/lib/queries';

export default async function SobrePage() {
  const data = await client.fetch(querySobre);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
      <p>{data?.content}</p>
    </main>
  );
}
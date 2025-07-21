'use client'

import {
  AdjustmentsHorizontalIcon,
  HeartIcon,
  PuzzlePieceIcon,
  CakeIcon,
  HandThumbUpIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ScissorsIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'

const servicos = [
  { id: 'psicologia', nome: 'Psicologia', Icon: AdjustmentsHorizontalIcon },
  { id: 'clinicos', nome: 'Serviços Clínicos', Icon: HeartIcon }, // substituído por HeartIcon
  { id: 'podologia', nome: 'Podologia', Icon: PuzzlePieceIcon },
  { id: 'nutricao', nome: 'Nutrição', Icon: CakeIcon },
  { id: 'atividades', nome: 'Atividades', Icon: HandThumbUpIcon },
  { id: 'formacao', nome: 'Formação', Icon: BookOpenIcon },
  { id: 'cabeleireiro', nome: 'Cabeleireiro', Icon: ScissorsIcon },
  { id: 'parcerias', nome: 'Parcerias', Icon: UsersIcon }, // genérico mas seguro
]

export default function ServicosGrid1() {
  return (
    <section className="bg-gray-50 py-16 px-4">
	  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 tracking-tight">SERVIÇOS</h2>
	  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
		{servicos.map(({ id, nome, Icon }) => (
		  <a
			key={id}
			href={`#${id}`}
			className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 border border-gray-100"
		  >
			<div className="p-8 text-center">
			  <div className="flex items-center justify-center mb-5">
				<div className="bg-blue-100 group-hover:bg-blue-600 p-4 rounded-full transition">
				  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition" />
				</div>
			  </div>
			  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
				{nome}
			  </h3>
			</div>
			<div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500 transition pointer-events-none" />
		  </a>
		))}
	  </div>
	</section>
  )
}
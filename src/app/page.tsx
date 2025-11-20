'use client'

import { useCallback, useRef, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ServicosGrid from '@/components/ServicosGrid'
import ServicosGrid1 from '@/components/ServicosGrid1'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Carousel1 from '@/components/Carousel1'
import CarouselcrecheI from '@/components/CarouselcrecheI'
import CarouselcrecheII from '@/components/CarouselcrecheII'
import Carouseljardim from '@/components/Carouseljardim'

const imagens = [
  '/galeria/1.png',
  '/galeria/2.jpg',
  '/galeria/3.jpg',
  '/galeria/4.jpg',
]

export default function HomePage() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) autoplay.current?.play()
  }, [emblaApi])

  return (
		<main id="top" className="min-h-screen scroll-smooth">
			{/* Cabeçalho */}
			<header className="bg-white shadow-md py-4 px-6 flex items-center justify-between flex-wrap gap-4">

			  {/* Esquerda: Logo + Nome */}
			  <div className="flex items-center gap-4 flex-nowrap min-w-0">
			    <img
			      src="/logo.png"
			      alt="Logo"
			      className="h-16 w-auto md:h-24"
			    />
			
			    <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight flex-1 min-w-0">
			      Centro Social Paroquial Padre Ângelo Ferreira Pinto
			    </h1>
			  </div>
			
			  {/* Direita: Botão Área Reservada */}
			  <div className="w-full md:w-auto flex justify-start md:justify-end">
			    <a
			      href="/login"
			      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition w-full md:w-auto text-center"
			    >
			      Área Reservada
			    </a>
			  </div>
			
			</header>

			{/* Galeria */}
			<section className="overflow-hidden w-full py-8">
				<div className="relative">
					<div className="embla" ref={emblaRef}>
						<div className="embla__container flex">
							{imagens.map((src, index) => (
								<div className="embla__slide min-w-full" key={index}>
									<img
										src={src}
										alt={`Imagem ${index + 1}`}
										className="w-full h-auto rounded-lg"
									/>
								</div>
							))}
						</div>
					</div>

					{/* Botões de navegação */}
					<button
						onClick={scrollPrev}
						className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-70 px-3 py-1 rounded-r-md shadow"
					>
						◀
					</button>
					<button
						onClick={scrollNext}
						className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-70 px-3 py-1 rounded-l-md shadow"
					>
						▶
					</button>
				</div>
			</section>
	  
			{/* Grelha respostas sociais */}
			<ServicosGrid />
	  
				<section id="creche" className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-3xl font-extrabold mb-6 text-gray-900">CRECHE I</h2>

						<p className="mb-6 text-gray-700 leading-relaxed">
							Conhecedores das singularidades da primeira infância, a Creche I do Centro Social Paroquial Padre Ângelo Ferreira Pinto apresenta uma equipa habilitada, disponível e competente que, em espaço também de excelência, dedicará todos os cuidados, atenção e carinho de que necessita o seu filho.
						</p>

						<p className="mb-6 text-gray-700 leading-relaxed">
							As angústias e necessidades dos pais terão uma resposta assertiva e cheia de carinho, através de um serviço de qualidade, para que o desenvolvimento da criança seja cheio de amor e alegria.
						</p>

						<p className="mb-8 text-gray-700 leading-relaxed">
							A creche tem capacidade para 41 utentes, apresentando uma equipa composta por 2 Educadoras de Infância e 5 Ajudantes de Ação Educativa. Destina-se a crianças de ambos os sexos, com idades compreendidas entre os 3 e os 36 meses, distribuídas da seguinte forma e com o seguinte acompanhamento:
						</p>
						<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li><strong>Sala Parque:</strong> Até a aquisição da marcha acompanhadas por uma Educadora de Infância e duas Ajudantes de Ação Educativa.</li>
									<li><strong>Sala Um Ano:</strong> Da aquisição da marcha até aos 24 meses acompanhadas por uma Educadora de Infância e duas Ajudantes de Ação Educativa.</li>
									<li><strong>Sala Dois Anos:</strong> Dos 24 aos 36 meses, acompanhadas por uma Educadora de Infância e duas Ajudantes de Ação Educativa.</li>
								</ul>
							</div>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Projeto Educativo</h4>

							<p>
								Construir um Projeto Educativo  é pensar, interrogar, identificar problemas, questionar decisões e efeitos, estimar resultados, colaborar nas soluções, mobilizar-se em torno de objectivos comuns, de forma a perspetivar o futuro.
							</p>
							<p>
								O Projeto Educativo é um trabalho de grupo, visto que ele será a imagem da Instituição e de toda a comunidade envolvente: daqueles que nela exercem a sua ação educativa e dos que nela recebem a sua educação.
							</p>
							<p>
								A sua elaboração visa as crianças, conjeturando os interesses, caraterísticas e expectativas das mesmas, proporcionando às crianças atividades psicopedagógicas que as motivem e despertem os seus interesses para que estas se desenvolvam  de forma harmoniosa em todas as áreas da sua vida.
							</p>
							
							<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
								<blockquote className="italic text-lg text-gray-600">
									“As necessidades físicas, emocionais, sociais e intelectuais da criança devem ser todas satisfeitas para que seja feliz, desenvolva a totalidade do seu potencial e cresça tornando-se um adulto capaz de contribuir e participar.”
								</blockquote>
								<p className="mt-2 text-right text-sm text-gray-500">– Mia Pringle, 1983</p>
							</div>
							
							<p>
								É no Projeto Educativo que encontramos a orientação e o fio condutor que nos permitirá construir as metas a que nos propomos. É desta forma que delineamos o percurso a seguir com a finalidade do sucesso individual de cada criança nunca esquecendo as atitudes e valores que nos tornam seres sociais, com espírito crítico, respeitando sempre o outro, mantendo a família sempre presente.
							</p>
							
							<p>
								O Projeto Educativo elaborado pela equipa técnica do Centro Social Paroquial Padre Ângelo Ferreira Pinto, para o período compreendido entre os anos 2010 e 2015 tendo em conta a diversidade educacional e cultural do meio em que nos encontramos com a seguinte temática: “Consciencializar os nossos clientes em liberdade de consciência, da sua responsabilidade na aquisição de noções e comportamentos de educação cívica e moral”
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Plano de Actividades</h4>

							<p>
								O Plano de Actividades combinado com o Projecto Educativo e o Regulamento Interno, é um dos principais instrumentos de trabalho.  As actividades da Creche e do Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto decorrem ao longo do ano lectivo e são planeadas e implementadas pela equipa educativa de forma a envolver o maior número de intervenientes possíveis.
							</p>
							<p>
								Actividades com a família, encontros intergerações, celebrações de tradições, experiencias relacionadas com o projecto educativo ou a exploração de temas que vão de encontro ao superior interesse da criança, têm com finalidade o desenvolvimento saudável e harmonioso da criança nas suas várias dimensões: física – psicológica – social – familiar – cultural.
							</p>
							<p>
								O planeamento anual destas atividades encontra-se registado nos documentos em PDF que pode consultar abaixo.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfsinfancia/Calendarizacao-2024-25.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Plano Anual
								</a>
							</div>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Relação Com Família</h4>

							<p>
								A família exerce uma grande influência no desempenho e em todo o crescimento da criança, desde os primeiros tempos de vida constituindo a primeira instância educativa da criança. É o ambiente onde esta desperta para a vida como pessoa, onde interioriza valores, atitudes e papéis.
							</p>
							<p>
								Se a escola é o prolongamento do lar, não faz sentido que as famílias não sejam participantes activos na creche e infantário, para que possamos acompanhar as conquistas diárias dos filhos.
							</p>
							<p>
								O Educador de infância tem o compromisso de encontrar estratégias para incluir a família neste processo. Desta forma a creche e o infantário são um local aberto às famílias, é importante para estas, conhecerem melhor o espaço onde o seu educando passa tantas horas, conhecer os amigos, o pessoal docente e não docente.
							</p>
							<p>
								Queremos criar com as famílias uma relação de proximidade, atenção, confiança e parceria.
							</p>
							<p>
								Venha conhecer a nossa equipa, a nossa instituição e reforce cada vez mais o elo familiar com o Centro Social Paroquial Padre Ângelo Ferreira Pinto pois estamos Consigo ao Longo de Toooda a Vida…..
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Regulamento</h4>

							<p>
								Os Regulamentos Internos da Creche e Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto (C.S.P.P.A.F.P.), visam, ordenar e reger a vida interna destas valências desenvolvidas pela Instituição, de modo a que todos os seus elementos, ou seja: pessoal técnico, auxiliar, encarregados de educação/pessoas significativas e respetivos educandos, concorram para o bom funcionamento geral.
							</p>
							<p>
								Para melhor conhecer a forma como estamos organizados, os objetivos gerais, procedimentos oficiais da Instituição, matriculas, funcionamento e procedimentos, consulte os regulamentos disponíveis em PDF.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfsinfancia/Regulamento-Interno-Creche.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Regulamento
								</a>
							</div>
						</div>
						<div className="mt-16">
							<CarouselcrecheI />
						</div>
					</div>
				</section>
			
				<section id="creche1" className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-3xl font-extrabold mb-6 text-gray-900">CRECHE II</h2>

						<p className="mb-6 text-gray-700 leading-relaxed">
							Conhecedores das singularidades da primeira infância, a Creche II do Centro Social Paroquial Padre Ângelo Ferreira Pinto apresenta uma equipa habilitada, disponível e competente que, em espaço também de excelência, dedicará todos os cuidados, atenção e carinho de que necessita o seu filho.
						</p>

						<p className="mb-6 text-gray-700 leading-relaxed">
							As angústias e necessidades dos pais terão uma resposta assertiva e cheia de carinho, através de um serviço de qualidade, para que o desenvolvimento da criança seja cheio de amor e alegria.
						</p>

						<p className="mb-8 text-gray-700 leading-relaxed">
							A creche tem capacidade para 24 utentes, apresentando uma equipa composta por 1 Educadoras de Infância e 3 Ajudantes de Ação Educativa. Destina-se a crianças de ambos os sexos, com idades compreendidas entre os 3 e os 36 meses, distribuídas da seguinte forma e com o seguinte acompanhamento:
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li><strong>Sala Parque:</strong> Até a aquisição da marcha acompanhadas por uma Educadora de Infância e três Ajudantes de Ação Educativa.</li>
									<li><strong>Sala Um e Dois Anos:</strong> Dos 3 aos 36 meses, acompanhadas por uma Educadora de Infância e três Ajudantes de Ação Educativa.</li>
								</ul>
							</div>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Projeto Educativo</h4>

							<p>
								Construir um Projeto Educativo  é pensar, interrogar, identificar problemas, questionar decisões e efeitos, estimar resultados, colaborar nas soluções, mobilizar-se em torno de objectivos comuns, de forma a perspetivar o futuro.
							</p>
							<p>
								O Projeto Educativo é um trabalho de grupo, visto que ele será a imagem da Instituição e de toda a comunidade envolvente: daqueles que nela exercem a sua ação educativa e dos que nela recebem a sua educação.
							</p>
							<p>
								A sua elaboração visa as crianças, conjeturando os interesses, caraterísticas e expectativas das mesmas, proporcionando às crianças atividades psicopedagógicas que as motivem e despertem os seus interesses para que estas se desenvolvam  de forma harmoniosa em todas as áreas da sua vida.
							</p>
							
							<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
								<blockquote className="italic text-lg text-gray-600">
									“As necessidades físicas, emocionais, sociais e intelectuais da criança devem ser todas satisfeitas para que seja feliz, desenvolva a totalidade do seu potencial e cresça tornando-se um adulto capaz de contribuir e participar.”
								</blockquote>
								<p className="mt-2 text-right text-sm text-gray-500">– Mia Pringle, 1983</p>
							</div>
							
							<p>
								É no Projeto Educativo que encontramos a orientação e o fio condutor que nos permitirá construir as metas a que nos propomos. É desta forma que delineamos o percurso a seguir com a finalidade do sucesso individual de cada criança nunca esquecendo as atitudes e valores que nos tornam seres sociais, com espírito crítico, respeitando sempre o outro, mantendo a família sempre presente.
							</p>
							
							<p>
								O Projeto Educativo elaborado pela equipa técnica do Centro Social Paroquial Padre Ângelo Ferreira Pinto, para o período compreendido entre os anos 2010 e 2015 tendo em conta a diversidade educacional e cultural do meio em que nos encontramos com a seguinte temática: “Consciencializar os nossos clientes em liberdade de consciência, da sua responsabilidade na aquisição de noções e comportamentos de educação cívica e moral”
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Plano de Actividades</h4>

							<p>
								O Plano de Actividades combinado com o Projecto Educativo e o Regulamento Interno, é um dos principais instrumentos de trabalho.  As actividades da Creche e do Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto decorrem ao longo do ano lectivo e são planeadas e implementadas pela equipa educativa de forma a envolver o maior número de intervenientes possíveis.
							</p>
							<p>
								Actividades com a família, encontros intergerações, celebrações de tradições, experiencias relacionadas com o projecto educativo ou a exploração de temas que vão de encontro ao superior interesse da criança, têm com finalidade o desenvolvimento saudável e harmonioso da criança nas suas várias dimensões: física – psicológica – social – familiar – cultural.
							</p>
							<p>
								O planeamento anual destas atividades encontra-se registado nos documentos em PDF que pode consultar abaixo.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfsinfancia/Calendarizacao-2024-25.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Plano Anual
								</a>
							</div>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Relação Com Família</h4>

							<p>
								A família exerce uma grande influência no desempenho e em todo o crescimento da criança, desde os primeiros tempos de vida constituindo a primeira instância educativa da criança. É o ambiente onde esta desperta para a vida como pessoa, onde interioriza valores, atitudes e papéis.
							</p>
							<p>
								Se a escola é o prolongamento do lar, não faz sentido que as famílias não sejam participantes activos na creche e infantário, para que possamos acompanhar as conquistas diárias dos filhos.
							</p>
							<p>
								O Educador de infância tem o compromisso de encontrar estratégias para incluir a família neste processo. Desta forma a creche e o infantário são um local aberto às famílias, é importante para estas, conhecerem melhor o espaço onde o seu educando passa tantas horas, conhecer os amigos, o pessoal docente e não docente.
							</p>
							<p>
								Queremos criar com as famílias uma relação de proximidade, atenção, confiança e parceria.
							</p>
							<p>
								Venha conhecer a nossa equipa, a nossa instituição e reforce cada vez mais o elo familiar com o Centro Social Paroquial Padre Ângelo Ferreira Pinto pois estamos Consigo ao Longo de Toooda a Vida…..
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Regulamento</h4>

							<p>
								Os Regulamentos Internos da Creche e Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto (C.S.P.P.A.F.P.), visam, ordenar e reger a vida interna destas valências desenvolvidas pela Instituição, de modo a que todos os seus elementos, ou seja: pessoal técnico, auxiliar, encarregados de educação/pessoas significativas e respetivos educandos, concorram para o bom funcionamento geral.
							</p>
							<p>
								Para melhor conhecer a forma como estamos organizados, os objetivos gerais, procedimentos oficiais da Instituição, matriculas, funcionamento e procedimentos, consulte os regulamentos disponíveis em PDF.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfsinfancia/Regulamento-Interno-Creche.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Regulamento
								</a>
							</div>
						</div>
						<div className="mt-16">
							<CarouselcrecheII />
						</div>

					</div>
				</section>
			  
				<section id="infancia" className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-3xl font-extrabold mb-6 text-gray-900">JARDIM DE INFÂNCIA</h2>

						<p className="mb-6 text-gray-700 leading-relaxed">
							Conhecedores das singularidades da primeira infância, o Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto apresenta uma equipa habilitada, disponível e competente que, em espaço também de excelência, dedicará todos os cuidados, atenção e carinho de que necessita o seu filho.
						</p>

						<p className="mb-6 text-gray-700 leading-relaxed">
							As angústias e necessidades dos pais terão uma resposta assertiva e cheia de carinho, através de um serviço de qualidade, para que o desenvolvimento da criança seja cheio de amor e alegria.
						</p>

						<p className="mb-8 text-gray-700 leading-relaxed">
							O Jardim de Infância tem capacidade para 75 utentes, apresentando uma equipa composta por 3 Educadoras de Infância e 4 Ajudantes de Ação Educativa. Destina-se a crianças de ambos os sexos, com idades compreendidas entre os 3 e os 6 anos, distribuídas da seguinte forma e com o seguinte acompanhamento:
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li><strong>Sala Vermelha:</strong> Crianças com 3 anos de idade – 25 crianças acompanhadas por uma Educadora de Infância e uma Ajudante de Ação Educativa.</li>
									<li><strong>Sala Azul:</strong> Crianças com 4 anos de idade – 25 crianças acompanhadas por uma Educadora de Infância e uma Ajudante de Ação Educativa.</li>
									<li><strong>Sala Amarela:</strong> Crianças com 5 anos de idade – 25 crianças acompanhadas por uma Educadora de Infância e uma Ajudante de Ação Educativa.</li>
								</ul>
							</div>
						</div>

						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Projeto Educativo</h4>

							<p>
								Construir um Projeto Educativo  é pensar, interrogar, identificar problemas, questionar decisões e efeitos, estimar resultados, colaborar nas soluções, mobilizar-se em torno de objectivos comuns, de forma a perspetivar o futuro.
							</p>
							<p>
								O Projeto Educativo é um trabalho de grupo, visto que ele será a imagem da Instituição e de toda a comunidade envolvente: daqueles que nela exercem a sua ação educativa e dos que nela recebem a sua educação.
							</p>
							<p>
								A sua elaboração visa as crianças, conjeturando os interesses, caraterísticas e expectativas das mesmas, proporcionando às crianças atividades psicopedagógicas que as motivem e despertem os seus interesses para que estas se desenvolvam  de forma harmoniosa em todas as áreas da sua vida.
							</p>
							
							<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
								<blockquote className="italic text-lg text-gray-600">
									“As necessidades físicas, emocionais, sociais e intelectuais da criança devem ser todas satisfeitas para que seja feliz, desenvolva a totalidade do seu potencial e cresça tornando-se um adulto capaz de contribuir e participar.”
								</blockquote>
								<p className="mt-2 text-right text-sm text-gray-500">– Mia Pringle, 1983</p>
							</div>
							
							<p>
								É no Projeto Educativo que encontramos a orientação e o fio condutor que nos permitirá construir as metas a que nos propomos. É desta forma que delineamos o percurso a seguir com a finalidade do sucesso individual de cada criança nunca esquecendo as atitudes e valores que nos tornam seres sociais, com espírito crítico, respeitando sempre o outro, mantendo a família sempre presente.
							</p>
							
							<p>
								O Projeto Educativo elaborado pela equipa técnica do Centro Social Paroquial Padre Ângelo Ferreira Pinto, para o período compreendido entre os anos 2010 e 2015 tendo em conta a diversidade educacional e cultural do meio em que nos encontramos com a seguinte temática: “Consciencializar os nossos clientes em liberdade de consciência, da sua responsabilidade na aquisição de noções e comportamentos de educação cívica e moral”
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Plano de Actividades</h4>

							<p>
								O Plano de Actividades combinado com o Projecto Educativo e o Regulamento Interno, é um dos principais instrumentos de trabalho.  As actividades da Creche e do Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto decorrem ao longo do ano lectivo e são planeadas e implementadas pela equipa educativa de forma a envolver o maior número de intervenientes possíveis.
							</p>
							<p>
								Actividades com a família, encontros intergerações, celebrações de tradições, experiencias relacionadas com o projecto educativo ou a exploração de temas que vão de encontro ao superior interesse da criança, têm com finalidade o desenvolvimento saudável e harmonioso da criança nas suas várias dimensões: física – psicológica – social – familiar – cultural.
							</p>
							<p>
								O planeamento anual destas atividades encontra-se registado nos documentos em PDF que pode consultar abaixo.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfsinfancia/Calendarizacao-2024-25.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Plano Anual
								</a>
							</div>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Relação Com Família</h4>

							<p>
								A família exerce uma grande influência no desempenho e em todo o crescimento da criança, desde os primeiros tempos de vida constituindo a primeira instância educativa da criança. É o ambiente onde esta desperta para a vida como pessoa, onde interioriza valores, atitudes e papéis.
							</p>
							<p>
								Se a escola é o prolongamento do lar, não faz sentido que as famílias não sejam participantes activos na creche e infantário, para que possamos acompanhar as conquistas diárias dos filhos.
							</p>
							<p>
								O Educador de infância tem o compromisso de encontrar estratégias para incluir a família neste processo. Desta forma a creche e o infantário são um local aberto às famílias, é importante para estas, conhecerem melhor o espaço onde o seu educando passa tantas horas, conhecer os amigos, o pessoal docente e não docente.
							</p>
							<p>
								Queremos criar com as famílias uma relação de proximidade, atenção, confiança e parceria.
							</p>
							<p>
								Venha conhecer a nossa equipa, a nossa instituição e reforce cada vez mais o elo familiar com o Centro Social Paroquial Padre Ângelo Ferreira Pinto pois estamos Consigo ao Longo de Toooda a Vida…..
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Regulamento</h4>

							<p>
								Os Regulamentos Internos da Creche e Jardim de Infância do Centro Social Paroquial Padre Ângelo Ferreira Pinto (C.S.P.P.A.F.P.), visam, ordenar e reger a vida interna destas valências desenvolvidas pela Instituição, de modo a que todos os seus elementos, ou seja: pessoal técnico, auxiliar, encarregados de educação/pessoas significativas e respetivos educandos, concorram para o bom funcionamento geral.
							</p>
							<p>
								Para melhor conhecer a forma como estamos organizados, os objetivos gerais, procedimentos oficiais da Instituição, matriculas, funcionamento e procedimentos, consulte os regulamentos disponíveis em PDF.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfsinfancia/Regulamento-Interno-Jardim-de-infância.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Regulamento
								</a>
							</div>
						</div>
						<div className="mt-16">
							<Carouseljardim />
						</div>
					</div>
				</section>
				
				<section id="lar" className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-3xl font-extrabold mb-6 text-gray-900">ERPI</h2>

						<div className="space-y-6 text-gray-700 leading-relaxed">
							<p>
								A ERPI do Centro Padre Ângelo dispõe de uma equipa técnica, constituída por profissionais qualificados de diversas áreas (serviço clínico, psicologia, enfermagem, fisioterapia, animação sociocultural, entre outras), complementada por outras áreas de intervenção, como ajudantes de ação direta e serviços gerais.
							</p>
							<p>
								Diariamente, procuramos cumprir o nosso principal objetivo – promover o envelhecimento ativo e a qualidade de vida. Com a ajuda da nossa equipa de profissionais, procuramos responder de forma adequada a cada situação, de forma diferenciada, tendo em vista as necessidades e expectativas de cada utente.
							</p>
							<p>
								Queremos contribuir para a estabilização e/ou melhoria no processo de envelhecimento do seu familiar. <strong>Venha conhecer-nos!</strong>
							</p>
						</div>

						<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
							<blockquote className="italic text-lg text-gray-600">
								“Não importa se a estação do ano muda… Se o século vira, se o milénio é outro. Se a idade aumenta… Conserva a vontade de viver, Não se chega a parte alguma sem ela.”
							</blockquote>
							<p className="mt-2 text-right text-sm text-gray-500">– Fernando Pessoa</p>
						</div>

						<div className="space-y-6 text-gray-700 leading-relaxed">
							<p>
								A Estrutura Residencial para Idosos (ERPI) do Centro Social Paroquial Padre Ângelo Ferreira Pinto (Centro Padre Ângelo) foi inaugurada em janeiro de 2015 e abriu as suas portas em julho de 2015.
							</p>
							<p>
								É um projeto criado para proporcionar uma vida plena, repleta de conforto, tranquilidade e segurança para os utentes e suas famílias. A estrutura inclui 20 quartos individuais e 20 duplos, num edifício construído de raiz, com capacidade para 60 utentes.
							</p>
							<p>
								A ERPI destina-se a indivíduos com 65 anos ou mais que, por diversos motivos (dependência, solidão, insegurança, etc.), não possam permanecer na sua residência. Valorizamos a experiência de vida dos nossos utentes, apostando no envelhecimento ativo e saudável.
							</p>
						</div>
						
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h3 className="text-2xl font-bold text-gray-800">Alojamento e Serviços</h3>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<h4 className="font-semibold mb-2 text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">Alojamento</h4>
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li><strong>Permanente:</strong> 24h por dia / 365 dias por ano.</li>
									<li><strong>Temporário:</strong> (sob marcação e disponibilidade de vagas)
										<ul className="ml-5 list-disc">
											<li>Reabilitação</li>
											<li>Fins-de-semana</li>
											<li>Semanal</li>
											<li>Quinzenal</li>
										</ul>
									</li>
								</ul>
							</div>

							{/* Sénior */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<h4 className="font-semibold mb-2 text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">Serviços Base</h4>
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li>Alojamento</li>
									<li>Alimentação</li>
									<li>Atividades de vida diária</li>
									<li>Enfermagem diária</li>
									<li>Fisioterapia</li>
									<li>Apoio médico</li>
									<li>Apoio social e psicológico</li>
									<li>Animação sociocultural</li>
									<li>Lavandaria interna e externa</li>
									<li>Assistência espiritual e religiosa</li>
									<li>Biblioteca</li>
								</ul>
							</div>

							{/* Famílias */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<h4 className="font-semibold mb-2 text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">Serviços Complementares</h4>
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li>Nutricionista</li>
									<li>Podologista</li>
									<li>Serviços de refeição personalizados</li>
									<li>Serviço de cabeleireiro e estética</li>
									<li>Apoio jurídico</li>
									<li>Serviços de costura</li>
								</ul>
							</div>
						</div>

						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h3 className="text-2xl font-bold text-gray-800">Plano de Atividades</h3>
							<h4 className="text-xl font-semibold text-blue-600">Atividades Socioculturais</h4>

							<p>
								À semelhança de outros países, Portugal atravessa uma fase de envelhecimento demográfico acentuado. As modificações dos comportamentos demográficos refletem-se, nas estruturas populacionais de forma irreversível. O envelhecimento de uma população é um fenómeno de dimensão ínfima, tendencialmente durável, irreversível e com efeitos em todas as sociedades.
							</p>
							<p>
								A animação sociocultural é uma metodologia de intervenção que visa vários aspetos, nomeadamente: a participação de um grupo ou comunidade, a promoção da cidadania, a motivação dos indivíduos para realizar atividades que contribuam para o seu enriquecimento e/ou desenvolvimento individual e social.
							</p>
							<p>
								A animação Sociocultural nas instituições sociais, nomeadamente nas que são vocacionadas para idosos, contribui para um melhor envelhecer, não sendo apenas para preencher o seu tempo de ócio/ lazer, mas também para facilitar a sua adaptação ao novo ambiente institucional, facilitar as relações sociais, contribuir para uma maior autonomia e, até, no nosso caso em especial, facilitar intergeracionalidade, independentemente das suas capacidades e/ou limitações e da fase do seu processo de envelhecimento.
							</p>
							<p>
								Partilhamos, em anexo, o nosso plano de atividades semanal e anual:
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfslar/plano-semanal.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Plano Semanal
								</a>
								<a
									href="/pdfslar/plano-anual.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Plano Anual
								</a>
							</div>
						</div>
						<div className="mt-16 space-y-6 text-gray-700 leading-relaxed">
							<h4 className="text-xl font-semibold text-blue-600">Regulamento</h4>

							<p>
								O Regulamento Interno da Estrutura Residencial Para Idosos (ERPI) do Centro Social Paroquial Padre Ângelo Ferreira Pinto visa ordenar e reger a vida interna desta Valência, de modo a que, quer os utentes quer o pessoal técnico e auxiliar ao serviço do ERPI, concorram para o bom funcionamento geral..
							</p>
							<p>
								Para melhor conhecer a forma como estamos organizados, os objetivos gerais, procedimentos oficiais da Instituição, inscrições, funcionamento e procedimentos, consulte os nossos regulamentos disponíveis em PDF.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-4">
								<a
									href="/pdfslar/Regulamento-Interno-ERPI.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
								>
									Ver Regulamento
								</a>
							</div>
						</div>
					</div>
					<div className="mt-16">
						<Carousel />
					</div>
				</section>

				<section id="centro-dia" className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">CENTRO DE DIA</h2>

						<p className="text-gray-700 mb-4">
							O Centro de Dia é um espaço pensado e organizado em função da população Sénior, suas necessidades e interesses, focado em proporcionar uma alimentação cuidada, apoio na higiene e conforto, desenvolvendo atividades que fomentem o convívio, propiciando a animação social e a ocupação dos tempos livres dos seus utentes. O Centro de Dia pretende igualmente incentivar o utente a ser promotor da sua independência e autonomia; promover o encontro e convívio e motivar e incrementar a participação ativa dos utentes nas atividades da Instituição e na vida da Comunidade.
						</p>

						<p className="text-gray-700 mb-4">
							Com uma equipa multidisciplinar, composta por uma Assistente Social, Psicólogo, Terapeutas Ocupacionais de diversas áreas de intervenção, três Auxiliares, proporcionamos com qualidade os melhores cuidados, atenção e afeto, fundamentais para esta população.
						</p>

						<h4 className="text-xl font-semibold text-blue-600">Objetivos</h4>
						
						<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li>Assegurar a satisfação das necessidades básicas do utente, proporcionando-lhe todos os serviços indispensáveis para o seu bem-estar, de forma a promover a sua adaptação e integração no meio ambiente envolvente;</li>
									<li>Garantir ao utente o bem-estar físico, mental, emocional, social e moral, promovendo a sua qualidade de vida;</li>
									<li>Garantir e respeitar a independência, a individualidade, a privacidade e a livre expressão de opinião do utente;</li>
									<li>Apoiar na reformulação e continuidade do seu projeto de vida;</li>
									<li>Contribuir para a estabilização ou retardamento do processo de envelhecimento e, simultaneamente, promover um crescimento e envelhecimento bem-sucedidos;</li>
									<li>Manter e promover a abertura e a ligação com a sua rede social de apoio, quer ao nível familiar quer ao nível da comunidade, minimizando o efeito da institucionalização;</li>
									<li>Criar condições que lhe permitam preservar a sociabilidade e incentivar a relação intrafamiliar e intergeracional.</li>
								</ul>
							</div>
						</div>
						<br />

						<h4 className="text-xl font-semibold text-blue-600">Plano de Atividades</h4>
						<p className="text-gray-700 mb-4">
							O aumento da esperança média de vida é um fator que marca cada vez mais a nossa sociedade. É fundamental acompanhar este desenvolvimento de forma organizada e planeada, proporcionando aos nossos Seniores um envelhecimento feliz e ativo nas várias dimensões da sua vida: psicológica, física, social e familiar.
						</p>
						<p className="text-gray-700 mb-4">
							Com um plano de atividades altamente diversificado para responder às necessidades e interesses dos nossos seniores, temos um vasto leque de atividades ocupacionais e de desenvolvimento pessoal ao dispor dos utentes do Centro de Dia.
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li>Terapia Ocupacional</li>
									<li>Tecnologias de Informação e Comunicação – Informática</li>
									<li>Dança Criativa</li>
									<li>Hidroginástica</li>
									<li>Ginástica</li>
									<li>Técnicas de Relaxamento</li>
									<li>Aprendizagem de instrumentos</li>
									<li>Grupo Coral</li>
									<li>Ações de sensibilização</li>
									<li>Passeios / Visitas culturais</li>
								</ul>
							</div>
						</div>
						<br />
						
						<h4 className="text-xl font-semibold text-blue-600">Plano de Intervenção</h4>
						<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
							<blockquote className="italic text-lg text-gray-600">
								“A Velhice não é a conclusão necessária da existência diferente da Juventude e de maturidade, mas dotada de um equilíbrio próprio e deixando aberto uma gama de possibilidades.”
							</blockquote>
							<p className="mt-2 text-right text-sm text-gray-500">– Simone de Beauvoir</p>
						</div>

						<p className="text-gray-700 mb-4">
							O plano individual de intervenção tem por objetivo orientar o trabalho da equipa que acompanhará o idoso. Assim, é definido para cada utente/idoso um plano de intervenção individual que tem como objetivo organizar, operacionalizar e integrar os serviços com as necessidades e expetativas do idoso e da sua família.
						</p>
						<p className="text-gray-700 mb-4">
							Para a sua formulação, são recolhidos dados sobre as necessidades, os problemas ou os pontos fortes, tendo em conta a sua componente psicológica, afetiva, cognitiva, social, funcional e de saúde, e com base nesta avaliação, são planeadas as intervenções que permitem atingir as metas traçadas.
						</p>
						<p className="text-gray-700">
							Consideramos que este plano deve ser vivo e dinâmico, isto é, estar em permanente reavaliação e sujeitar-se a revisões periódicas. É fundamental assegurar que o idoso tem ao seu dispor os recursos para assegurar o seu projeto de vida.
						</p>
					</div>
					<div className="mt-16">
						<Carousel1 />
					</div>
				</section>
				
				<section id="centro-convivio" className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">CENTRO DE CONVÍVIO</h2>

						<p className="text-gray-700 mb-4">
							O Centro de Convívio é um equipamento onde funcionam um conjunto de serviços que permitem ao Sénior participar em atividades de carácter sócio recreativo e cultural, capazes de lhe proporcionar o convívio e relações de amizade com outros utentes da comunidade.
						</p>

						<p className="text-gray-700 mb-4">
							O Centro de Convívio pretende ser um meio eficaz de promoção e  desenvolvimento de competências pessoais e sociais no Senior, reforçando o seu valor e a sua identidade.
						</p>

						<h4 className="text-xl font-semibold text-blue-600">Objetivos</h4>
						
						<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li>Promover a inclusão social e melhorar a qualidade de vida dos Seniores;</li>
									<li>Potenciar a integração social e efetivação dos direitos de cidadania, bem como estimular o espírito de solidariedade e de entreajuda dos utentes;</li>
									<li>Prevenir situações de dependência e promover a autonomia;</li>
									<li>Fomentar as relações interpessoais ao nível dos idosos e destes com outros grupos etários, a fim de evitar o isolamento;</li>
									<li>Contribuir para a estabilização ou retardamento do processo de envelhecimento;</li>
									<li>Estimular os idosos a sentir-se útil na vida social e cultural na comunidade;</li>
									<li>Proporcionar momentos de interação, convívio e lazer.</li>
								</ul>
							</div>
						</div>
						<br />

						<h4 className="text-xl font-semibold text-blue-600">Plano de Atividades</h4>
						<p className="text-gray-700 mb-4">
							O aumento da esperança média de vida é um fator que marca cada vez mais a nossa sociedade. É fundamental acompanhar este desenvolvimento de forma organizada e planeada, proporcionando aos nossos Seniores um envelhecimento feliz e ativo nas várias dimensões da sua vida: psicológica, física, social e familiar.
						</p>
						<p className="text-gray-700 mb-4">
							Com um plano de atividades altamente diversificado para responder às necessidades e interesses dos nossos seniores, temos um vasto leque de atividades ocupacionais e de desenvolvimento pessoal ao dispor dos utentes do Centro de Convívio.
						</p>
						
												<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
							{/* Infância */}
							<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									<li>Terapia Ocupacional</li>
									<li>Tecnologias de Informação e Comunicação – Informática</li>
									<li>Dança Criativa</li>
									<li>Hidroginástica</li>
									<li>Ginástica</li>
									<li>Técnicas de Relaxamento</li>
									<li>Aprendizagem de instrumentos</li>
									<li>Grupo Coral</li>
									<li>Ações de sensibilização</li>
									<li>Passeios / Visitas culturais</li>
								</ul>
							</div>
						</div>
						<br />

						<h4 className="text-xl font-semibold text-blue-600">Plano de Intervenção</h4>
						<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
							<blockquote className="italic text-lg text-gray-600">
								“A Velhice não é a conclusão necessária da existência diferente da Juventude e de maturidade, mas dotada de um equilíbrio próprio e deixando aberto uma gama de possibilidades.”
							</blockquote>
							<p className="mt-2 text-right text-sm text-gray-500">– Simone de Beauvoir</p>
						</div>

						<p className="text-gray-700 mb-4">
							O plano individual de intervenção tem por objetivo orientar o trabalho da equipa que acompanhará o idoso. Assim, é definido para cada utente/idoso um plano de intervenção individual que tem como objetivo organizar, operacionalizar e integrar os serviços com as necessidades e expetativas do idoso e da sua família.
						</p>
						<p className="text-gray-700 mb-4">
							Para a sua formulação, são recolhidos dados sobre as necessidades, os problemas ou os pontos fortes, tendo em conta a sua componente psicológica, afetiva, cognitiva, social, funcional e de saúde, e com base nesta avaliação, são planeadas as intervenções que permitem atingir as metas traçadas.
						</p>
						<p className="text-gray-700">
							Consideramos que este plano deve ser vivo e dinâmico, isto é, estar em permanente reavaliação e sujeitar-se a revisões periódicas. É fundamental assegurar que o idoso tem ao seu dispor os recursos para assegurar o seu projeto de vida.
						</p>
					</div>
					<div className="mt-16">
						<Carousel1 />
					</div>
				</section>
	  
			{/* Grelha dos Serviços */}
			<ServicosGrid1 />
	  
			<section id="psicologia" className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-extrabold mb-6 text-gray-900">PSICOLOGIA</h2>

					<div className="my-12 p-6 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
						<blockquote className="italic text-lg text-gray-600">
							“A terapia não é uma questão de fazer qualquer coisa a um indivíduo nem de o induzir a fazer qualquer coisa em relação a si próprio.
						É sim, uma questão de o libertar para o processo normal de crescimento e desenvolvimento.”
						</blockquote>
						<p className="mt-2 text-right text-sm text-gray-500">– Carl Rogers</p>
					</div>

					<p className="mb-12 text-gray-700 leading-relaxed">
						O Serviço de Psicologia do Centro Social Paroquial Padre Ângelo Ferreira procura contribuir para a concretização da Missão e Valores da Instituição, através do acompanhamento das crianças e seniores ao longo do seu percurso na Instituição.
					</p>

					<p className="mb-12 text-gray-700 leading-relaxed">
						O Serviço de Psicologia desenvolve a sua ação através de atividades em três principais áreas:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{/* Infância */}
						<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
							<h3 className="text-xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">Infância</h3>
							<h4 className="font-semibold mb-2 text-gray-800">Atividades:</h4>
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								<li>Consulta Psicológica</li>
								<li>Ludodiagnóstico</li>
								<li>Avaliação Psicológica e Pedagógica</li>
								<li>Intervenção Pré-Escolar</li>
							</ul>
						</div>

						{/* Sénior */}
						<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
							<h3 className="text-xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">Sénior</h3>
							<h4 className="font-semibold mb-2 text-gray-800">Atividades:</h4>
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								<li>Consulta Psicológica</li>
								<li>Acompanhamento terapêutico</li>
								<li>Avaliação Psicológica</li>
								<li>Co-organização de atividades Formativas e Ocupacionais</li>
							</ul>
						</div>

						{/* Famílias */}
						<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
							<h3 className="text-xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">Famílias</h3>
							<h4 className="font-semibold mb-2 text-gray-800">Atividades:</h4>
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								<li>Informação</li>
								<li>Formação</li>
								<li>Esclarecimento</li>
								<li>Acompanhamento</li>
								<li>Encaminhamento</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
	  
	  <section id="clinicos" className="py-12 px-4 bg-white">
	    <h2 className="text-xl font-bold mb-2">Serviços Clínicos</h2>
	    <p className="text-gray-600">Informações sobre o serviço de Serviços Clínicos...</p>
	  </section>
	  
	  <section id="podologia" className="py-12 px-4 bg-white">
	    <h2 className="text-xl font-bold mb-2">Podologia</h2>
	    <p className="text-gray-600">Informações sobre o serviço de Podologia...</p>
	  </section>

	  <section id="nutricao" className="py-12 px-4 bg-gray-50">
	    <h2 className="text-xl font-bold mb-2">Nutrição</h2>
	    <p className="text-gray-600">Informações sobre o Nutrição...</p>
	  </section>

	  <section id="atividades" className="py-12 px-4 bg-white">
	    <h2 className="text-xl font-bold mb-2">Atividades</h2>
	    <p className="text-gray-600">Informações sobre o Atividades...</p>
	  </section>

	  <section id="formacao" className="py-12 px-4 bg-white">
	    <h2 className="text-xl font-bold mb-2">Formação</h2>
	    <p className="text-gray-600">Informações sobre o Formação...</p>
	  </section>
	  
	  <section id="Cabeleireio" className="py-12 px-4 bg-white">
	    <h2 className="text-xl font-bold mb-2">Podologia</h2>
	    <p className="text-gray-600">Informações sobre o Podologia...</p>
	  </section>
	  
	  <section id="parcerias" className="py-12 px-4 bg-white">
	    <h2 className="text-xl font-bold mb-2">Parcerias</h2>
	    <p className="text-gray-600">Informações sobre o Parcerias...</p>
	  </section>
	  
		<a
			href="#top"
			className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
			aria-label="Voltar ao topo"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
			</svg>
		</a>

		<Footer />
  
    </main>
  )
}

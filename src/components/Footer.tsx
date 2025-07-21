'use client'
import { useState } from 'react'
import Modal from './Modal'
import { DocumentArrowDownIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import FormularioContato from './FormularioContato'
import RegulamentoModal from './RegulamentoModal'
import FormularioRecrutamento from "@/components/FormularioRecrutamento"
import FormularioDenuncia from './FormularioDenuncia'

const secções = {
  'O Centro': (
    <div className="space-y-6 text-gray-700">
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Quem Somos</h3>
        <p>
          O Centro Social Paroquial Padre Ângelo Ferreira Pinto é uma Instituição Particular de Solidariedade Social (IPSS) fundada pelo saudoso Padre Ângelo Ferreira Pinto. Em 1987 o Padre Ângelo Ferreira Pinto, com o apoio do arquiteto Afonso Sá, de alguns particulares e de algumas entidades locais, mandou construir o Centro Social e Paroquial de Perafita, sendo este inaugurado a 17 de janeiro de 1988.
        </p>
        <p>
          Aquando do 2° aniversário do falecimento do Padre Ângelo, em 1999, este Centro passou a ser chamado de Centro Social e Paroquial Padre Ângelo Ferreira Pinto.
        </p>
        <p>
          Situado em Perafita – Matosinhos, possui espaços e condições físicas reconhecidamente privilegiadas para a prática de serviços de caráter social. Serve a comunidade local com serviços de apoio à infância e comunidade sénior.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Missão, Valores e Visão</h3>
        <img
          src="/missao_visao_valores.png"
          alt="Missão, Valores e Visão"
          className="rounded-lg shadow-md mx-auto"
        />
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Organograma</h3>
        <p>
          O Centro Social Paroquial Padre Ângelo Ferreira Pinto prima pela organização dos seus Recursos Humanos, tendo ao seu dispor uma equipa de profissionais experientes e motivados.
        </p>
        <p>
          Assente em metodologias e atividades orientadas para os interesses e necessidades de todos os seus beneficiários, tem por finalidade quer o desenvolvimento harmonioso das crianças, quer o envelhecimento ativo e bem-sucedido dos seniores.
        </p>
        <img
          src="/organigrama.jpg"
          alt="Organograma da Instituição"
          className="rounded-lg shadow-md mx-auto"
        />
      </section>
    </div>
  ),
  'Informação Financeira': (
  <div className="space-y-6 text-gray-700">
    <section className="space-y-3">
      <p>
        <strong className="font-bold">CENTRO SOCIAL PAROQUIAL PADRE ÂNGELO FERREIRA PINTO</strong> – Instituição Particular de Solidariedade Social.
        <br />
        IPSS – Inscrição na Segurança Social, no livro 2 com o nº 50/84, registada na Direção Geral da Segurança Social
      </p>

      <p>
        <strong className="font-bold">NIB: Número de Identificação Bancária</strong><br />
        0035 2073 00002809330 23<br />
        BIC SWIFT: CGDIPTPL
      </p>

      <p>
        <strong className="font-bold">IBAN: Número internacional de conta bancária</strong><br />
        PT50 0035 2073 00002809330 23
      </p>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Publicitação de Contas</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          2014, 2015, 2016, 2017, 2018,
          2019, 2020, 2021, 2022, 2023, 2024,
        ].map((ano) => (
          <a
            key={ano}
            href={`/financeira/contas_${ano}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition"
          >
            <DocumentArrowDownIcon className="w-6 h-6 text-blue-600" />
            <span className="text-sm text-blue-800 font-medium">
              Publicitação de contas - {ano}
            </span>
          </a>
        ))}
      </div>
    </section>
  </div>
),
  'Apoios': (
    <div className="space-y-6 text-gray-700">
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Portugal 2020</h3>
        <img
          src="/projeto2020.jpg"
          alt="Portugal 2020"
          className="rounded-lg shadow-md mx-auto"
        />
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Ministério da Educação</h3>
        <img
          src="/20240112_152841-2048x1460.jpg"
          alt="Ministério da Educação"
          className="rounded-lg shadow-md mx-auto"
        />
      </section>
    </div>
  ),
  'Recrutamento': () => (
  <div className="space-y-6 text-gray-700 text-sm">
    <section className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">Candidatura Espontânea</h3>
      <p>
        Neste momento não estamos a recrutar para nenhuma função específica. No entanto,
        se quer tornar-se colaborador do Centro Padre Ângelo, faça aqui a sua candidatura
        espontânea (todos os campos devem ser preenchidos):
      </p>

      <FormularioRecrutamento />
    </section>
  </div>
),
  'Livro de Reclamações': (
  <div className="space-y-6 text-gray-700">
    <section className="space-y-4 text-center">
      <img
        src="/i006575.png"
        alt="Livro de Reclamações"
        className="w-38 mx-auto rounded-md shadow"
      />

      <a
        href="https://www.livroreclamacoes.pt/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md shadow transition"
      >
        <PencilSquareIcon className="w-5 h-5" />
        Aceder ao Livro de Reclamações
      </a>
    </section>
  </div>
),
  'Canal de Denúncia': (
    <div className="space-y-6 text-gray-700">
      <section className="space-y-3">
        <p>
          A Lei n.º 93/2021, 20 de dezembro, veio estabelecer o regime geral de proteção de denunciantes de infrações, transpondo para o ordenamento jurídico nacional a Diretiva (UE) 2019/1937 do Parlamento Europeu e do Conselho, de 23 de outubro de 2019, (Diretiva de Whistleblowing), relativa à proteção das pessoas que denunciam violações do direito da União.
        </p>
        <p>
          O Centro Social Paroquial Padre Ângelo Ferreira Pinto, doravante designado por Centro Padre Ângelo, que se rege por elevados níveis éticos e de integridade, entendendo que esta temática se afigura, nos dias de hoje, como crucial para o seu sucesso e reputação, aprovou um Regulamento do Canal de Denúncia Interna.
        </p>
		<h4 className="text-xl font-semibold text-blue-600">Consideram-se infrações os atos ou omissões, praticados de forma dolosa ou negligente, que se encontram previstos e descritos no número 1 do artigo 2º da Lei n.º 93/2021, de 20 de dezembro, bem como no art. 3º do Decreto-Lei nº 109-E/2021, nomeadamente nos seguintes domínios:</h4>
		<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
			{/* Infância */}
			<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
				<ul className="list-disc list-inside space-y-1 text-gray-700">
					<li>Contratação pública;</li>
					<li>Prevenção do branqueamento de capitais e do financiamento do terrorismo;</li>
					<li>Segurança e conformidade dos produtos e serviços prestados;</li>
					<li>Segurança dos transportes;</li>					
					<li>Proteção do ambiente;</li>
					<li>Proteção contra radiações e segurança nuclear;</li>
					<li>Segurança dos alimentos para consumo humano e animal, saúde animal e bem-estar animal;</li>
					<li>Saúde Pública;</li>					
					<li>Defesa do consumidor;</li>
					<li>Proteção da privacidade e dos dados pessoais e segurança da rede e dos sistemas de informação.</li>
				</ul>
			</div>
		</div>
        <p>
          Considera-se Denunciante, pessoa singular que denuncie ou divulgue publicamente uma infração com fundamento em informações obtidas no âmbito da sua atividade profissional, independentemente da natureza desta atividade e do setor em que é exercida.
        </p>
		<h4 className="text-xl font-semibold text-blue-600">Podem ser considerados Denunciantes:</h4>
		<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
			{/* Infância */}
			<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
				<ol type="i" className="list-[lower-roman] list-inside space-y-1 text-gray-700">
					<li>Trabalhadores;</li>
					<li>Os prestadores de serviços, contratantes, subcontratantes e fornecedores, bem como quaisquer pessoas que atuem sob a sua direção ou supervisão;</li>
					<li>Titulares de participações sociais, membros de órgãos de administração, gestão e órgãos fiscais ou de supervisão de pessoas coletivas, incluindo membros não executivos;</li>
					<li>Os voluntários e estagiários (remunerados ou não remunerados) do Centro Padre Ângelo.</li>					
				</ol>
			</div>
		</div>
		
		<p>
          Consulte <RegulamentoModal /> o Regulamento do Canal de Denúncia Interna
        </p>
		
		<h4 className="text-xl font-semibold text-blue-600">A comunicação de quaisquer denúncias ao abrigo e nos termos do presente Regulamento far-se-á através de um Canal de Denúncia Interna a qual poderá ser efetuada pelos seguintes meios, à escolha do autor da comunicação:</h4>
		
		<p>
          O Centro Social Paroquial Padre Ângelo Ferreira Pinto, doravante designado por Centro Padre Ângelo, que se rege por elevados níveis éticos e de integridade, entendendo que esta temática se afigura, nos dias de hoje, como crucial para o seu sucesso e reputação, aprovou um Regulamento do Canal de Denúncia Interna.
        </p>

		<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
			<h4 className="font-semibold mb-2 text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">Alojamento</h4>
			<ol type="a" className="list-[lower-alpha] list-inside space-y-1 text-gray-700">
				<li><strong>Presencial:</strong> na Receção do Centro Padre Ângelo, sita na Praceta Padre Ângelo Ferreira Pinto, n.º 7, 4455-469 Perafita;</li>
				<li><strong>Por escrito:</strong>
					<ol type="i" className="ml-5 list-[lower-roman]">
						<li>Mediante carta remetida para o endereço postal Praceta Padre Ângelo Ferreira Pinto, n.º 7, 4455-469 Perafita, com indicação de “confidencial”, com o assunto “Denúncia” e remetida ao cuidado do responsável pelo cumprimento normativo do Regime Geral de Prevenção de Corrupção;</li>
						<li>Mediante preenchimento do formulário <FormularioDenuncia /></li>
					</ol>
				</li>
			</ol>
		</div>
	  
	  </section>

    </div>
  ),
  'Contactos': ({ onOpenForm }: { onOpenForm: () => void }) => (
  <div className="space-y-6 text-gray-700 text-sm">
    <section className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
      <p>Chamada para rede fixa nacional: <strong>(+351) 229 996 731</strong></p>

      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
      <p><a href="mailto:secretaria@centropadreangelo.pt" className="text-blue-600 hover:underline">secretaria@centropadreangelo.pt</a></p>
	  
	  <button
        onClick={onOpenForm}
        className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Contacta-nos
      </button>
    </section>

      <h3 className="text-lg font-semibold text-gray-900">Morada</h3>
      <p>
        Praceta Padre Ângelo Ferreira Pinto, 7<br />
        4455-469 – Perafita<br />
        Matosinhos – Portugal
      </p>

      <h3 className="text-lg font-semibold text-gray-900">GPS</h3>
      <p>Latitude: 41º 13’ 29.2938”<br />Longitude: -8º 41’ 50.46”</p>

      {/* Mapa embed do Google Maps */}
      <div className="mt-4">
        <iframe
          className="w-full h-64 rounded-md shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11968.130176705412!2d-8.7035!3d41.2248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e617f47463%3A0x4b623df5be79aa44!2sPerafita!5e0!3m2!1spt-PT!2spt!4v1710000000000"
          loading="lazy"
        ></iframe>
      </div>

    <section className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">Localização</h3>
      <p>
        Localizada em Perafita, um local sossegado do concelho de Matosinhos, e de fácil acesso, situa-se a 10 min do Grande Porto, 5 min de Matosinhos e 10 da Póvoa de Varzim.
      </p>
	  
	  <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
			{/* Infância */}
			<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
				<ul className="list-disc list-inside space-y-1 text-gray-700">
					<li>Carro: A28 – Saída 10 (sentido Porto – Póvoa de Varzim)</li>
					<li>Autocarro STCP: 508 (paragem Perafita)</li>
					<li>Camioneta Resende: 118 e 119</li>
					<li>Pontos de Referência: Igreja de Perafita, Cemitério e Junta de Freguesia</li>					
					<li>Estacionamento: próprio, no local</li>
				</ul>
			</div>
		</div>
    </section>
  </div>
),
  'Notícias': 'Últimas notícias, eventos ou destaques...',
}

export default function Footer() {
  const [modalAberto, setModalAberto] = useState<string | null>(null)
  const [mostrarForm, setMostrarForm] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">
          {/* Coluna 1: Identidade + contacto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo" className="w-20 h-20" />
              <h4 className="text-lg font-semibold">Centro Padre Ângelo</h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Praceta Padre Ângelo Ferreira Pinto, 7<br />
              4455-469 – Perafita<br />
              Matosinhos – Portugal<br />
              Chamada para rede fixa nacional<br />
              <span className="font-semibold">(+351) 229 996 731</span>
            </p>
          </div>

          {/* Coluna 2: Institucional */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Institucional</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setModalAberto('O Centro')} className="hover:underline">O Centro</button></li>
              <li><button onClick={() => setModalAberto('Informação Financeira')} className="hover:underline">Informação Financeira</button></li>
			  <li><button onClick={() => setModalAberto('Apoios')} className="hover:underline">Apoios</button></li>
              <li><button onClick={() => setModalAberto('Recrutamento')} className="hover:underline">Recrutamento</button></li>
            </ul>
          </div>

          {/* Coluna 3: Transparência */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Transparência</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setModalAberto('Livro de Reclamações')} className="hover:underline">Livro de Reclamações</button></li>
              <li><button onClick={() => setModalAberto('Canal de Denúncia')} className="hover:underline">Canal de Denúncia</button></li>
            </ul>
          </div>

          {/* Coluna 4: Outros */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Outros</h4>
            <ul className="space-y-2">
			  <li><button onClick={() => setModalAberto('Contactos')} className="hover:underline">Contactos</button></li>
              <li><button onClick={() => setModalAberto('Notícias')} className="hover:underline">Notícias</button></li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Nota de direitos reservados */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Centro Social e Paroquial Pe. Ângelo Ferreira Pinto. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modal dinâmico */}
      {modalAberto && (
		  <Modal
			title={modalAberto}
			onClose={() => {
			  setModalAberto(null)
			  setMostrarForm(false)
			}}
			open={true}
		  >
			{typeof secções[modalAberto as keyof typeof secções] === 'function'
			  ? (secções[modalAberto as keyof typeof secções] as any)({ onOpenForm: () => setMostrarForm(true) })
			  : secções[modalAberto as keyof typeof secções]}
		  </Modal>
	  )}
	  
	  {mostrarForm && (
		  <Modal
			title="Pedido de Informação"
			onClose={() => setMostrarForm(false)}
			open={true}
		  >
			<FormularioContato />
		  </Modal>
		  

	  )}
    </>
  )
}

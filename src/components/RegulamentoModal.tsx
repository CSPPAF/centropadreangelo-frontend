"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import FormularioDenuncia from './FormularioDenuncia'

export default function RegulamentoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-600 underline hover:text-blue-800 transition">
          aqui
        </button>
      </DialogTrigger>
      <DialogContent className="!w-full !max-w-7xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Regulamento do Canal de Denúncia Interna</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-gray-800">
          <p><strong>Nota Introdutória</strong></p>
          <p>
			A Lei n.º 93/2021, 20 de dezembro, veio estabelecer o regime geral de proteção de denunciantes de infrações, transpondo para o ordenamento jurídico nacional a Diretiva (UE) 2019/1937 do Parlamento Europeu e do Conselho, de 23 de outubro de 2019, (Diretiva de Whistleblowing), relativa à proteção das pessoas que denunciam violações do direito da União.
		  </p>
          <p>
			O Centro Social Paroquial Padre Ângelo Ferreira Pinto, doravante designado por Centro Padre Ângelo, que se rege por elevados níveis éticos e de integridade, entendendo que esta temática se afigura, nos dias de hoje, como crucial para o seu sucesso e reputação, aprovou o presente Regulamento do Canal de Denúncia Interna.
		  </p>
		  <p>
		    O Centro Padre Ângelo visa encorajar aqueles que de boa-fé suspeitem da prática de condutas ilegais, no seio da sua Instituição, a comunicar os factos em causa, através de uma linha de denúncia, de uma forma segura e sem sofrer retaliações. Além disso, o Centro Padre Ângelo compromete-se a agir de forma imparcial, em relação a qualquer indivíduo identificado numa denúncia, comprometendo-se a coma uma investigação isenta e eficaz.
		  </p>		  
		  <ol className="list-decimal list-inside space-y-1 text-gray-700">
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">OBJETO:</strong>
				<ol className="list-decimal ml-6">
					<li>
						O Centro Padre Ângelo adota o presente Regulamento com o objetivo de, para além de assegurar o cumprimento de uma obrigação legal, estabelecer um conjunto de regras e procedimento internos para a receção, registo e tratamento de comunicações de denúncias de infrações, em conformidade com as disposições legais e regulamentares.
					</li>
					<li>
						Na prossecução deste objetivo, as comunicações de infrações nos termos do presente Regulamento serão submetidas a um sistema eficaz, célere e idóneo à sua detenção, investigação e resolução, salvaguardando os princípios da confidencialidade e não retaliação nas relações com os autores da comunicação, bem como nas relações com as pessoas e terceiros, incluindo pessoas coletivas, que auxiliem ou estejam ligados ao Denunciante.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">ÂMBITO DE APLICAÇÃO:</strong>
				<ol className="list-decimal ml-6">
					<li>
						O presente Regulamento estabelece regras de receção, registo e tratamento das comunicações de infrações ocorridas.
					</li>
					<li>
						O presente Regulamento não substitui a obrigatoriedade de denúncia nos casos e termos previstos na lei penal e processual penal.
					</li>
					<li>
						Para efeito do presente Regulamento consideram-se infrações os atos ou omissões, praticados de forma dolosa ou negligente, que se encontram previstos e descritos no número 1 do artigo 2º da Lei n.º 93/2021, de 20 de dezembro, bem como no art. 3º do Decreto-Lei nº 109-E/2021, nomeadamente nos seguintes domínios:
					</li>
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
					<li>
						Refletindo a cultura de responsabilidade, boas práticas e no cumprimento do quadro legislativo, o Centro Padre Ângelo adotou os meios adequados e definiu os procedimentos aplicáveis para receber, tratar e arquivar as denúncias que venham a ser efetuadas.
					</li>
					<li>
						As denúncias apresentadas que excedam o âmbito dos domínios cobertos pelo ponto 2.3. supramencionado não poderão ser objeto de tratamento.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">DENUNCIANTE:</strong>
				<ol className="list-decimal ml-6">
					<li>
						Para efeitos do presente Regulamento, considera-se Denunciante, pessoa singular que denuncie ou divulgue publicamente uma infração com fundamento em informações obtidas no âmbito da sua atividade profissional, independentemente da natureza desta atividade e do setor em que é exercida.
					</li>
					<li>
						Podem ser considerados Denunciantes, nomeadamente, (i) trabalhadores; (ii) os prestadores de serviços, contratantes, subcontratantes e fornecedores, bem como quaisquer pessoas que atuem sob a sua direção ou supervisão; (iii) titulares de participações sociais, membros de órgãos de administração, gestão e órgãos fiscais ou de supervisão de pessoas coletivas, incluindo membros não executivos e (iv) os voluntários e estagiários (remunerados ou não remunerados) do Centro Padre Ângelo.
					</li>
					<li>
						A qualidade de Denunciante é extensível também quando são denunciadas informações sobre violações obtidas numa relação, como as referidas no ponto anterior, que, entretanto tenham terminado. Bem como, quando a relação profissional não se tenha iniciado, nos casos em que o Denunciante tenha obtido a informação sobre a denúncia numa fase de negociação pré-contratual.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">AUXILIARES DO DENUNCIANTE:</strong>
				<ol className="list-decimal ml-6">
					<li>
						As garantias referidas no artigo anterior são extensíveis, com as devidas adaptações, a: (i) pessoa singular que auxilie o Denunciante no procedimento de denúncia e cujo auxílio deva ser confidencial, incluindo representantes sindicais ou representantes dos trabalhadores; (ii) terceiro que esteja ligado ao Denunciante, designadamente colega de trabalho ou familiar, e possa ser alvo de retaliação num contexto profissional; e (iii) pessoas coletivas ou entidades equiparadas que sejam detidas ou controladas pelo Denunciante, para as quais o Denunciante trabalhe ou com as quais esteja de alguma forma ligado num contexto profissional.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">DENÚNCIA INTERNA E PROIBIÇÃO DE DIVULGAÇÃO PÚBLICA:</strong>
				<ol className="list-decimal ml-6">
					<li>
						O Denunciante não poderá recorrer previamente a canais de denúncia externa ou divulgação pública de uma infração, exceto nos casos referidos nos n.ºs 2 e 3 do artigo 7º da Lei n.º 93/2021, de 20 de dezembro.
					</li>
					<li>
						O Denunciante que, fora dos casos legalmente previstos, divulgue publicamente uma infração ou dela der conhecimento a órgão de comunicação social ou a jornalista, não beneficia da proteção conferida por lei.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">RECEÇÃO, REGISTO E TRATAMENTO DE COMUNICAÇÕES DE INFRAÇÕES:</strong>
				<ol className="list-decimal ml-6">
					<li>
						A comunicação de quaisquer denúncias ao abrigo e nos termos do presente Regulamento far-se-á através de um Canal de Denúncia Interna a qual poderá ser efetuada pelos seguintes meios, à escolha do autor da comunicação:
					</li>
					<ol type="a" className="list-[lower-alpha] list-inside space-y-1 text-gray-700">
						<li><strong>Presencial:</strong> na Receção do Centro Padre Ângelo, sita na Praceta Padre Ângelo Ferreira Pinto, n.º 7, 4455-469 Perafita;</li>
						<li><strong>Por escrito:</strong>
							<ol type="i" className="ml-5 list-[lower-roman]">
								<li>Mediante carta remetida para o endereço postal Praceta Padre Ângelo Ferreira Pinto, n.º 7, 4455-469 Perafita, com indicação de “confidencial”, com o assunto “Denúncia” e remetida ao cuidado do responsável pelo cumprimento normativo do Regime Geral de Prevenção de Corrupção;</li>
								<li>Mediante preenchimento do formulário <FormularioDenuncia /></li>
							</ol>
						</li>
					</ol>
					<li>
						As comunicações recebidas são objeto de registo pelo departamento/área competente, que deverá conter:
					</li>
					<ol type="a" className="list-[lower-alpha] list-inside space-y-1 text-gray-700">
						<li>Número identificativo;</li>
						<li>Data de receção;</li>						
						<li>Descrição breve da natureza da comunicação, e, quando aplicável;</li>
						<li>Medidas adotadas face à comunicação;</li>
						<li>Estado do processo.</li>
					</ol>
					<li>
						O registo das comunicações recebidas será mantido permanentemente atualizado.
					</li>
					<li>
						Caso tenha fornecido um contacto, o Denunciante será notificado, num prazo de sete dias, da receção de denúncia, e informado dos requisitos, autoridades competentes, forma e admissibilidade da denúncia externa, nos termos do n.º 2 do art. 7º e dos artigos 12º e 14º da Lei 93/2021, de 20 de dezembro.
					</li>
					<li>
						Após estarem registadas, as comunicações são alvo de análise preliminar por forma a certificar o grau de credibilidade da comunicação, o caráter irregular e/ou ilícito do comportamento reportado, a viabilidade da investigação e a identificação das pessoas envolvidas ou que tenham conhecimento de factos relevantes, e que por isso devam ser inquiridas.
					</li>
					<li>
						O relatório de análise preliminar concluirá pelo avanço ou arquivamento da investigação.
					</li>
					<li>
						Caso se considere que a comunicação é infundada, abusiva, contenha informações claramente erróneas ou enganosas, ou tenha sido feita com o intuito único de prejudicar outrem, será promovido o seu arquivamento, a súmula dos fundamentos comunicada ao autor da comunicação (a não ser que este não se tenha identificado), a imediata destruição dos dados pessoais envolvidos, o tratamento estatístico e informação desse arquivamento.
					</li>
					<li>
						Caso se considere que a comunicação é consistente, plausível e verosímil e que os factos relatados são suscetíveis de consubstanciar a prática de uma infração nos termos previstos no presente regulamento iniciar-se-á um processo de investigação, conduzido e supervisionado pela entidade competente consoante o tema reportado.
					</li>
					<li>
						Concluída a fase de investigação prevista no número anterior, será elaborado um relatório com a análise efetuada à denúncia, a descrição dos atos internos realizados, os factos apurados durante a investigação, e apresentada a respetiva decisão devidamente fundamentada. Nesse relatório serão igualmente indicadas eventuais medidas adotadas (ou a adotar) para mitigar o risco identificado e prevenir a reincidência das Infrações relatadas.
					</li>
					<li>
						Caso se entenda necessário e adequado, nomeadamente em função do tipo e da natureza da infração, proceder-se-á à comunicação da infração às autoridades competentes, designadamente as que constam do elenco do n. 2 1 do artigo 12. 2 da Lei n. 2 93/2021, de 20 de dezembro.
					</li>
					<li>
						Serão comunicadas ao Denunciante, num prazo de três meses a contar da data da receção da denúncia, as medidas previstas ou adotadas para dar seguimento à denúncia e a respetiva fundamentação.
					</li>
					<li>
						O órgão, comissão ou pessoa responsável pelo tratamento das denúncias, poderá, sempre que entender necessário, ser auxiliado por outras pessoas internas ou externas, nomeadamente auditores externos ou outros peritos para auxiliarem na investigação, especialmente quando as matérias em causa o justificarem. Estas pessoas ficam igualmente abrangidas pelo dever de confidencialidade previsto neste Regulamento.
					</li>
					<li>
						Sempre que se considere necessário para o cumprimento das disposições previstas neste Regulamento, poderão ser inquiridas quaisquer pessoas cuja inquirição seja relevante para a investigação da denúncia.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">CONFIDENCIALIDADE:</strong>
				<ol className="list-decimal ml-6">
					<li>
						A identidade do Denunciante ou informações que direta ou indiretamente permitam identificar a sua identidade, são de acesso restrito às pessoas responsáveis por receber ou dar seguimento às denúncias.
					</li>
					<li>
						A identidade do Denunciante só é divulgada em decorrência de obrigação legal ou de decisão judicial.
					</li>
					<li>
						Sem prejuízo do disposto em outras disposições legais, a divulgação de informação é precedida de comunicação escrita ao Denunciante indicando os motivos de divulgação dos dados confidenciais em causa.
					</li>
					<li>
						Exceto, se a prestação dessa informação comprometer as investigações ou processos judiciais relacionados.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">TRATAMENTO DE DADOS PESSOAIS E CONSERVAÇÃO DAS DENÚNCIAS:</strong>
				<ol className="list-decimal ml-6">
					<li>
						Os Dados Pessoais recolhidos neste âmbito serão tratados pelo Centro Padre Ângelo.
					</li>
					<li>
						O objetivo do tratamento das informações comunicadas ao abrigo desta Política é a receção e seguimento das denúncias apresentadas no Canal de Denúncia Interna.
					</li>
					<li>
						É, neste âmbito, assegurado aos Denunciantes o direito ao acesso, retificação (de dados inexatos, incompletos ou equívocos) e eliminação de dados por si comunicados, exceto se contenderem com direitos prevalecentes, através dos meios de comunicação previstos no Artigo seguinte.
					</li>
					<li>
						É igualmente assegurado aos Denunciantes o direito ao acesso à informação sobre factos comunicados que lhes digam respeito, exceto se contenderem com direitos prevalecentes.
					</li>
					<li>
						Não serão conservados dados que manifestamente não sejam relevantes para o tratamento da denúncia, os quais serão imediatamente apagados.
					</li>
					<li>
						O Centro Padre Ângelo apagará de imediato os dados pessoais que manifestamente não forem relevantes para o tratamento da denúncia
O disposto no número anterior não prejudica o dever de conservação de denúncias apresentadas verbalmente, quando essa conservação se faça mediante gravação da comunicação em suporte duradouro e recuperável.
					</li>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">GARANTIAS DO DENUNCIANTE:</strong>
				<ol className="list-decimal ml-6">
					<li>
						Considera-se ato de retaliação qualquer ato ou omissão (ainda que sob a forma de ameaça ou tentativa) que, direta ou indiretamente, ocorrendo em contexto profissional e motivado por denúncia interna, externa ou divulgação pública, cause ou possa causar danos patrimoniais ou não patrimoniais ao Denunciante que, de boa-fé, e tendo fundamento sério para crer que as informações são, no momento da denúncia ou da divulgação pública, verdadeiras denuncie ou divulgue publicamente uma infração. Presumem-se motivados por denúncia (interna ou externa) ou divulgação pública, até prova em contrário os seguintes atos, quando praticados até dois anos após essa denúncia ou divulgação:
					</li>
					<div className="grid grid-cols-1 md:grid-cols-1 gap-10">
						{/* Infância */}
						<div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								<li>Alterações das condições de trabalho, tais como funções, horário, local de trabalho ou retribuição, não promoção do trabalhador ou incumprimento de deveres laborais;</li>
								<li>Suspensão do contrato de trabalho; Avaliação negativa de desempenho ou referência negativa para fins de emprego;</li>
								<li>Não conversão de um contrato de trabalho a termo num contrato sem termo, sempre que o trabalhador tivesse expectativas legítimas nessa conversão;</li>
								<li>Não renovação de um contrato de trabalho a termo; Sanções disciplinares, incluindo despedimento;</li>
								<li>Inclusão numa lista, com base em acordo à escala setorial, que possa levar à impossibilidade de, no futuro, o Denunciante encontrar emprego no setor ou indústria em causa;</li>
								<li>Resolução de contrato de fornecimento ou de prestação de serviços;</li>
								<li>Segurança dos alimentos para consumo humano e animal, saúde animal e bem-estar animal.</li>								
							</ul>
						</div>
					</div>
				</ol>
			 </li>
			 <li>
				<strong className="font-semibold mb-2 text-blue-600">GARANTIAS DO DENUNCIANTE:</strong>
				<ol className="list-decimal ml-6">
					<li>
						O Denunciante não pode ser responsabilizado disciplinar, civil, contraordenacional ou criminalmente por denúncia ou divulgação pública de uma Infração feita de acordo com o presente Regulamento, nem pode ser responsabilizado pela obtenção ou pelo acesso às informações que motivem a denúncia ou a divulgação pública, exceto se essa obtenção ou acesso constituírem crime.
					</li>
					<li>
						Sem prejuízo do disposto no número precedente, a conduta daqueles que denunciem indícios de práticas irregulares ou de Infrações, com manifesta falsidade ou má-fé, assim como o desrespeito pelo dever de confidencialidade associado à denúncia, constituirá uma infração suscetível de ser objeto, consoante aplicável, de sanção disciplinar ou de penalização/resolução contratual, adequada e proporcional à infração, sem prejuízo da eventual responsabilidade civil e/ou criminal que possa advir para o autor da prática da referida conduta.
					</li>
				</ol>
			 </li>
		  </ol>
		  <p><strong>Perafita, 18 de junho de 2022</strong></p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
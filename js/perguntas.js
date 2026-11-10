// PARTE 2: dados das duas narrativas.
// entrada = escolha inicial; avancar = próxima etapa da narrativa;
// salto = avanço ou retorno específico dentro da mesma narrativa.
// trocar e gameover ficam desativados nesta versão de estudo.
export const perguntas = [
	{ // 0 — pergunta inicial
		caminho: "inicio",
		enunciado:
			"Ao sair da escola, você vê mensagens dizendo que a água " +
			"do bairro pode estar contaminada. O que faz primeiro?",
		alternativas: [
			{
				texto: "Quero testar formas de filtrar a água e descobrir como funcionam.",
				afirmacao: ["Decidiu testar formas de filtrar a água."],
				tipo: "entrada", proxima: 1
			},
			{
				texto: "Quero verificar os riscos e confirmar a informação antes de agir.",
				afirmacao: ["Decidiu verificar os riscos e as informações sobre a água."],
				tipo: "entrada", proxima: 2
			}
		]
	},
	{ // 1 — A1: início da experimentação
		caminho: "A",
		enunciado:
			"Você decide explorar formas de filtrar a água. Na mesma semana, " +
			"a professora solicita um trabalho sobre água potável. " +
			"Como você pretende começar?",
		alternativas: [
			{
				texto: "Pesquisar como funciona um filtro e anotar o que precisa conferir.",
				afirmacao: ["Pesquisou como funciona um filtro e anotou o que precisava conferir."],
				tipo: "avancar", proxima: 3
			},
			{
				texto: "Usar as fontes confiáveis vistas em aula e planejar um modelo simples.",
				afirmacao: ["Usou fontes vistas em aula para planejar um modelo simples."],
				tipo: "salto", proxima: 4
			},
			{
				texto: "Investigar a mensagem sobre possível contaminação no bairro.",
				afirmacao: ["Decidiu investigar a mensagem sobre possível contaminação."],
				tipo: "trocar", proxima: 2, disponivel: false
			}
		]
	},
	{ // 2 — B1: início da investigação
		caminho: "B",
		enunciado:
			"Antes de fazer experimentos, você quer entender os riscos. " +
			"Nesse momento, recebe um áudio suspeito atribuído à diretora, " +
			"dizendo que a água do bairro está contaminada. O que você faz?",
		alternativas: [
			{
				texto: "Procurar a origem do áudio antes de compartilhar.",
				afirmacao: ["Procurou a origem do áudio antes de compartilhar."],
				tipo: "avancar", proxima: 7
			},
			{
				texto: "Consultar os canais oficiais da escola e da companhia de água.",
				afirmacao: ["Consultou os canais oficiais antes de agir."],
				tipo: "salto", proxima: 8
			},
			{
				texto: "Levar o alerta para o trabalho escolar sobre filtragem da água.",
				afirmacao: ["Levou o alerta para o trabalho escolar sobre filtragem da água."],
				tipo: "trocar", proxima: 1, disponivel: false
			}
		]
	},
	{ // 3 — A2: conferir informações
		caminho: "A",
		enunciado:
			"Uma publicação afirma que ferver a água remove qualquer " +
			"contaminante, mas não cita fontes. Qual atitude você toma?",
		alternativas: [
			{
				texto: "Conferir orientações confiáveis e planejar o teste.",
				afirmacao: ["Conferiu fontes confiáveis antes de planejar o teste."],
				tipo: "avancar", proxima: 4
			},
			{
				texto: "Refazer a pesquisa inicial buscando uma fonte oficial.",
				afirmacao: ["Retomou a pesquisa buscando uma fonte oficial."],
				tipo: "salto", proxima: 1
			},
			{
				texto: "Inventar uma fonte e apresentá-la como verdadeira.",
				afirmacao: ["Inventou uma fonte para sustentar a informação sobre a água."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 4 — A3: planejar a demonstração
		caminho: "A",
		enunciado:
			"Você vai demonstrar como um filtro pode reduzir partículas " +
			"presentes na água. Como preparar o exemplo para a turma?",
		alternativas: [
			{
				texto: "Montar um filtro demonstrativo com materiais seguros e pedir revisão.",
				afirmacao: ["Preparou um filtro demonstrativo para revisão."],
				tipo: "avancar", proxima: 5
			},
			{
				texto: "Usar um modelo já revisado em aula e organizar a apresentação.",
				afirmacao: ["Escolheu um modelo já revisado em aula."],
				tipo: "salto", proxima: 6
			},
			{
				texto: "Usar a investigação do alerta para orientar os moradores.",
				afirmacao: ["Decidiu colaborar com a orientação dos moradores sobre a água."],
				tipo: "trocar", proxima: 8, disponivel: false
			}
		]
	},
	{ // 5 — A4: revisar o material
		caminho: "A",
		enunciado:
			"Um colega observa que seu material não explica os limites " +
			"de um filtro caseiro. O que você faz?",
		alternativas: [
			{
				texto: "Explicar que o modelo não garante água própria para consumo.",
				afirmacao: ["Explicou os limites do filtro caseiro no material."],
				tipo: "avancar", proxima: 6
			},
			{
				texto: "Voltar à pesquisa para conferir as orientações de segurança.",
				afirmacao: ["Voltou às fontes para revisar as orientações de segurança."],
				tipo: "salto", proxima: 3
			},
			{
				texto: "Afirmar que qualquer filtro caseiro torna a água potável.",
				afirmacao: ["Afirmou que qualquer filtro caseiro torna a água potável."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 6 — A5: organizar a apresentação
		caminho: "A",
		enunciado:
			"Antes da apresentação, você decide como organizar " +
			"o trabalho sobre filtragem. Qual será sua atitude?",
		alternativas: [
			{
				texto: "Organizar o modelo, as fontes e os cuidados de segurança.",
				afirmacao: ["Organizou o modelo, as fontes e os cuidados de segurança."],
				tipo: "avancar", proxima: 11
			},
			{
				texto: "Voltar à revisão para explicar melhor os limites do filtro.",
				afirmacao: ["Retomou a revisão dos limites do filtro."],
				tipo: "salto", proxima: 5
			},
			{
				texto: "Levar o material ao encontro de orientação dos moradores.",
				afirmacao: ["Decidiu levar o material sobre água ao encontro dos moradores."],
				tipo: "trocar", proxima: 10, disponivel: false
			}
		]
	},
	{ // 7 — B2: conferir a origem do áudio
		caminho: "B",
		enunciado:
			"O áudio não tem uma publicação original identificada. " +
			"Como continuar a investigação?",
		alternativas: [
			{
				texto: "Consultar os canais oficiais da escola e da companhia de água.",
				afirmacao: ["Consultou os canais oficiais sobre a qualidade da água."],
				tipo: "avancar", proxima: 8
			},
			{
				texto: "Retomar a busca inicial e procurar a origem do áudio.",
				afirmacao: ["Retomou a busca pela origem do áudio."],
				tipo: "salto", proxima: 2
			},
			{
				texto: "Acusar publicamente um morador sem qualquer prova.",
				afirmacao: ["Acusou um morador publicamente sem provas."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 8 — B3: planejar a orientação
		caminho: "B",
		enunciado:
			"A direção confirma que não enviou o áudio e recomenda consultar " +
			"os canais oficiais sobre a qualidade da água. Você decide " +
			"ajudar os moradores a verificar alertas. Como agir?",
		alternativas: [
			{
				texto: "Preparar uma campanha e conferir as orientações sobre água.",
				afirmacao: ["Preparou uma campanha de orientação sobre a água."],
				tipo: "avancar", proxima: 9
			},
			{
				texto: "Usar o aviso oficial já conferido e organizar o encontro.",
				afirmacao: ["Escolheu um aviso oficial conferido para o encontro."],
				tipo: "salto", proxima: 10
			},
			{
				texto: "Transformar o caso em uma demonstração de filtragem na escola.",
				afirmacao: ["Decidiu preparar uma demonstração de filtragem na escola."],
				tipo: "trocar", proxima: 4, disponivel: false
			}
		]
	},
	{ // 9 — B4: revisar a campanha
		caminho: "B",
		enunciado:
			"Na revisão das orientações, surge uma dúvida sobre a origem " +
			"do alerta de contaminação. Como você responde?",
		alternativas: [
			{
				texto: "Explicar o que foi confirmado e o que ainda não se sabe.",
				afirmacao: ["Separou os fatos confirmados do que ainda não se sabe."],
				tipo: "avancar", proxima: 10
			},
			{
				texto: "Voltar à investigação para conferir a origem do alerta.",
				afirmacao: ["Retomou a investigação para conferir a origem do alerta."],
				tipo: "salto", proxima: 7
			},
			{
				texto: "Criar um alerta falso de contaminação e divulgá-lo como verdadeiro.",
				afirmacao: ["Criou e divulgou um alerta falso de contaminação."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 10 — B5: organizar o encontro
		caminho: "B",
		enunciado:
			"Você prepara um encontro sobre a qualidade da água. O que " +
			"precisa fazer antes de apresentar o material?",
		alternativas: [
			{
				texto: "Organizar os avisos oficiais e as dicas para verificar informações.",
				afirmacao: ["Organizou os avisos oficiais e as dicas de verificação."],
				tipo: "avancar", proxima: 12
			},
			{
				texto: "Voltar à revisão para melhorar as orientações sobre água.",
				afirmacao: ["Voltou à revisão das orientações sobre água."],
				tipo: "salto", proxima: 9
			},
			{
				texto: "Divulgar um boato sobre a água sem verificar as informações.",
				afirmacao: ["Divulgou um boato sobre a água sem verificar as informações."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 11 — ponto de continuidade da narrativa A
		caminho: "A",
		pausa: true,
		enunciado:
			"Seu material sobre filtragem está organizado para a apresentação " +
			"na escola. O próximo desafio será apresentar sua proposta.",
		alternativas: []
	},
	{ // 12 — ponto de continuidade da narrativa B
		caminho: "B",
		pausa: true,
		enunciado:
			"Seu material sobre a qualidade da água está organizado para o " +
			"encontro com os moradores. O próximo desafio será apresentar as orientações.",
		alternativas: []
	}
];
// PARTE 2: dados das duas narrativas.
// entrada = escolha inicial; avancar = próxima etapa da narrativa;
// salto = avanço ou retorno específico dentro da mesma narrativa.
// trocar e gameover ficam desativados nesta versão de estudo.
export const perguntas = [
	{ // 0 — pergunta inicial
		caminho: "inicio",
		enunciado:
			"Ao chegar em casa, você percebe que o consumo de água aumentou. " +
			"Como começa a investigar?",
		alternativas: [
			{
				texto: "Quero observar meus hábitos e descobrir onde posso economizar.",
				afirmacao: ["Decidiu observar os hábitos para encontrar formas de economizar água."],
				tipo: "entrada", proxima: 1
			},
			{
				texto: "Quero procurar a causa do aumento antes de decidir o que fazer.",
				afirmacao: ["Decidiu investigar a causa do aumento no consumo de água."],
				tipo: "entrada", proxima: 2
			}
		]
	},
	{ // 1 — A1: início da experimentação
		caminho: "A",
		enunciado:
			"Você decide observar os hábitos de consumo. Na mesma semana, " +
			"a professora propõe um trabalho sobre economia de água. " +
			"Como você pretende começar?",
		alternativas: [
			{
				texto: "Registrar por alguns dias o tempo de banho e o uso das torneiras.",
				afirmacao: ["Registrou hábitos diários para entender o consumo de água."],
				tipo: "avancar", proxima: 3
			},
			{
				texto: "Usar os dados da conta para estimar a economia de uma mudança.",
				afirmacao: ["Usou os dados da conta para estimar uma possível economia."],
				tipo: "salto", proxima: 4
			},
			{
				texto: "Investigar o aumento de consumo percebido por moradores.",
				afirmacao: ["Decidiu investigar o aumento de consumo no bairro."],
				tipo: "trocar", proxima: 2, disponivel: false
			}
		]
	},
	{ // 2 — B1: início da investigação
		caminho: "B",
		enunciado:
			"A conta chega com um consumo bem maior, mas sua rotina parece " +
			"a mesma. O que você pretende fazer?",
		alternativas: [
			{
				texto: "Comparar as leituras dos últimos meses e procurar variações.",
				afirmacao: ["Comparou as contas para localizar quando o consumo aumentou."],
				tipo: "avancar", proxima: 7
			},
			{
				texto: "Conferir o hidrômetro e pedir orientação sobre possíveis vazamentos.",
				afirmacao: ["Conferiu o hidrômetro e buscou orientação sobre vazamentos."],
				tipo: "salto", proxima: 8
			},
			{
				texto: "Levar os dados da conta para o trabalho escolar sobre economia.",
				afirmacao: ["Levou os dados de consumo para o trabalho escolar."],
				tipo: "trocar", proxima: 1, disponivel: false
			}
		]
	},
	{ // 3 — A2: conferir informações
		caminho: "A",
		enunciado:
			"Uma publicação diz que uma mudança simples economiza uma " +
			"quantidade exata de água, mas não cita a fonte. Qual atitude você toma?",
		alternativas: [
			{
				texto: "Conferir a estimativa em fontes confiáveis antes de usar no projeto.",
				afirmacao: ["Conferiu fontes confiáveis antes de usar a estimativa."],
				tipo: "avancar", proxima: 4
			},
			{
				texto: "Voltar aos registros e calcular uma estimativa com seus dados.",
				afirmacao: ["Retomou os registros para calcular uma estimativa própria."],
				tipo: "salto", proxima: 1
			},
			{
				texto: "Inventar uma fonte e apresentá-la como verdadeira.",
				afirmacao: ["Inventou uma fonte para sustentar a estimativa de economia."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 4 — A3: planejar a demonstração
		caminho: "A",
		enunciado:
			"Você vai apresentar maneiras de reduzir o consumo de água. " +
			"Como preparar uma demonstração para a turma?",
		alternativas: [
			{
				texto: "Comparar com recipientes medidores duas rotinas de uso da torneira.",
				afirmacao: ["Preparou uma comparação de consumo usando recipientes medidores."],
				tipo: "avancar", proxima: 5
			},
			{
				texto: "Usar uma atividade já testada em aula e organizar a apresentação.",
				afirmacao: ["Escolheu uma atividade já testada em aula."],
				tipo: "salto", proxima: 6
			},
			{
				texto: "Usar a investigação da conta alta para orientar os moradores.",
				afirmacao: ["Decidiu ajudar os moradores a investigar o consumo."],
				tipo: "trocar", proxima: 8, disponivel: false
			}
		]
	},
	{ // 5 — A4: revisar o material
		caminho: "A",
		enunciado:
			"Um colega observa que a economia estimada pode variar entre " +
			"as famílias. O que você faz?",
		alternativas: [
			{
				texto: "Explicar as condições usadas no cálculo e os limites da estimativa.",
				afirmacao: ["Explicou as condições e os limites da estimativa de economia."],
				tipo: "avancar", proxima: 6
			},
			{
				texto: "Voltar aos registros para conferir o cálculo.",
				afirmacao: ["Voltou aos registros para revisar o cálculo de consumo."],
				tipo: "salto", proxima: 3
			},
			{
				texto: "Prometer a mesma redução para todas as casas sem medir o consumo.",
				afirmacao: ["Prometeu uma economia igual para todas as casas sem medições."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 6 — A5: organizar a apresentação
		caminho: "A",
		enunciado:
			"Antes da apresentação, você decide como organizar " +
			"o trabalho sobre economia de água. Qual será sua atitude?",
		alternativas: [
			{
				texto: "Organizar os dados, as estimativas e as sugestões práticas.",
				afirmacao: ["Organizou os dados e as sugestões para economizar água."],
				tipo: "avancar", proxima: 11
			},
			{
				texto: "Voltar à revisão para explicar melhor o cálculo da economia.",
				afirmacao: ["Retomou a revisão do cálculo de economia."],
				tipo: "salto", proxima: 5
			},
			{
				texto: "Levar o material ao encontro de orientação dos moradores.",
				afirmacao: ["Decidiu levar as sugestões de economia ao encontro dos moradores."],
				tipo: "trocar", proxima: 10, disponivel: false
			}
		]
	},
	{ // 7 — B2: conferir a origem do áudio
		caminho: "B",
		enunciado:
			"A comparação mostra um aumento repentino no consumo. " +
			"Como continuar a investigação?",
		alternativas: [
			{
				texto: "Conferir o hidrômetro e pedir orientação à companhia de água.",
				afirmacao: ["Conferiu a leitura do hidrômetro com a companhia de água."],
				tipo: "avancar", proxima: 8
			},
			{
				texto: "Retomar as contas anteriores e comparar os mesmos períodos.",
				afirmacao: ["Retomou as contas anteriores para comparar o consumo."],
				tipo: "salto", proxima: 2
			},
			{
				texto: "Acusar um morador de desperdiçar água sem qualquer prova.",
				afirmacao: ["Acusou um morador de desperdício sem provas."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 8 — B3: planejar a orientação
		caminho: "B",
		enunciado:
			"A companhia orienta verificar possíveis vazamentos e explica " +
			"como comunicar um problema. Você decide ajudar os moradores " +
			"a economizar água. Como agir?",
		alternativas: [
			{
				texto: "Preparar uma campanha de dicas e conferir cada recomendação.",
				afirmacao: ["Preparou dicas de economia e conferiu as recomendações."],
				tipo: "avancar", proxima: 9
			},
			{
				texto: "Usar as orientações oficiais e planejar o encontro.",
				afirmacao: ["Escolheu orientações oficiais para o encontro."],
				tipo: "salto", proxima: 10
			},
			{
				texto: "Transformar as contas em uma atividade de estimativa na escola.",
				afirmacao: ["Decidiu preparar uma atividade sobre consumo na escola."],
				tipo: "trocar", proxima: 4, disponivel: false
			}
		]
	},
	{ // 9 — B4: revisar a campanha
		caminho: "B",
		enunciado:
			"Ao revisar a campanha, surge uma dúvida sobre quanto cada " +
			"dica realmente economiza. Como você responde?",
		alternativas: [
			{
				texto: "Explicar que a economia depende dos hábitos de cada casa.",
				afirmacao: ["Explicou que a economia varia conforme os hábitos e a casa."],
				tipo: "avancar", proxima: 10
			},
			{
				texto: "Voltar às fontes para conferir as estimativas.",
				afirmacao: ["Retomou as fontes para conferir as estimativas de economia."],
				tipo: "salto", proxima: 7
			},
			{
				texto: "Divulgar uma economia garantida sem comprovar o resultado.",
				afirmacao: ["Divulgou uma promessa de economia sem comprovação."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 10 — B5: organizar o encontro
		caminho: "B",
		enunciado:
			"Você prepara um encontro sobre consumo de água. O que " +
			"precisa fazer antes de apresentar o material?",
		alternativas: [
			{
				texto: "Organizar dicas para acompanhar o consumo e evitar desperdícios.",
				afirmacao: ["Organizou dicas para acompanhar o consumo e evitar desperdícios."],
				tipo: "avancar", proxima: 12
			},
			{
				texto: "Voltar à revisão para conferir as estimativas de economia.",
				afirmacao: ["Voltou à revisão das estimativas de economia."],
				tipo: "salto", proxima: 9
			},
			{
				texto: "Publicar a conta de água de um morador sem autorização.",
				afirmacao: ["Expôs a conta de água de um morador sem autorização."],
				tipo: "gameover", disponivel: false
			}
		]
	},
	{ // 11 — ponto de continuidade da narrativa A
		caminho: "A",
		pausa: true,
		enunciado:
			"Seu material sobre consumo e economia está organizado para a " +
			"apresentação na escola. O próximo desafio será compartilhar as propostas.",
		alternativas: []
	},
	{ // 12 — ponto de continuidade da narrativa B
		caminho: "B",
		pausa: true,
		enunciado:
			"Suas orientações para economizar água estão organizadas para o " +
			"encontro com os moradores. O próximo desafio será compartilhar as dicas.",
		alternativas: []
	}
];
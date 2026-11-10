export const perguntas = [
	{
		enunciado:
			"Ao sair da escola, você descobre uma inteligência " +
			"artificial capaz de criar textos, imagens e vozes. " +
			"Qual é sua primeira reação?",
		alternativas: [
			{
				texto: "Quero experimentar e descobrir o que ela consegue fazer.",
				afirmacao: ["Decidiu experimentar a inteligência artificial."],
				proxima: 1
			},
			{
				texto: "Quero entender os riscos antes de utilizar.",
				afirmacao: ["Decidiu investigar os riscos da inteligência artificial."],
				proxima: 2
			}
		]
	},
	{
		enunciado:
			"Você decide experimentar a ferramenta. Na mesma semana, " +
			"a professora solicita um trabalho sobre inteligência " +
			"artificial. Como você pretende começar?",
		alternativas: []
	},
	{
		enunciado:
			"Antes de experimentar a ferramenta, você procura entender " +
			"seus riscos. Nesse momento, recebe um áudio suspeito " +
			"atribuído à diretora da escola. O que você pretende fazer?",
		alternativas: []
	}
];

let atual = 0;
let historiaFinal = "";

function respostaSelecionada(opcaoSelecionada) {
	const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
	historiaFinal += afirmacao + " ";

	if (opcaoSelecionada.proxima !== undefined) {
		atual = opcaoSelecionada.proxima;
		mostraPergunta();
	}
}

function iniciaJogo() {
	atual = 0;
	mostraPergunta();
}

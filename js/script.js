import { perguntas } from "./perguntas.js";
import { aleatorio } from "./aleatorio.js";

const telaInicial = document.querySelector("#tela-inicial");
const telaJogo = document.querySelector("#tela-jogo");
const botaoIniciar = document.querySelector("#iniciar");
const enunciado = document.querySelector("#enunciado");
const alternativas = document.querySelector("#alternativas");
const historia = document.querySelector("#historia-final");
const marcador = document.querySelector("#marcador");
const continuidade = document.querySelector("#continuidade");

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
	const pergunta = perguntas[atual];
	if (!pergunta) return;

	enunciado.textContent = pergunta.enunciado;
	marcador.textContent = pergunta.pausa ? "Material organizado" : "Uma nova situação";
	continuidade.hidden = !pergunta.pausa;
	alternativas.replaceChildren();

	for (const opcao of pergunta.alternativas) {
		const botao = document.createElement("button");
		botao.type = "button";
		botao.className = "choice";
		botao.textContent = opcao.texto;
		botao.disabled =
			opcao.disponivel === false ||
			!["entrada", "avancar", "salto"].includes(opcao.tipo);

		if (!botao.disabled) {
			botao.addEventListener("click", () => respostaSelecionada(opcao));
		}

		alternativas.append(botao);
	}
}

function respostaSelecionada(opcaoSelecionada) {
	const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
	historiaFinal += afirmacao + " ";
	historia.textContent = historiaFinal.trim();

	if (opcaoSelecionada.proxima !== undefined) {
		atual = opcaoSelecionada.proxima;
		mostraPergunta();
	}
}

function iniciaJogo() {
	atual = 0;
	historiaFinal = "";
	historia.textContent = "Suas decisões aparecerão aqui.";
	telaInicial.hidden = true;
	telaJogo.hidden = false;
	mostraPergunta();
}

botaoIniciar.addEventListener("click", iniciaJogo);
import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoNovamente = document.querySelector(".novamente-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaJogo = document.querySelector(".game");
const progressoEtapa = document.querySelector(".game-progress-value");
const trilhaProgresso = document.querySelector(".game-progress-track");
const preenchimentoProgresso = document.querySelector(".game-progress-fill");

const etapasPorPergunta = {
	0: 0,
	1: 1,
	2: 1,
	3: 2,
	7: 2,
	4: 3,
	8: 3,
	5: 4,
	9: 4,
	6: 5,
	10: 5,
	11: 5,
	12: 5
};

let atual = 0;
let historiaFinal = "";

botaoIniciar.addEventListener("click", iniciaJogo);
botaoNovamente.addEventListener("click", iniciaJogo);

function iniciaJogo() {
	atual = 0;
	historiaFinal = "";
	telaInicial.style.display = "none";
	telaJogo.style.display = "block";
	caixaResultado.style.display = "none";
	textoResultado.textContent = "";
	caixaPerguntas.style.display = "block";
	caixaAlternativas.style.display = "flex";
	mostraPergunta();
}

function mostraPergunta() {
	const perguntaAtual = perguntas[atual];
	const etapaAtual = etapasPorPergunta[atual] ?? 0;
	progressoEtapa.textContent = `${etapaAtual} / 5`;
	trilhaProgresso.setAttribute("aria-valuenow", etapaAtual);
	preenchimentoProgresso.style.width = `${etapaAtual * 20}%`;
	caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nome);
	caixaAlternativas.replaceChildren();

	if (perguntaAtual.pausa === true) {
		return;
	}

	for (const alternativa of perguntaAtual.alternativas) {
		const botao = document.createElement("button");
		botao.type = "button";
		botao.className = "choice";
		botao.textContent = alternativa.texto;
		botao.disabled = alternativa.disponivel === false;
		botao.addEventListener("click", function () {
			respostaSelecionada(alternativa);
		});
		caixaAlternativas.appendChild(botao);
	}
}

function respostaSelecionada(opcaoSelecionada) {
	if (opcaoSelecionada.disponivel === false) {
		return;
	}

	if (opcaoSelecionada.tipo === "gameover") {
		historiaFinal += aleatorio(opcaoSelecionada.afirmacao) + " ";
		caixaPerguntas.textContent = "Fim de jogo! Essa escolha encerrou a missão.";
		caixaAlternativas.style.display = "none";
		caixaResultado.style.display = "block";
		textoResultado.textContent = historiaFinal;
		return;
	}

	const destino = opcaoSelecionada.proxima;
	if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
		console.error("Destino inválido:", destino);
		return;
	}

	const origem = perguntas[atual];
	const chegada = perguntas[destino];
	const mudouDeCaminho = origem.caminho !== chegada.caminho;
	if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
		console.error("Mudança de caminho sem o tipo trocar.");
		return;
	}
	if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
		console.error("A troca deve levar a outro caminho.");
		return;
	}

	const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
	historiaFinal += afirmacao + " ";
	atual = destino;
	mostraPergunta();
}

telaInicial.style.display = "block";
telaJogo.style.display = "none";
caixaPerguntas.style.display = "none";
caixaAlternativas.style.display = "none";
caixaResultado.style.display = "none";
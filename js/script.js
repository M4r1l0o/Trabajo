import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");

let atual = 0;
let historiaFinal = "";

botaoIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo() {
	atual = 0;
	historiaFinal = "";
	telaInicial.style.display = "none";
	caixaResultado.style.display = "none";
	textoResultado.textContent = "";
	caixaPerguntas.style.display = "block";
	caixaAlternativas.style.display = "flex";
	mostraPergunta();
}

function mostraPergunta() {
	const perguntaAtual = perguntas[atual];
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

	const destino = opcaoSelecionada.proxima;
	if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
		console.error("Destino inválido:", destino);
		return;
	}

	const origem = perguntas[atual];
	const chegada = perguntas[destino];
	if (atual !== 0 && origem.caminho !== chegada.caminho) {
		console.error("A troca de caminho será implementada na Parte 4.");
		return;
	}

	const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
	historiaFinal += afirmacao + " ";
	atual = destino;
	mostraPergunta();
}

telaInicial.style.display = "block";
caixaPerguntas.style.display = "none";
caixaAlternativas.style.display = "none";
caixaResultado.style.display = "none";
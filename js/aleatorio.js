export function aleatorio(lista) {
	return lista[Math.floor(Math.random() * lista.length)];
}

const nomes = ["Ana", "Fernanda", "Marcelo", "Amanda", "Gabriel"];
export const nome = aleatorio(nomes);
export function aleatorio(lista) {
	return lista[Math.floor(Math.random() * lista.length)];
}

export function nome() {
	return aleatorio(["Ana", "Caio", "Lia", "Ravi"]);
}
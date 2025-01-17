// ARRAYS
let nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernanda"]

// -------------------------
// ordenar um array de forma ascendente - IMPORTANTE: altera a estrutura do Array
// ----------------------------
nomes.sort()
console.table(nomes)

// ------------------------
// ordenar um array de forma descendente
// -------------------------------
nomes.sort ()
nomes.reverse()
console.table(nomes)

// -----------------------
// sintaxe alternativa
// --------------------------
nomes.sort().reverse()
console.table(nomes)

// ------------------------------
// ou ainda
//--------------------------------
console.table(nomes.sort().reverse())

// ----------------------------
// também funciona para arrays numéricos, mas...
// -------------------------------
let valores = [1, 30, 20, 50, 56, 45]
valores.sort()
console.table(valores)
valores.reverse()
console.table(valores)

// let valores = [1, 30, 20, 100, 60, 56, 45]
// valores.sort()
// console.table(valores)
// valores.reverse()
// console.table(valores)

// Existem formas de fazer a ordenação correta, mas envolvem funções.
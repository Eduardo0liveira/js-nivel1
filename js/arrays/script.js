// // até agora

// // ---------------
// //  VARIAVEIS
// // ---------------
// let nome1 = "joao"
// let nome2 = "ana"
// let nom3 = "carlos"

//ARRAYS
let nomes = ["joao", "ana", "carlos"]


//  -------------------------
// Apresentar dados de um array
// ----------------------------
// console.log(nomes);       // Todos os elementos
// console.log(nomes[1]);    // ana
// console.table(nomes)

// -------------------------
// Alterar dados de um array
// //---------------------------
// nomes[1] = "maria"
// console.table(nomes)

// // -------------------------
// // Quantos elementos tem um array
// // --------------------------
// console.log(nomes.lenght)

// ------------------------------------------
// // Adicionar mais elementos no final do array
// // ----------------------------
// nomes.push("joaquim")
// console.table(nomes)

// ---------------------------------
// Adicionar elementos no início do array
// ---------------------------------------
// nomes.unshift("josé")
// console.table(nomes)

// --------------------
// remover elemento do início
// -------------------------
// nomes.shift()
// console.table(nomes)

// ----------------------
// remover elemento do fim
// ----------------------
// nomes.pop()
// console.table(nomes)

// --------------------------------------
// remover elementos permite guardar o valor removido numa variável
// --------------------------------------------------
// let removido = nomes.pop()
// console.log(removido)
// console.table(nomes)

// ------------------------------------
// remover e/ou adicionar elementos em qualquer posição dentro do array
// -------------------------------
// console.table(nomes)
// nomes.splice(1,2, "joaquim", "manuel", "rui")
// console.table(nomes)


// -----------------------------------
// ver eliminados
// ---------------------------------
// console.table(nomes)
// let eliminados = nomes.splice(1,2, "joaquim", "manuel", "rui")
// console.table(nomes)
// console.table(eliminados)
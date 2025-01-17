// CICLOS - LOOPS - ITERAÇÕES

// Estrutura de código q tem como objetivo a execução de um determinado bloco de instruções até q uma determinada condição seja alcançada



// -----------------
// ciclo while
// ---------------------

// while(condição){
//     código a ser executado
// }

// let valor = 0
// while(valor < 10){
//     console.log(valor)
//     valor++
// }

// ----------------------------
// ciclo DO... WHILE - o primeiro ciclo é sempre executado por
// -----------------------------

// let valor = 0
// do{
//     console.log(valor)
//     valor++
// } while(valor < 10)

// -----------------
// ciclo FOR
// ----------------------------
// for(indicação; condição; incremento){
//     código a executar
// }

// for(let valor = 0; valor <= 10; valor++){
//     console.log(valor)
// }


// ----------------------------------
// ciclo FOR...IN (não vai funcionar corretamente assim, porque apresenta as chaves)
// é mais funcional quando falarmos de objetos
//----------------------------------
// let valores = [1,2,3,4,5]
// for(valor in valores){
//     console.log(valor)
// }

// ----------------------
// ciclo FOR...OF
// ---------------------
// let nomes = ["joao", "ana", "carlos"]
// for(nome of nomes){
//     console.log(nome)
// }

// -----------------------
// ciclo FOREACH
// ----------------------
// let nomes = ["joao", "ana", "carlos"]
// nomes.forEach((n) => console.log(n))
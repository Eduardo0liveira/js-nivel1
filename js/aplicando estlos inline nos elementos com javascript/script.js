// APLICAR ESTILOS INLINE COM JAVASCRIPT

// document.querySelector("h1").style.color = "red"

let el = document.querySelector('p')
const estilos = window.getComputedStyle(el)
console.log(estilos.getPropertyValue('color'))

console.log(el.style.backgroundColor)


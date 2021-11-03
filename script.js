var numeroCartas = prompt('Digite o numero de cartas: ')
let HTMLTemporario
while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 != 0) {
  numeroCartas = prompt('Digite o numero de cartas: ')
}
for (var i = 0; i < numeroCartas - 1; i++) {
  var elementoOriginal = document.querySelector('.carta')
  var elementoClone = elementoOriginal.cloneNode(true)
  const addCarta = document.querySelector('.container')
  // inserindo o elemento na paǵina
  addCarta.appendChild(elementoClone)
}

function girarCarta() {
  let girarFront = document.querySelector('.front-face')
  girarFront.classList.toggle('girarFront')
  let girarBack = document.querySelector('.back-face')
  girarBack.classList.toggle('girarBack')
}

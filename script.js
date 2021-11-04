let numeroCartas = prompt('Digite o numero de cartas: ')
let HTMLTemporario
while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 != 0) {
  numeroCartas = prompt('Digite o numero de cartas: ')
}

const arrayGif = ['gif1', 'gif2', 'gif3', 'gif4', 'gif5', 'gif6', 'gif7']
const arrayPar = arrayGif.slice(0, numeroCartas / 2)
arrayPar.sort(comparador)

for (let i = 0; i < numeroCartas / 2; i++) {
  let containerCartas = document.querySelector('.container')
  containerCartas.innerHTML =
    `<div class="carta" onclick="girarCarta(this)">
      <div class="front-face face"  >
        <img class="imgFront" src="./assets/front.png" alt="" />
      </div>
      <div class="back-face face"  >
        <img class="imgBack" src="./assets/${arrayPar[i]}.gif" alt="" />
      </div>
    </div>` + containerCartas.innerHTML
}

arrayPar.sort(comparador)

for (let i = 0; i < numeroCartas / 2; i++) {
  let containerCartas = document.querySelector('.container')
  containerCartas.innerHTML =
    `<div class="carta" onclick="girarCarta(this)">
      <div class="front-face face"  >
        <img class="imgFront" src="./assets/front.png" alt="" />
      </div>
      <div class="back-face face"  >
        <img class="imgBack" src="./assets/${arrayPar[i]}.gif" alt="" />
      </div>
    </div>` + containerCartas.innerHTML
}

function girarCarta(botao) {
  const girarFront = botao.querySelector('.front-face')
  const girarBack = botao.querySelector('.back-face')
  girarFront.classList.toggle('girarBack')
  girarBack.classList.toggle('girarBack')

  let cont = 0
  cont = cont + 1
}
function comparador() {
  return Math.random() - 0.5
}

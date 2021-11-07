let numeroCartas = prompt('Digite o numero de cartas: ')
let cont = 1
let clique1 = 0
let clique2 = 0
let clique1f = 0
let clique2f = 0
let contJogadas = 0
let cartasViradas = []
let contTimer = 0
let contErro = 0

while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 != 0) {
  numeroCartas = prompt('Digite o numero de cartas: ')
}

const arrayGif = ['gif1', 'gif2', 'gif3', 'gif4', 'gif5', 'gif6', 'gif7']
let arrayPar = arrayGif.slice(0, numeroCartas / 2)

arrayPar = arrayPar.concat(arrayPar)
arrayPar.sort(comparador)

for (let i = 0; i < numeroCartas; i++) {
  let containerCartas = document.querySelector('.container')
  const carta = `<div class="card" data-identifier="card" onclick="girarCarta(this)">
  <div class="front-face face"  >
    <img class="imgFront" data-identifier="front-face" src="./assets/front.png" alt="" />
  </div>
  <div class="back-face face" data-identifier="back-face" >
    <img class="imgBack" src="./assets/${arrayPar[i]}.gif" alt="" />
  </div>
</div>`
  containerCartas.innerHTML = carta + containerCartas.innerHTML
}

let intervaloTimer = setInterval(timer, 1000)

function girarCarta(botao) {
  const girarBack = botao.querySelector('.back-face')
  const girarBack2 = botao.querySelector('.front-face')
  girarBack.classList.add('girarBack')
  girarBack2.classList.add('girarFront')

  if (cont === 1) {
    clique1 = botao.querySelector('.back-face')
    clique1f = botao.querySelector('.front-face')
    cont++
  } else if (cont === 2) {
    clique2 = botao.querySelector('.back-face')
    clique2f = botao.querySelector('.front-face')

    if (clique1.innerHTML === clique2.innerHTML) {
      clique1.classList.add('girarBack')
      clique1f.classList.add('girarFront')
      clique2.classList.add('girarBack')
      clique2f.classList.add('girarFront')
      contJogadas++
    } else {
      setTimeout(desviraCarta, 500)
      contJogadas++
    }
    setTimeout(zerarCliques, 500)
  }
  setTimeout(reiniciar, 500)
}

function comparador() {
  return Math.random() - 0.5
}

function desviraCarta() {
  clique1.classList.remove('girarBack')
  clique1f.classList.remove('girarFront')
  clique2.classList.remove('girarBack')
  clique2f.classList.remove('girarFront')
}

function zerarCliques() {
  cont = 1
  clique1 = 0
  clique2 = 0
  clique1f = 0
  clique2f = 0
}

function reiniciar() {
  cartasViradas = document.querySelectorAll('.girarBack')

  if (cartasViradas.length == numeroCartas) {
    alert(
      `Você ganhou com ${contJogadas} jogadas e tempo de ${
        contTimer - 1
      } segundos!`
    )

    while (contErro === 0) {
      let reiniciarJogo = prompt('Voce deseja reiniciar o jogo (Sim ou Nao): ')
      if (reiniciarJogo === 'Sim') {
        numeroCartas = 0
        contErro++
        location.reload(true)
      } else if (reiniciarJogo === 'Nao') {
        numeroCartas = 0
        contErro++
        let tempo = document.querySelector('.timer')
        tempo.classList.add('displaynone')
      } else {
        alert("Digite corretamente -> 'Sim' ou 'Nao'.")
      }
    }
  }
}

function timer() {
  let tempoInicial = document.querySelector('.timer')
  tempoInicial.innerHTML = contTimer++
}

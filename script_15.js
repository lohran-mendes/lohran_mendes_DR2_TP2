//“script_15.js” → [Faça esse em grupo] - Crie um programa que peça que o usuário escolha entre Pedra, Papel ou Tesoura (pode ser uma entrada numérica = 1, 2 ou 3). O programa deve escolher uma dessas opções aleatoriamente e em seguida deve informar para o usuário qual foi a escolha sorteada pelo programa e se ele ganhou ou não do programa.

let entrada = prompt('Pedra, papel ou tesoura?')
const escolhasPossiveis = ['pedra', 'papel', 'tesoura']
const numeroAleatorio = Math.floor(Math.random() * 3)
const mensagemDeErro = 'digite se você vai querer pedra(1), papel(2) ou tesoura(3).'

if (isNaN(Number(entrada))) {
  entrada = escolhasPossiveis.indexOf(entrada.toLowerCase())
} else {
  entrada = +entrada - 1
}

const resultado = (entrada - numeroAleatorio)

if (entrada === -1) {
  alert(mensagemDeErro)
} else if (resultado === 1 || resultado == -2) {
  alert(`Você jogou ${escolhasPossiveis[entrada]}, o bot jogou ${escolhasPossiveis[numeroAleatorio]}, então você venceu!`)
} else if (resultado === -1 || resultado == 2) {
  alert(`Você jogou ${escolhasPossiveis[entrada]}, o bot jogou ${escolhasPossiveis[numeroAleatorio]}, então você perdeu!`)
} else if (resultado === 0) {
  alert(`Você jogou ${escolhasPossiveis[entrada]}, o bot jogou ${escolhasPossiveis[numeroAleatorio]}, então você empatou!`)
} else {
  alert(mensagemDeErro)
}

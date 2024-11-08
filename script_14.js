//“script_14.js” → [Faça esse em grupo] - Crie um programa que solicite ao usuário os três lados de um triângulo e informe se o triângulo é Equilátero, Isósceles ou Escaleno (obs: Equilátero possui todos os lados iguais, Isósceles possui dois lados iguais e um diferente e Escaleno possui todos os lados diferentes).

const primeiroLado = Number(prompt('Insira o primeiro lado do triângulo.'))
const segundoLado = Number(prompt('Insira o segundo lado do triângulo.'))
const terceiroLado = Number(prompt('Insira o terceiro lado do triângulo.'))

if (primeiroLado > 0 && segundoLado > 0 && terceiroLado > 0) {
  if(primeiroLado === segundoLado && segundoLado === terceiroLado) {
    alert('Esse é um triângulo equilátero.')
  } else if (primeiroLado !== segundoLado && primeiroLado !== terceiroLado && segundoLado !== terceiroLado) {
    alert('Esse é um triângulo escaleno')
  } else {
    alert('Esse é um triângulo isósceles')
  }
} else {
  alert('todos os valores inseridos tem que números maiores que zero')
}
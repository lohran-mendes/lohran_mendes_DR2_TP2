// “script_06.js” → Crie um programa que receba o valor da altura e do peso de uma pessoa e retorne o seu IMC - Índice de Massa Corporal. 

const altura = Number(prompt('Insira a sua altura em metros.'))
const peso = Number(prompt('Insira o seu peso em Kg.'))

if (altura > 0 && peso > 0){
  const imc = (peso / (altura ** 2)).toFixed(2)
  alert(`O seu imc é igual a: ${imc}`) 
} else {
  alert('Insira valores maiores que 0')
}
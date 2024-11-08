// “script_07.js” → Um motorista deseja abastecer seu carro com um valor em reais. Escreva um programa para ler o preço do litro do combustível e o valor que o motorista deseja abastecer. Em seguida, informe quantos litros foram colocados no tanque.

const valorDoCombustivel = Number(prompt('Insira o valor do combustível'))
const valorDeAbastecimento = Number(prompt('Insira o valor que deseja abastecer'))

if (valorDoCombustivel > 0 && valorDeAbastecimento > 0) {
const valorFinal = (valorDeAbastecimento/valorDoCombustivel).toFixed(2)
alert(`serão colocados ${valorFinal} litros no tanque.`)
} else {
  alert('Coloque valores maiores que 0')
}
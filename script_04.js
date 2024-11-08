//“script_04.js” → Crie um programa que solicite o valor da conta de restaurante e a quantidade de pessoas, calcule a gorjeta de 10% e exiba o resultado total e o valor por pessoa.

const valorConta = Number(prompt('Insira o valor da conta do restaurante.'))
const quantidadePessoas = Number(prompt('Insira a quantidade de pessoas no restaurante.'))

if (valorConta > 0 && quantidadePessoas > 0 ) {
  const gorjeta = valorConta * 0.1;
  const valorPorPessoa = (valorConta * 1.1) / quantidadePessoas;
  alert(`O valor dos 10% ficou em ${gorjeta} reais, o valor total com a gorjeta ficou em ${(valorConta * 1.1).toFixed(2)} e o valor para cada um ficou em ${valorPorPessoa.toFixed(2)}`)
} else {
  alert('insira valores maiores que zero!')
}
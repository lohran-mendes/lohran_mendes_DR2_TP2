// “script_11.js” → Crie um programa que calcule o novo valor de um salário a partir de um valor percentual de reajuste. O valor atual do salário e o valor percentual do reajuste devem ser informados pelo usuário.

const salario = Number(prompt('Insira o valor do salário atual.'))
let reajuste = prompt('Insira o valor percentual do reajuste')

const reajusteNumber = Number(reajuste.replace('%' , ''))

if(salario > 0 && reajusteNumber !== 0){
  const multiplicador = (reajusteNumber/100)
  const novoSalario = salario + (salario * multiplicador);
  alert('O novo salário será de: ' + novoSalario)
} else { 
  alert('Entrada de valores inaceitaveis')
}
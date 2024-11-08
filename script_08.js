// “script_08.js” → Um motorista deseja abastecer seu carro com um valor em reais e quer saber se é melhor usar álcool ou gasolina. Escreva um programa para ler o preço do litro de cada combustível e informe qual é o mais vantajoso. O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à gasolina é simples: basta dividir o preço do litro do álcool pelo da gasolina. Se o resultado for inferior a 0,7 - use álcool, caso contrário abasteça com gasolina.

const valorAlcool = Number(prompt('Insira o valor do alcool'));
const valorGasolina = Number(prompt('Insira o valor da gasolina'));
if(valorAlcool > 0 && valorGasolina > 0 ){
  const maisVantajoso = (valorAlcool / valorGasolina < 0.7) ? 'álcool' : 'gasolina';
  alert(`O preço mais vantajoso para abastecer é o do(a) ${maisVantajoso}`)
} else{
  alert('Insira valores maiores que zero!')
}
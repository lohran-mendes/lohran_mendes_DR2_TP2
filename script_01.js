//“script_01.js” → Crie um programa que solicite dois números maiores que zero e exiba a divisão de um pelo outro e o resto da divisão de um pelo outro em uma única mensagem.

const entrada1 = Number(prompt("Insira um número maior que zero"));
const entrada2 = Number(prompt("Insira mais um número maior que zero"));

if (entrada1 > 0 && entrada2 > 0) {
  const resultadoDivisao = entrada1 / entrada2;
  const resultadoResto = entrada1 % entrada2;
  alert(`${entrada1} dividido por ${entrada2} é igual a: ${resultadoDivisao}.
O valor de seu resto é igual a : ${resultadoResto}`);
} else {
  alert("é necessário inserir dois números maiores que zero!");
}
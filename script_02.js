//“script_02.js” → Crie um programa que receba o valor de um produto, o valor pago e calcule (a) o troco, (b) o troco arredondado para cima e (c) o troco arredondado para baixo. Mostre uma única mensagem com o resultado.

const valorProduto = Number(prompt("Insira o valor do produto."));
const valorPago = Number(prompt("Insira o valor que foi pago"));

if (valorProduto > 0 && valorPago > 0) {
  const calculoTroco = valorProduto - valorPago;
  const calculoTrocoArredondadoPraCima = Math.ceil(calculoTroco);
  const calculoTrocoArredondadoPraBaixo = Math.floor(calculoTroco);
  alert(
    `O valor do troco é: ${calculoTroco}, o valor do troco arredondado para cima é : ${calculoTrocoArredondadoPraCima}, e o valor do troco arredondado para baixo é: ${calculoTrocoArredondadoPraBaixo}`
  );
} else {
  alert("Os valores inseridos não são válidos!");
}

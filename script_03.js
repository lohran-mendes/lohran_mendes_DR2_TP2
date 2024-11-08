//“script_03.js” → Crie um programa que solicite um número maior que zero e calcule o seu quadrado, seu cubo e sua raiz quadrada, exibindo o resultado

const numeroEntrada = Number(prompt("Insira um número maior que zero para calcular o seu quadrado, seu cubo e sua raiz quadrada"));

if (numeroEntrada > 0){
  const quadradoDoNumero = numeroEntrada ** 2;
  const cuboDoNumero = numeroEntrada ** 3;
  const raizQuadradaDoNumero = Math.sqrt(numeroEntrada);
  alert(`o quadrado de ${numeroEntrada} é: ${quadradoDoNumero}, o seu cubo é : ${cuboDoNumero}, e a sua raiz é: ${raizQuadradaDoNumero}`);
} else {
  alert('insira um valor maior que zero!')
}
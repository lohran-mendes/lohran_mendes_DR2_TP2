// “script_10.js” → Crie um programa que calcule a área, perímetro e o diâmetro de um círculo, tendo o comprimento do raio informado pelo usuário. Use Math.PI. 

const raio = Number(prompt('Insira o comprimento do raio'))
const PI = Math.PI

if(raio > 0){
  const area = PI *  Math.pow(raio, 2);
  const perimetro = 2 * PI * raio;
  const diametro = raio * 2;
  alert(`A área do circulo é: ${area.toFixed(2)}, o perímetro: ${perimetro.toFixed(2)} e o diâmetro: ${diametro.toFixed(2)}`)
} else {
  alert('Insira valores maiores que zero!')
}
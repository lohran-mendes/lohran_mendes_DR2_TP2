// “script_09.js” → Crie um programa que calcule a área de um quadrado, sendo que o comprimento do lado é informado pelo usuário. A área do quadrado é calculada elevando-se o lado ao quadrado. Use Math.pow para aplicar a potenciação. 

const comprimento = Number(prompt('Insira o comprimento do lado do quadrado'))
if (comprimento > 0) {
  const area = Math.pow(comprimento, 2)
  alert(`A área do quadrado é igual a ${area}`)
} else {
  alert('Insira valores maiores que zero!')
}
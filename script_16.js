//“script_16.js” → [Faça esse em grupo] - Crie uma aplicação que solicite ao usuário um ano com 4 dígitos e informe se aquele ano é bissexto ou não.

const anoPerguntado = Number(prompt('Insira o ano para saber se ele é bissexto'))
const anoBissexto = new Date(anoPerguntado, 1, 29);

if (anoBissexto.getDate() === 29) {
  alert(anoPerguntado + ' é ano bissexto')
} else if(anoBissexto.getDate() === 1) {
  alert(anoPerguntado + ' não é ano bissexto')
} else {
  alert('Insira um ano válido.')
}
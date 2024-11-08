//“script_05.js” → Crie um programa que receba na entrada o valor de três notas de um aluno - com valor entre 0 e 10 e informe a média entre elas. 

const nota1 = Number(prompt('insira a primeira nota do aluno.'))
const nota2 = Number(prompt('insira a segunda nota do aluno.'))
const nota3 = Number(prompt('insira a terceira nota do aluno.'))

if (nota1 <= 10 && nota2 <= 10 && nota3 <= 10 && nota1 >= 10 && nota2 >= 10 && nota3 >= 10) {
  const media = (nota1 + nota2 + nota3) / 3;
  alert(`a nota média do aluno ficou igual a: ${media.toFixed(2)}`)
} else {
  alert('Insira um valor válido entre 0 e 10.')
}

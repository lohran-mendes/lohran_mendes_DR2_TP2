// “script_13.js” → Crie um programa que contenha os seguintes itens:
// Crie um comentário explicando a diferença entre os valores null e undefined. 
// Apresente um exemplo onde o tipo undefined aparece no JS, e também um exemplo de uso prático do tipo null.

// A diferença entre valores null e undefined é sutil mas existe, o undefined é dado para variáveis que foram declaradas mas que não teve atribuição de valores enquanto o null pode ser atribuído em váriaveis mas também é o retorno em casos de buscas onde nenhum valor é encontrado.

//undefined um valor que não foi definido.
let naoDefinido;
alert(`Valor da variável não definida: ${naoDefinido}`)

//null um valor que não existe.
let naoEncontrado = document.querySelector('naoExiste');
alert(`Valor da variável que não foi encontrada: ${naoEncontrado}`)
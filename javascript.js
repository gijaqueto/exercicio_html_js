const form = document.getElementById('validacao');
let numA = document.getElementById('numA');
let numB = document.getElementById('numB');

form.addEventListener('submit', function(e){
e.preventDefault();

const mensagemSucesso = `O segundo número é maior que o primeiro!`;
const mensagemErro = `O primeiro número é maior ou igual ao segundo, tente novamente!`;

function comparar(numA, numB) {
    return numB > numA
}

if (!comparar(numA.valueAsNumber, numB.valueAsNumber)) {

	const containerMensagem = document.querySelector('.mensagem');

    containerMensagem.innerHTML = mensagemErro;

} else {

	const containerMensagem = document.querySelector('.mensagem');

    containerMensagem.innerHTML = mensagemSucesso;

} 

})
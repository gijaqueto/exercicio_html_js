let numA = document.getElementById('numA');
numA = parseInt(numA)

let numB = document.getElementById('numB');
numB = parseInt(numB)

const mensagemSucesso = `O segundo número é maior que o primeiro!`;
const mensagemErro = `O primeiro número é maior que o primeiro, tente novamente!`;

function comparar(numA, numB) {

    if numA > numB
    {
        const containerMensagem = document.querySelector('mensagem');
        containerMensagem.innerHTML = mensagemErro;
    } else {
        const containerMensagem = document.querySelector('mensagem');
        containerMensagem.innerHTML = mensagemSucesso;
    }

}
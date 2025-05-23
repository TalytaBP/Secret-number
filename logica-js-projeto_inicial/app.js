// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 a 100";

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
 
function verificarNumero() {
    let selecionar = document.querySelector("input").value;

    if (selecionar == numeroSecreto) {
        exibirTextoNaTela("h1", "Você acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (selecionar > numeroSecreto) {
            exibirTextoNaTela ("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela ("p", "O número secreto é maior");
        }
    }
    //tentativas = tentativas + 1;
    tentativas++;
    limparCampo();

    console.log (selecionar == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);
}

function limparCampo() {
    selecionar = document.querySelector("input");
    selecionar.value = " ";
}
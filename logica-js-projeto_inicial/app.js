alert ("Boas vinda ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto)
let escolha = prompt("Escolha um número entre 1 e 10")

//se escolha for igual ao número secreto
if (escolha == numeroSecreto) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert("Você errou :(");
}
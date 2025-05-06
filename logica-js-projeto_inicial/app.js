alert ("Boas vinda ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let escolha;
let tentativas = 1;

//enquanto a escolha não for igual ao número secreto
while (escolha != numeroSecreto) {
   escolha = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   //se escolha for igual ao número secreto
    if (escolha == numeroSecreto) {
        break;
    } else {
        if (escolha > numeroSecreto) {
            alert (`O número secreto é menor que ${escolha}`);
        } else {
            alert (`O número secreto é maior que ${escolha}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

# Exercícios

- Mostre um alerta com a mensagem "Boas vindas ao nosso site!";

alert ("Boas vindas ao nosso site!");

- Declare uma variável chamada nome e atribua a ela o valor "Lua";

let nome = "Lua";

- Crie uma variável chamada idade e atribua a ela o valor 25;

let idade = 25;

- Defina uma variável numeroDeVendas e atribua a ela o valor 50;

let numeroDeVendas = 50;

- Defina uma variável saldoDisponivel e atribua a ela o valor 1000;

let saldoDisponivel = 1000;

- Exiba um alerta com o texto "Erro! Preencha todos os campos";

alert ("Error! Preencha todos os campos");

- Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro;

let mensagemDeError = "Erro! Preencha todos os campos";
alert (mensagemDeError);

- Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome;

nome = prompt ("Digite o seu nome: ");

- Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade;

idade = prompt ("Digite sua idade: ");

- Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!";

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}

- Inclua comandos console.log em diferentes partes do código para verificar o fluxo do programa, os valores das variáveis e outras informações relevantes durante a fase de desenvolvimento.

// Início do jogo
alert("Boas vinda ao jogo do número secreto");
console.log("🎮 Iniciando o jogo...");

let numeroSecreto = 9;
console.log("✨ Número secreto definido:", numeroSecreto);

let escolha = prompt("Escolha um número entre 1 e 10");
console.log("📝 Escolha do jogador:", escolha);

// Verificando se a entrada é um número válido
if (isNaN(escolha)) {
    console.log("⚠️ Entrada inválida: não é um número");
}

// Comparando com o número secreto
if (escolha == numeroSecreto) {
    console.log("🎉 Acerto! O jogador encontrou o número secreto");
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log("❌ Erro! O jogador não encontrou o número secreto");
    alert("Você errou :(");
}
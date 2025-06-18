//Beatriz Viana Gilo, n°3, 1°C ; Corrida das laranjas de Ré; O objetivo é destacar a importância da conexão entre o campo e a cidade, evidenciando que um não pode existir plenamente sem o outro. Essa interdependência é a base para uma sociedade mais equilibrada, sustentável e justa. Por isso incentivamos o respeito mútuo e a cooperação entre esses dois mundos para o desenvolvimento de ambos;  Para iniciar a corrida clique na tela laranja e pressione "Espaço", a largada é dada na cor verde, e para vencer a corrida use A,S,D e/ou F;  Referências: Copilot e Alura.

let tela = "intro";
let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🚚", "🚛", "🚜", "🛺"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;
let jogoAtivo = true; // <-- nova variável de controle

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (tela === "intro") {
    mostrarIntroducao();
  } else if (tela === "jogo") {
    jogar();
  }
}

function mostrarIntroducao() {
  background("#FF5722");
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Olá! Eu sou a Chica, e trabalho na fazenda", width / 2, 50);
  text(" Vale do sol!", width / 2, 75);

  textSize(18);
  text("Temos uma corrida anual entre as fazendas", width / 2, 120);
  text("a famosa Corrida de ré das Laranjas!", width / 2, 140);

  text("Mas todos os motoristas das fazendas sumiram!", width / 2, 170);
  text("Então, todos precisamos da sua ajuda!", width / 2, 190);

  textSize(17);
  text("Chame mais três amigos para ajudar nessa missão", width / 2, 220);
  text("usem as teclas (A,S,D e F), para ganhar a corrida!", width / 2, 240);

  text("A largada é dada na cor verde", width / 2, 270);
  text("clique na tela e pressione (espaço) para iniciar", width / 2, 290);

  textSize(17);
  text("Ao fim da corrida, mostrará o vencedor!", 250, 330);

  textSize(100);
  fill(155, 255, 0);
  text("👩🏼‍🌾", width / 7, 360);
}

function jogar() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("rgb(0,68,5)");
  } else {
    background("#FF5722");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " VENCEU!🏆", 195, 200);
      jogoAtivo = false; // <-- impede mais contagem
      noLoop(); // para o draw
    }
  }
}

function keyPressed() {
  if (tela === "intro" && key === " ") {
    tela = "jogo";
  } else if (tela === "jogo" && jogoAtivo) { // <-- só executa se ainda não teve vencedor
    for (let i = 0; i < quantidade; i++) {
      if (key === teclas[i]) {
        xJogador[i] += 10;

        // calcula o progresso só se não passou da linha de chegada
        if (xJogador[i] <= 350) {
          let progresso = map(xJogador[i], 0, 350, 0, 100); //  converte a posição em pixels para percentual da corrida.
          progresso = constrain(progresso, 0, 100);
          console.log(`${jogador[i]} avançou para ${xJogador[i]}px (${progresso.toFixed(1)}%)`);
        }
      }
    }
  }
}

var timerJogo;
var timerContador;
var tempo = parseInt(document.querySelector(".tempo-jogo p").innerHTML);
var tempoRestante = document.querySelector(".tempo-jogo p");
var elPonto = document.querySelector(".pontuacao p");
var ponto = parseInt(document.querySelector(".pontuacao p").innerHTML);
var area = document.querySelector('.area-jogo');
var btnIniciar = document.getElementById('start');
btnIniciar.addEventListener('click', function () {
    iniciarJogo();
    countDown();
});

var btnParar = document.getElementById('stop');
btnParar.addEventListener('click', function () {
    pararJogo(); 
    resetCountDown();
});

var btnRecomecar = document.getElementById('restart');
btnRecomecar.addEventListener('click', function () {
    recomecarJogo();
});

function adicionaBola() {
    var bola = document.createElement('div');
    bola.setAttribute('class', 'bola');

    var posx = Math.floor(Math.random() * 700);
    var posy = Math.floor(Math.random() * 350);

    bola.setAttribute("style", "top:" + posy + "px;left:" + posx + "px;background-color:" + geraCorAleatoria() + ";");
    bola.setAttribute("onclick", "estourarBola(this)");
    

    area.appendChild(bola);
}

function geraCorAleatoria() {
    var hexadecimais = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
    var cor = '#';

    for (let i = 0; i < 6; i++){
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function iniciarJogo() {
    timerJogo = setInterval(adicionaBola, 1000);
}

function pararJogo() {
    clearInterval(timerJogo);
}

function estourarBola(elemento) {
    area.removeChild(elemento);
    adicionarPonto();
}

function recomecarJogo() {
    location.reload();
}

function countDown() {
    if (tempo >= 0) {
        if (tempo == 40) {
            clearInterval(timerJogo);
            timerJogo = setInterval(adicionaBola, 800);
        }
        if (tempo == 20) {
            clearInterval(timerJogo);
            timerJogo = setInterval(adicionaBola, 700);
        }
        if (tempo == 10) {
            clearInterval(timerJogo);
            timerJogo = setInterval(adicionaBola, 400);
            tempoRestante.setAttribute('class', 'final');
        }
        timerContador = setTimeout('countDown()', 1000);
        tempoRestante.innerHTML = tempo;
        tempo--;
    }
    else {
        pararJogo();
        alert("Jogo finalizado!");
    }
}

function resetCountDown() {
    clearTimeout(timerContador);
}

function adicionarPonto() {
    ponto += 1;
    elPonto.innerHTML = ponto;
}
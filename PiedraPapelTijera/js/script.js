function checkScores(p1Move, cpuMove) {
  cpuSelector.src = `${cpuMove}.png`;
  jugSelector.src = `${p1Move}.png`;

  if (p1Move == cpuMove) {
    return 'empate';
  }
  if (p1Move == 'piedra') {
    switch (cpuMove) {
      case 'tijeras':
        return 'playerWins';

      case 'papel':
        return 'cpuWins';
    }
  } else if (p1Move == 'papel') {
    switch (cpuMove) {
      case 'piedra':
        return 'playerWins';

      case 'tijeras':
        return 'cpuWins';
    }
  } else if (p1Move == 'tijeras') {
    switch (cpuMove) {
      case 'papel':
        return 'playerWins';

      case 'piedra':
        return 'cpuWins';
    }
  }
}

function makeCpuSelection() {
  let randomNum = Math.floor(Math.random() * moves.length);

  if (randomNum < 1) {
    return 'piedra';
  } else if (randomNum < 2) {
    return 'papel';
  } else {
    return 'tijeras';
  }
}

function checkResults(result) {
  partidas.innerHTML = contadorPartidas += 1;

  if (result === 'playerWins') {
    ganadas.innerHTML = contadorGanadas += 1;
    resultado.innerHTML = 'HAS GANADO!';
  } else if (result === 'empate') {
    empatadas.innerHTML = contadorEmpatadas += 1;
    resultado.innerHTML = 'EMPATE!';
  } else {
    perdidas.innerHTML = contadorPerdidas += 1;
    resultado.innerHTML = 'HAS PERDIDO!';
  }
}

window.addEventListener('load', function () {
  btnPiedra = document.getElementById('piedraBtn');
  btnPapel = document.getElementById('papelBtn');
  btnTijeras = document.getElementById('tijerasBtn');

  contadorPartidas = 0;
  contadorGanadas = 0;
  contadorPerdidas = 0;
  contadorEmpatadas = 0;

  partidas.innerHTML = contadorPartidas;
  ganadas.innerHTML = contadorGanadas;
  perdidas.innerHTML = contadorPerdidas;
  empatadas.innerHTML = contadorEmpatadas;

  moves = ['piedra', 'papel', 'tijeras'];

  btnPiedra.addEventListener('click', function () {
    var p1Move = 'piedra';
    var result = checkScores(p1Move, makeCpuSelection());
    checkResults(result);
  });

  btnPapel.addEventListener('click', function () {
    var p1Move = 'papel';
    var result = checkScores(p1Move, makeCpuSelection());
    checkResults(result);
  });

  btnTijeras.addEventListener('click', function () {
    var p1Move = 'tijeras';
    var result = checkScores(p1Move, makeCpuSelection());
    checkResults(result);
  });
});

const macaco = document.querySelector('.macaco');
const arvore = document.querySelector('.arvore');
const scoreElement = document.createElement("div");
const gameOverElement = document.createElement("div");
let score = 0;
let distance = 0;
let gameOver = false;

// Verifica se o dispositivo suporta eventos de toque
const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

// Adiciona o evento de toque para dispositivos móveis ou clique para desktop
const jumpEvent = isTouchDevice ? 'touchstart' : 'click';
document.addEventListener(jumpEvent, () => {
  jump();
});

const jump = () => {
  macaco.classList.add('jump');

  setTimeout(() => {
    macaco.classList.remove('jump');
  }, 520);
}

const loop = setInterval(() => {
  if (!gameOver) {
    const arvorePosition = arvore.offsetLeft;
    const macacoPosition = +window.getComputedStyle(macaco).bottom.replace('px','');

    if (arvorePosition <= 95 && arvorePosition > 0 && macacoPosition < 70) {
      arvore.style.animation = 'none';
      arvore.style.left = `${arvorePosition}px`;
      macaco.style.animation = 'none';
      macaco.style.bottom = `${macacoPosition}px`;
      macaco.src = 'images/fim.png';
      macaco.style.width = '200px';

      gameOver = true;
      gameOverElement.textContent = "Fim de jogo! Sua pontuação foi: " + score;
      document.body.appendChild(gameOverElement);
    }

    distance++;

    const distanceThreshold = 100;
    if (distance % distanceThreshold === 0) {
      score += 10;
      scoreElement.textContent = "Score: " + score;
    }
  }
}, 10);

scoreElement.textContent = "Score: " + score;
document.body.appendChild(scoreElement);

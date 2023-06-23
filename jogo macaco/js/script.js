const macaco = document.querySelector('.macaco');
const arvore = document.querySelector('.arvore');
const scoreElement = document.createElement("div");
scoreElement.id = "score";
let score = 0;
let distance = 0;
let gameOver = false;

document.addEventListener('click', () => {
    jump();
  });
  
document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") || (e.code === "Space") || (e.code === "click")) {
    jump();
  }
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
      const mensagem = "Fim de jogo! Sua pontuação foi: " + score;
      alert(mensagem);
      location.reload(); // Atualiza a página

      clearInterval(loop); // Pára o loop do jogo
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








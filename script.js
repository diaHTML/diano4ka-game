let score = 0;
let level = 1;

const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const basket = document.getElementById('basket');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  basket.style.left = (x - 40) + 'px';
});

function spawnFistashka() {
  const fistashka = document.createElement('div');
  fistashka.className = 'fistashka';
  fistashka.style.left = Math.random() * (window.innerWidth - 40) + 'px';
  document.getElementById('game').appendChild(fistashka);

  let top = 0;
  const fall = setInterval(() => {
    top += 5;
    fistashka.style.top = top + 'px';

    const bRect = basket.getBoundingClientRect();
    const fRect = fistashka.getBoundingClientRect();

    if (
      fRect.bottom >= bRect.top &&
      fRect.left >= bRect.left &&
      fRect.right <= bRect.right
    ) {
      score++;
      scoreDisplay.textContent = `Счёт: ${score} ДИАкоинов`;
      updateLevel();
      fistashka.remove();
      clearInterval(fall);
    }

    if (top > window.innerHeight) {
      fistashka.remove();
      clearInterval(fall);
    }
  }, 30);
}

function updateLevel() {
  const newLevel = Math.floor(score / 10) + 1;
  if (newLevel !== level) {
    level = newLevel;
    levelDisplay.textContent = `Уровень: ${level}`;
  }
}

function buy(item, cost) {
  if (score >= cost) {
    score -= cost;
    scoreDisplay.textContent = `Счёт: ${score} ДИАкоинов`;

    if (item === 'hearts-bg') {
      document.body.style.backgroundImage = "url('images/hearts-bg.jpg')";
    } else if (item === 'hat') {
      basket.style.backgroundImage = "url('images/hat.png')";
    } else if (item === 'panties') {
      alert('Ты купила трусики 😘');
    }
  } else {
    alert('Не хватает ДИАкоинов!');
  }
}

setInterval(spawnFistashka, 1200);

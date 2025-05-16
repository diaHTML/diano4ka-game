const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

let basket = { x: 180, y: 550, width: 60, height: 30 };
let pistachios = [];
let score = 0;
let level = 1;
let messages = [
  "Ты собираешь фисташки как моя любовь!",
  "Дяночка, ты самая вкусная в мире!",
  "Скоро фисташковое королевство будет твоим!",
  "Магазин ждёт тебя, красотка!"
];

let currentMessage = "";

function drawBasket() {
  ctx.fillStyle = '#84c18e';
  ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
}

function drawPistachios() {
  ctx.fillStyle = '#d6caa0';
  pistachios.forEach(p => {
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, 10, 15, 0, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawScore() {
  document.getElementById('score').innerText = score;
  document.getElementById('message').innerText = currentMessage;
}

function updatePistachios() {
  pistachios.forEach(p => p.y += 2 + level * 0.3);
  pistachios = pistachios.filter(p => {
    if (
      p.y > basket.y &&
      p.x > basket.x &&
      p.x < basket.x + basket.width
    ) {
      score++;
      if (score % 10 === 0) {
        level++;
        currentMessage = messages[Math.floor(Math.random() * messages.length)];
      }
      return false;
    }
    return p.y < canvas.height;
  });
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBasket();
  drawPistachios();
  drawScore();
  updatePistachios();
  requestAnimationFrame(gameLoop);
}

setInterval(() => {
  pistachios.push({
    x: Math.random() * canvas.width,
    y: -20
  });
}, 1000);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') basket.x -= 20;
  if (e.key === 'ArrowRight') basket.x += 20;
});

gameLoop();

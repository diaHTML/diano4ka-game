const cat = document.getElementById('cat');
const scoreEl = document.getElementById('score');
const rewardsContainer = document.getElementById('rewards-container');
const rewardsList = document.getElementById('rewards-list');

let score = 0;
let rewards = [];

function moveCat() {
  // случайное позиционирование котика внутри окна
  const maxX = window.innerWidth - cat.clientWidth;
  const maxY = window.innerHeight - cat.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  cat.style.left = x + 'px';
  cat.style.top = y + 'px';
}

function addReward(name) {
  if (!rewards.includes(name)) {
    rewards.push(name);
    const li = document.createElement('li');
    li.textContent = name;
    rewardsList.appendChild(li);
    rewardsContainer.style.display = 'block';
    alert('Поздравляем! Ты получила награду: ' + name);
  }
}

cat.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;
  moveCat();

  if (score === 5) addReward('Первая фисташковая медаль сучка!');
  else if (score === 10) addReward('Настоящий ловец котиков!');
  else if (score === 20) addReward('Королева фисташек!');
});

// Появляем котика сразу в рандомной позиции
moveCat();

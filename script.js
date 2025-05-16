let score = 0;
const cat = document.getElementById("cat");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

cat.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

function showMessage() {
  const messages = [
    "Йоу сучка!",
    "Обожаю тебя!",
    "Дяночка, ты самая милая!",
    "Лови котиков!",
    "Ты у меня лапочка!"
  ];
  const rand = Math.floor(Math.random() * messages.length);
  message.textContent = messages[rand];
}
const rewardsContainer = document.getElementById('rewards-container');
const rewardsList = document.getElementById('rewards-list');
let rewards = [];
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

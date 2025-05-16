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
    "Ты моя котечка!",
    "Обожаю тебя!",
    "Дяночка, ты самая милая!",
    "Лови котиков!",
    "Ты у меня лапочка!"
  ];
  const rand = Math.floor(Math.random() * messages.length);
  message.textContent = messages[rand];
}

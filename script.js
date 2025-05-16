let score = 0;
const pistachio = document.getElementById("pistachio");
const scoreEl = document.getElementById("score");
const effect = document.getElementById("effect");

function movePistachio() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  pistachio.style.left = x + "px";
  pistachio.style.top = y + "px";
}

pistachio.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
  movePistachio();
});

function buyItem(item, price) {
  if (score < price) {
    alert("Недостаточно ДИАкоинов!");
    return;
  }
  score -= price;
  scoreEl.textContent = score;

  switch(item) {
    case 'panties':
      effect.src = "https://cdn-icons-png.flaticon.com/512/1794/1794936.png";
      effect.style.display = "block";
      break;
    case 'cap':
      effect.src = "https://cdn-icons-png.flaticon.com/512/892/892458.png";
      effect.style.display = "block";
      break;
    case 'bgHeart':
      document.body.style.background = "url('https://images.unsplash.com/photo-1617196038432-5d8f8f8f8f8f') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      break;
  }
}

window.onload = movePistachio;

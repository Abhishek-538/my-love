const heart = document.getElementById('heart');
const message = document.getElementById('message');

heart.addEventListener('click', () => {
  message.textContent = "I love you more than words can say! 💖";
  message.style.color = "#ff6f61";
  message.style.fontSize = "1.5rem";
  message.style.marginTop = "10px";
});
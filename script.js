//your JS code here. If required.
const container = document.getElementById('board');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = '#1d1d1d';
  }, 1000);
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#27ae60', '#f39c12', '#d35400'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const container = document.getElementById("board");
const totalSquares = 800;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });

  square.addEventListener("mouseout", () => {
    setTimeout(() => {
      square.style.backgroundColor = "rgb(29, 29, 29)";
    }, 1000);
  });

  container.appendChild(square);
}

function getRandomColor() {
  const colors = [
    "#e74c3c",
    "#8e44ad",
    "#3498db",
    "#27ae60",
    "#f39c12",
    "#d35400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

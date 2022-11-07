const board = document.querySelector("#board");
const SQUARES_NUMBER = 600;
const colors = ["red", "blue", "green", "pink", "yellow", "purple", "fuchsia"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "white";
  element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

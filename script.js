// Element selectors
const container = document.getElementById("container");
const btnGridSize = document.getElementById("btnGridSize");
const gridWidth = 960;

// Create Grid
function createGrid(size) {
  container.innerText = "";
  for (let rowNumber = 1; rowNumber <= size; rowNumber++) {
    const row = document.createElement("div");
    row.classList.add("row", "row-" + rowNumber);
    container.appendChild(row);
    for (let colNumber = 1; colNumber <= size; colNumber++) {
      const box = document.createElement("div");
      box.classList.add("box", "box-" + colNumber + "-" + rowNumber);
      box.style.width = gridWidth / size + "px";
      box.style.height = gridWidth / size + "px";
      row.appendChild(box);
    }
  }
}

// Create initial grid
createGrid(4);

// Create grid size based on user input
btnGridSize.addEventListener("click", () => {
  let gridSize = 0;
  do {
    gridSize = parseInt(
      prompt("Select grid size. Min is 1 and Max is 100", 10)
    );
  } while (isNaN(gridSize) || gridSize > 100 || gridSize < 1);
  createGrid(gridSize);
});

// Mouseover event listener
container.addEventListener("mouseover", (event) => {
  if (event.target.className.includes("box")) {
    event.target.style.backgroundColor = random_rgba();
  }
});

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

// Creating a EtchASketch Website to draw on a grid of pixels.
// User should be able to:
// - Change divs on grid background color with a mouse hover
// - To change background color one can: change class or change background color on Event
// - Change grid size
// - Reset the grid

//Grab elements from HTML document
const gridContainer = document.querySelector(".grid.container");
const createButton = document.querySelector(".grid-button");
const deleteGridButton = document.querySelector(".grid-clear");


//Setting up button functions
createButton.addEventListener("click", () => addGrid(16));
deleteGridButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.setAttribute("style", "background-color: blanchedalmond;");
        // box.remove();
    })});

//Grid draw function for hover event
function paintCell(e) {
    const cell = e.target;
    cell.setAttribute("style", "background-color: red;" +
        "transition: background-color 0.2s;"
    );
}

//Setting up the grid
let boxes = [];

function addGrid (size) {
    //Delete grid before creating a new one
    if (boxes) {
        boxes.forEach((box) => {
            box.remove();
        })
    }
    //Create the grid with size of slider
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.addEventListener("mouseover", paintCell);
        gridContainer.appendChild(box);
        boxes.push(box);
    }
}
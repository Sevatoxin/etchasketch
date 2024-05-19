// Creating a EtchASketch Website to draw on a grid of pixels.
// User should be able to:
// - Change divs on grid background color with a mouse hover
// - To change background color one can: change class or change background color on Event
// - Change grid size
// - Reset the grid

//Grab elements from HTML document
const gridContainer = document.querySelector(".grid.container");

//Setting up the grid
let boxes = [];
addGrid(16);

function addGrid (size) {
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.className = "box";
        gridContainer.appendChild(box);
        boxes.push(box);
    }
}

console.log(boxes.length)
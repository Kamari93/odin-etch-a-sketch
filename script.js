const sketchPad = document.querySelector(".sketch-pad");
let row = 16;
let column = 16;
sketchPad.style.display = "grid";
sketchPad.style.gridTemplateRows = `repeat(${row}, 1fr)`;
sketchPad.style.gridTemplateColumns = `repeat(${column}, 1fr)`;

for (let i = 0; i < row * column; i++) {
    box = document.createElement("div");
    box.classList.add("box");
    box.style.outline = "solid grey";
    box.textContent = `${i}`;
    box.style.textAlign = "center";
    sketchPad.appendChild(box);
}
// let box;

// for (let i = 0; i <= 682; i++) {
//     box = document.createElement("div");
//     box.classList.add("box");
//     sketchPad.appendChild(box);
// }

// function getsquares(rows, columns) {

// }

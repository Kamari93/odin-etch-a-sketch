console.log("Keep Going 🍊");

// DOM Manipulation
const sketchPad = document.querySelector(".sketch-pad");
const slider = document.querySelector("input");
const dimensions = document.querySelector("label");

// set the sketch-pad to display grid
sketchPad.style.display = "grid";

// test slider value
console.log(slider.value);
dimensions.textContent = `${slider.value} x ${slider.value}`;

// change number of squares in sketchpad
getsquares(10);


// function to get the total squares of sketch pad
function getsquares(rows = 16) {
    let columns = rows;
    sketchPad.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    sketchPad.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        box = document.createElement("div");
        box.classList.add("box");
        box.style.outline = "solid grey";
        box.textContent = `${i}`;
        box.style.textAlign = "center";
        sketchPad.appendChild(box);
    }
}

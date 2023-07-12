console.log("Keep Going 🍊");

// DOM Manipulation
const sketchPad = document.querySelector(".sketch-pad");
const slider = document.querySelector("input");
const dimensions = document.querySelector("label");
dimensions.textContent = `${slider.value} x ${slider.value} `;

// set the sketch-pad to display grid
sketchPad.style.display = "grid";

// Listen for slider value changes
slider.addEventListener("input", getSlider);

// set the initial number of boxes on start
getsquares(slider.value);

// update slider value on user input
function getSlider() {
    console.log(slider.value);
    dimensions.textContent = `${slider.value} x ${slider.value}`;
    // change number of squares in sketchpad
    getsquares(slider.value);
}


// function to get the total squares of sketch pad
function getsquares(rows = 16) {
    let columns = rows;
    sketchPad.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    sketchPad.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        box = document.createElement("div");
        box.classList.add("box");
        box.style.outline = "solid grey";
        // box.textContent = `${i}`;
        box.setAttribute("id", `${i}`);
        box.style.textAlign = "center";
        sketchPad.appendChild(box);
    }
    colorBox()
}

function colorBox() {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => { box.style.background = 'black' })
    })
}



console.log("Keep Going 🍊");

// DOM Manipulation
const sketchPad = document.querySelector(".sketch-pad");
const slider = document.querySelector(".dimensions");
const dimensions = document.querySelector("label");
let colorPicker = document.querySelector("#color-picker");
let colorContainer = document.querySelector(".color-picker")
dimensions.textContent = `${slider.value} x ${slider.value} `;
colorPicker.style.background = colorPicker.value;
// colorContainer.style.background = colorPicker.value;

colorPicker.addEventListener("change", () => {
    console.log(colorPicker.value);
    let newColor = colorPicker.value;
    colorPicker.style.background = newColor;
});


// set the sketch-pad to display grid
sketchPad.style.display = "grid";

// Listen for slider value changes
slider.addEventListener("input", getSlider);

slider.addEventListener("change", restart);


// set the initial number of boxes on start
getSquares(slider.value);


// update slider value on user input
function getSlider() {
    console.log(slider.value);
    dimensions.textContent = `${slider.value} x ${slider.value}`;
    // change number of squares in sketchpad
    getSquares(slider.value);
}


// function to get the total squares of sketch pad
function getSquares(rows = 16) {
    let columns = rows;
    sketchPad.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    sketchPad.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        box = document.createElement("div");
        box.classList.add("box");
        box.style.outline = "solid grey";
        sketchPad.appendChild(box);
    }
    random = getRainbow();
    random;
    // colorBox(random)
    // slider.addEventListener("change", () => { box.style.background = "" })
}

// function to color each highlighted box
function colorBox(color = "black") {
    let boxes = document.querySelectorAll(".box");

    function colorChange(box) {
        box.style.background = `${color}`
    }

    boxes.forEach((box) => {
        box.addEventListener('mousemove', (e) => {
            if (e.buttons === 1) {
                //this cancel the event to propagate/spread aka drag the selection
                e.preventDefault();
                colorChange(box);
            }
        })
    })

    // boxes.forEach((box) => {
    //     box.addEventListener('mouseover', () => { box.style.background = `${color}` })
    // })
}

// function to restart sketch-pad after new user input
function restart() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => { box.style.background = "none" })
}

// function to get random rgb color 
function getRainbow() {
    let boxes = document.querySelectorAll(".box");

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    // return randomColor
    return colorBox(randomColor)

    // boxes.forEach((box) => { colorBox(randomColor) })
}


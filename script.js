console.log("Keep Going 🍊");

// DOM Manipulation
const sketchPad = document.querySelector(".sketch-pad");
const slider = document.querySelector(".dimensions");
const dimensions = document.querySelector(".box-size");
let colorPicker = document.querySelector("#color-picker");
let colorModeButton = document.querySelector(".color-mode");
let rainbowButton = document.querySelector(".rainbow");
let eraseButton = document.querySelector(".eraser");
let clearButton = document.querySelector(".clear-btn");
let buttons = document.querySelectorAll("button");
dimensions.textContent = `${slider.value} x ${slider.value} `;
colorPicker.value = '#1d7177';
// colorPicker.value = '#d36536';
// colorPicker.value = '#815546';
// colorPicker.value = '#8b8455';

// set the color-picker input background color on start to the above val
colorPicker.style.background = colorPicker.value;


// DOM for Toggle
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', function () {
    if (toggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});


// Add event listener to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Remove 'selected' class from all buttons
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("selected");
        }

        // Add 'selected' class to the clicked button
        this.classList.add("selected");
    });
}


// function for color picker button selector
colorModeButton.addEventListener("click", () => {
    colorBox(colorPicker.value);
})

// function that allows you to change color of squares
let picker = colorPicker.addEventListener("change", () => {
    console.log(colorPicker.value);
    let newColor = colorPicker.value;
    colorPicker.style.background = newColor;
    if (colorModeButton.classList.contains('selected')) {
        colorBox(colorPicker.value)
    }
});

// function for random color
rainbowButton.addEventListener("click", () => {
    // getRainbow()
    // randomColorBox()
    if (rainbowButton.classList.contains('selected')) {
        randomColorBox()
    }
})

// function to erase a div's background
eraseButton.addEventListener("click", () => {
    colorBox('transparent');
})

// function to clear sketchpad
clearButton.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.style.background = 'none');
})

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
        box.style.outline = "none";
        sketchPad.appendChild(box);
    }
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
    boxes.forEach((box) => { box.style.background = "none" });

    buttons.forEach((button) => { button.classList.remove('selected') })
}

// function to get random rgb color 
function getRainbow() {
    let boxes = document.querySelectorAll(".box");

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor
}


// function to color each highlighted box
function randomColorBox() {
    let boxes = document.querySelectorAll(".box");

    function colorChange(box) {
        box.style.background = getRainbow()
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
}

let grid = document.getElementById("grid-container");
let slider = document.querySelector("#size");
let displayText = document.querySelector("#display-val");
let boxes = [];

let color = 'maroon';

let colorMode = false;
let eraseMode = false;

let rainbowButton = document.getElementById("rainbow");
let eraseButton = document.getElementById("erase");

let createDiv = function (numSize = 256) {
    let newDiv;

    // Remove old grid children before creating new one to avoid crashing browser
    boxes.forEach((box) => {
        grid.removeChild(box); 
    });

    // Remove old event listener to avoid slowdown
    grid.removeEventListener('mouseover', handleMouseOver);

    // Set to empty array before iterating
    boxes = [];

    // Create the grid-boxes and append to container make sure push to empty array for below
    for(let i = 0; i < numSize; ++i){
        newDiv = document.createElement("div");
        grid.appendChild(newDiv);
        newDiv.classList.add("grid-box");
        boxes.push(newDiv);
    };
    

    // Use Event delegation, instead of adding event listeners to mitigate slow down from adjusting slider
    grid.addEventListener('mouseover', handleMouseOver);
};


// Event listener function
let handleMouseOver = function (event) {
    if (event.target.classList.contains('grid-box')) {
        changeColor(event.target);
    }
};

createDiv();

// Sketch on grid
let changeColor = function (element) {
    if(!colorMode && !eraseMode){
        element.style.backgroundColor = color;
    }
    else if(colorMode){
        element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    else{
        element.style.backgroundColor = '#FFFFF0';
    }
}

let updateDisplay = function () {
    displayText.textContent = slider.value + "x" + slider.value;
};


slider.addEventListener('input', () => {
    let newBoxSize = 100 / slider.value + "%";
    let newGridSize = slider.value * slider.value;

    updateDisplay();
    createDiv(newGridSize);

    boxes.forEach((box) => {
        box.style.height = newBoxSize;
        box.style.width = newBoxSize;
    })
});

// Extra Credit
rainbowButton.addEventListener('click', () => {
    if(!colorMode){
        colorMode = true;
        eraseMode = false;
    }
    else{
        colorMode = false;
    }
});

eraseButton.addEventListener('click', () => {
    if(!eraseMode){
        eraseMode = true;
        colorMode = false;
    }
    else{
        eraseMode = false;
    }
})


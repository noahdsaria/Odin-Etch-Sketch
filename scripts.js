// Create grid
let grid = document.getElementById("grid-container");
let slider = document.querySelector("#size");
let displayText = document.querySelector("#displayVal");
let boxes = [];

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
    element.style.backgroundColor = 'blue';
}

// Size Slider & Display
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



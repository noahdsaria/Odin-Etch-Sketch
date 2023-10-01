let grid = document.getElementById("grid-container");

let createDiv = function () {
    let newDiv;
    for(let i = 0; i < 256; ++i){
        newDiv = document.createElement("div");
        grid.appendChild(newDiv);
        newDiv.classList.add("grid-box");
    }
};

// Make sure to create grid first before adding event listeners!
createDiv();

let changeColor = function (element) {
    element.style.backgroundColor = 'blue';
}

const pixels = document.querySelectorAll(".grid-box");

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
    changeColor(pixel);
    })
});



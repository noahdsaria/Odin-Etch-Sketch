let grid = document.getElementById("grid-container");

let createDiv = function () {
    let newDiv;
    for(let i = 0; i < 256; ++i){
        newDiv = document.createElement("div");
        grid.appendChild(newDiv);
        newDiv.classList.add("grid-box");
    }
};

createDiv();
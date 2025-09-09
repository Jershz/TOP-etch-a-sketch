const container = document.querySelector("#container");
const button = document.querySelector("button");
const buttonContainer = document.querySelector("#buttonContainer");
const body = document.querySelector("body");

buttonContainer.style.textAlign = "center";

let gridSize = 16;

button.addEventListener("click", () => {
    gridSize = prompt("Enter the size of the grid(1-100): ");
    gridSize = gridSize > 100 ? 100 : gridSize < 1 ? 1 : gridSize;
    console.log(gridSize);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    initializeGrid();
});

function initializeGrid () {
    body.style.margin = "0 auto";
    body.style.padding = "0";
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.height = "100vh";
    container.style.width = "100vw";
    for(let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.flexDirection = "column";
        container.appendChild(row);

        for(let n = 0; n < gridSize; n++) {
            let newDiv = document.createElement("div");
            newDiv.style.display = "flex";            
            newDiv.style.flex = 1;            
            newDiv.style.backgroundColor = "grey";
            newDiv.dataset.light = 1;
            newDiv.addEventListener("mouseover", () => {
                let r = (Math.floor(Math.random() * 255));
                let g = (Math.floor(Math.random() * 255));
                let b = (Math.floor(Math.random() * 255));
                newDiv.style.backgroundColor = `rgb(${r},${g},${b}`;
                newDiv.style.filter = `brightness(${newDiv.dataset.light})`;
                console.log(newDiv.dataset.light);
                newDiv.dataset.light -= .1;   
                console.log(newDiv.dataset.light);             
            });
            row.appendChild(newDiv);
        }
    }
}

initializeGrid();

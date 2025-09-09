const container = document.querySelector("#container");
const body = document.querySelector("body");
const gridSize = 16;

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
            //newDiv.style.justifyContent = "stretch";
            newDiv.style.flex = 1;
            //newDiv.style.width = "100% / 16";
            //newDiv.style.height = "100% / 16";
            newDiv.style.backgroundColor = "grey";
            newDiv.style.border = "1px solid black";
            row.appendChild(newDiv);
        }
    }
}

initializeGrid();

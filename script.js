let manyGrid = 16;
const sizeContainer = 800;

const containers = document.getElementById("container");

let fixedSizeGrid = (sizeContainer / manyGrid) - 2;

for (i = 0; i < manyGrid; i++){
    for (j = 0; j < manyGrid; j++){
        const grid = document.createElement("div");
        grid.classList.add("Grid");
        grid.style.width = fixedSizeGrid + 'px';
        grid.style.height = fixedSizeGrid + 'px';
        grid.style.backgroundColor = 'white';

        containers.appendChild(grid);
    }
}

let hoverGrid = document.querySelectorAll(".Grid");
hoverGrid.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = 'lightblue';
    });
    grid.addEventListener("mouseleave", () => {
        grid.style.backgroundColor = 'lightblue';
    });
})
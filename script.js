let defaultManyGrid = 16;
let changedManyGrid = 0;
const sizeContainer = 800;

const containers = document.getElementById("container");

function makeGrid (manyGrid) {
    let fixedSizeGrid = 0;
    fixedSizeGrid = (sizeContainer / manyGrid) - 2;

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
}

// Starting Grid
const startGrid = makeGrid(defaultManyGrid);

let hoverGrid = document.querySelectorAll(".Grid");
hoverGrid.forEach(grid => {
    colorPick = "#000000";

    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = colorPick;

        if (grid.style.opacity <= 0.8) {
            grid.style.opacity = +grid.style.opacity + 0.2;
            // +e.style.opacity to convert opacity from string to number
        }
    });
    grid.addEventListener("mouseleave", () => {
        grid.style.backgroundColor = colorPick;

        if (grid.style.opacity <= 0.8) {
            grid.style.opacity = +grid.style.opacity + 0.2;
            // +e.style.opacity to convert opacity from string to number
        }
    });
})

// Changed Grid
const resetBtn = document.querySelector("#btn");
resetBtn.addEventListener("click", () => {
    changedManyGrid = parseInt(prompt("Reset the grid (16 - 100)", 16));
    const removeGrid = document.querySelectorAll(".Grid");

    removeGrid.forEach(grid => {
        grid.remove()
    })

    const resetGrid = makeGrid(changedManyGrid);

    let hoverGrid = document.querySelectorAll(".Grid");
    hoverGrid.forEach(grid => {
        colorPick = "#000000";

        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = colorPick;

            if (grid.style.opacity <= 0.8) {
                grid.style.opacity = +grid.style.opacity + 0.2;
                // +e.style.opacity to convert opacity from string to number
            }
        });
        grid.addEventListener("mouseleave", () => {
            grid.style.backgroundColor = colorPick;

            if (grid.style.opacity <= 0.8) {
                grid.style.opacity = +grid.style.opacity + 0.2;
                // +e.style.opacity to convert opacity from string to number
            }
        });
    })
})
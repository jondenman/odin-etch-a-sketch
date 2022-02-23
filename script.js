let squaresPerSide = 20;

const container = document.querySelector('.container');
generateGrid(squaresPerSide);
const squares = document.querySelectorAll('.flex-item');
activateGrid();

function generateGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++) {
        const row = document.createElement('div');
        row.classList.add('flex-row');
        for (let j = 0; j < squaresPerSide; j++) {
            const div = document.createElement('div');
            div.classList.add('flex-item');
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function markSquare (e) {
    square = e.target;
    square.classList.add('marked');
}

function activateGrid() {
    const squares = document.querySelectorAll('.flex-item');
    squares.forEach(square => square.addEventListener('mouseenter', markSquare));
}


function clearGrid() {
    squares.forEach(square => square.classList.remove('marked'));
    squaresPerSide = prompt('How many squares per side would you like?');
    if (squaresPerSide > 100) squaresPerSide = 100;
    if (squaresPerSide < 1) squaresPerSide = 1;
    removeGrid();
    generateGrid(squaresPerSide);
    activateGrid();
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click', clearGrid);

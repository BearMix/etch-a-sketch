const container = document.querySelector('.container');
const clearBtn = document.getElementById('clear-btn');
const gridBtn = document.getElementById('grid-btn');
const toggleColorBtn = document.getElementById('toggle-color-btn');

let squareSize = 16;
let useRandomColor = true;


function createGrid(squareSize) {
    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
          const grid = document.createElement('div');
          grid.classList.add('grid');
          grid.style.width = `calc(100% / ${squareSize})`;
          grid.style.height = `calc(100% / ${squareSize})`;
          grid.dataset.opacity = '1';
          container.appendChild(grid);
        }
    }
}

function randomRGB() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function handleMouseOver(event) {
    if (event.target.classList.contains('grid')) {
        let square = event.target;
        let opacity = parseFloat(square.dataset.opacity);

        if (opacity >= 1) {
            square.style.backgroundColor = useRandomColor ? randomRGB() : 'black';
            opacity = 0.25;
        } else {
            opacity += 0.25;
        }

        square.style.opacity = opacity;
        square.dataset.opacity = opacity;
    }
}

function clearGrid() {
    const squares = document.querySelectorAll('.grid');
    squares.forEach(grid => {
        grid.style.backgroundColor = '#ffe7c1';
        grid.style.opacity = '1';
        grid.dataset.opacity = '1';
    });
}

function promptGridSize() {
    let size = Number(prompt('Enter a grid size: '));
    while (size > 64 || isNaN(size) || size === 0) {
        size = Number(prompt('Please enter a grid size between 1 and 64: '));
    }
    return size;
}

createGrid(squareSize);

container.addEventListener('mouseover', handleMouseOver);
clearBtn.addEventListener('click', clearGrid);
gridBtn.addEventListener('click', () => {
    squareSize = promptGridSize();
    container.innerHTML = '';
    createGrid(squareSize);
});

toggleColorBtn.addEventListener('click', () => {
  useRandomColor = !useRandomColor;
  toggleColorBtn.textContent = useRandomColor ? 'Toggle to black' : 'Toggle to random color';
});
const container = document.querySelector('.container');
const clearBtn = document.getElementById('clear-btn');
const gridBtn = document.getElementById('grid-btn');
const squareDiv = document.querySelector('.square-div');

let squareSize = 16;

function getSquareDiv(squareSize) { 
  for (let i = 0; i < squareSize; i++) {
    for(let j = 0; j < squareSize; j++) {
      const grid = document.createElement('div');
      grid.style.width = `calc(100% / ${squareSize})`;
      grid.style.height = `calc(100% / ${squareSize})`;
      grid.classList.add('square-div');
      container.appendChild(grid);
    }
  }
}

getSquareDiv(squareSize)

gridBtn.addEventListener('click', () => {
  squareSize = Number(prompt('Enter a grid size: '));
   while(squareSize > 100 || squareSize === isNaN || squareSize === 0) {
     squareSize = Number(prompt('Please enter a grid size between 1 and 100: '));
     };
     container.textContent = '';
    getSquareDiv(squareSize);
  }
);

function randomRGB(){
  let rgb1 = Math.floor(Math.random()*256);
  let rgb2 = Math.floor(Math.random()*256);
  let rgb3 = Math.floor(Math.random()*256);
  return String(`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
}

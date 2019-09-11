/* eslint-disable no-param-reassign */

const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-button');
const eraseButton = document.querySelector('.erase-button');
const blackWhiteButton = document.querySelector('.black-and-white-button');
const colorsButton = document.querySelector('.colors-button');
const darkenButton = document.querySelector('.darken-button');

const ERASE = 'erase';
const BLACK = 'black';
const COLORS = 'color';
const DARKEN = 'darken';

let selectedTool;

const applyEraseTool = (element) => {
  element.style.backgroundColor = 'white';
};

const applyBlackTool = (element) => {
  element.style.backgroundColor = 'black';
};

const applyColorsTool = (element) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.backgroundColor = `#${randomColor}`;
};

const applyDarkenTool = (element) => {
  element.style.opacity = (Number(element.style.opacity) || 0) + 0.1;
};

const applySelectedTool = (element) => {
  switch (selectedTool) {
    case ERASE:
      applyEraseTool(element);
      break;

    case BLACK:
      applyBlackTool(element);
      break;

    case COLORS:
      applyColorsTool(element);
      break;

    case DARKEN:
      applyDarkenTool(element);
      break;

    default:
      break;
  }
};

const createCell = () => {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  return cell;
};

const resetGrid = () => {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((div) => {
    div.parentNode.removeChild(div);
  });
};

const populateGrid = (numberOfColumns) => {
  resetGrid();

  const numberOfCells = numberOfColumns * numberOfColumns;

  for (let i = 0; i < numberOfCells; i += 1) {
    const cell = createCell();
    gridContainer.appendChild(cell);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumns}, auto)`;
};

resetButton.addEventListener('click', () => {
  const numberOfCells = prompt('Enter number of pixels');
  populateGrid(Math.min(numberOfCells, 64));
});

const setSelectedTool = (tool) => {
  document.querySelectorAll('.nav-menu button').forEach((button) => {
    button.classList.remove('active');
  });

  selectedTool = tool;

  switch (selectedTool) {
    case ERASE:
      eraseButton.classList.add('active');
      break;

    case BLACK:
      blackWhiteButton.classList.add('active');
      break;

    case COLORS:
      colorsButton.classList.add('active');
      break;

    case DARKEN:
      darkenButton.classList.add('active');
      break;

    default:
      break;
  }
};

eraseButton.addEventListener('click', () => {
  setSelectedTool(ERASE);
});

colorsButton.addEventListener('click', () => {
  setSelectedTool(COLORS);
});

blackWhiteButton.addEventListener('click', () => {
  setSelectedTool(BLACK);
});

darkenButton.addEventListener('click', () => {
  setSelectedTool(DARKEN);
});

const init = () => {
  gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('cell')) {
      applySelectedTool(e.target);
    }
  });

  populateGrid(16);
  setSelectedTool(BLACK);
};

init();

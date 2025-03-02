let gridSize = 20;
let cells = []; // stores image chunks
let blank = []; // stores open positions
let img;

function preload() {
  img = loadImage("img/2.jpg");
}

//sliders:
//speed - 100 - 1000
//grid size 5 - 80
//slider to change randomness for r,r1,r2,r3,r4

//invert button (changes crocodile on random either to > or <)
//background color picker

function setup() {
  createCanvas(windowWidth, windowHeight - 150);

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let r = random(1);
      if (r > 0.075) {
        //change <> to invert whole thing
        cells.push(new Grid(x, y, x, y, gridSize));
      } else {
        blank.push({ x, y, gridSize });
      }
    }
  }

  setInterval(moveBlankCells, 200);
}

function draw() {
  background(0, 0, 255);

  for (let cell of cells) {
    cell.show();
  }

  for (let b of blank) {
    //b of blank is equivelant to cell of cells
    copy(img, b.x, b.y, b.size, b.size, b.x, b.y, b.gridSize, b.gridSize);
  }
}

function moveBlankCells() {
  for (let b of blank) {
    let newX = b.x;
    let newY = b.y;

    let r = random(0.1);

    if (r < 0.25) {
      newY -= gridSize; // up
    } else if (r < 0.5) {
      newX += gridSize; // right
    } else if (r < 0.75) {
      newY += gridSize; // down
    } else {
      newX -= gridSize; // left
    }

    for (let cell of cells) {
      if (cell.dx === newX && cell.dy === newY) {
        [cell.dx, cell.dy, b.x, b.y] = [b.x, b.y, newX, newY];
        break;
      }
    }
  }
}

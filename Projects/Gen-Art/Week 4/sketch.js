let rT = 10;
let gridSize = 10;
let angle1 = 0;
let angle2;
let angle3 = 0;
let pg; //pgraphics buffer
let charset;
let asciiMap = [];
let asciiG = []; // ascii Graphics object class
let cT = 30; //"Shape Size"
let s; //scale
let font; //estragon

let rTSlider,
  gridSizeSlider,
  angleSlider, //anim speed
  cTSlider, //cT slider (shape size)
  sSlider, //scale slider ??
  cSlider, //circle slider
  sqSlider, //square slider
  triangleSlider;
let charsetInput, charsetWidthSlider; //char set input
let fillColorPicker, bgColorPicker, strokeColorPicker, ellipseColorPicker; //color pickers

// Added checkboxes for shape visibility
let showSquareCheckbox,
  showCircleCheckbox,
  showTriangleCheckbox,
  showImageCheckbox;

function preload() {
  font = loadFont("Fonts/Estragon.ttf");
}

function setup() {
  createCanvas(windowWidth, (windowHeight / 2) * 1.5);
  pg = createGraphics(width, height);
  pg.pixelDensity(1);

  charset = "   Ýæ˚€ª∂∂.]";
  for (let i = 0; i < 256; i++) {
    let index = floor(map(i, 0, 255, 0, charset.length - 1));
    asciiMap[i] = charset.charAt(index);
  }

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      asciiG.push(new asciiGraphics(x, y));
    }
  }

  createControlPanel();
}

function draw() {
  background(bgColorPicker.color());
  // pg.background(bgColorPicker.color());
  pg.background(0);
  pg.push();

  rT = rTSlider.value();
  gridSize = gridSizeSlider.value();
  cT = cTSlider.value();
  s = sSlider.value();
  angle1 = sin(angle3) * 1.5;
  angle2 = cos(angle3) * 1.5;
  angle3 += angleSlider.value();

  pg.translate(windowWidth / 2 - 50 * 0.75, windowHeight / 2 - 50 * 0.75);
  translate(150, 25);
  scale(0.8);
  pg.scale(s);

  for (let x = -windowWidth / 2; x < windowWidth / 2; x += gridSize / 2) {
    for (let y = -windowHeight / 2; y < windowHeight / 2; y += gridSize / 2) {
      pg.noStroke();
      pg.fill(map(x, -windowWidth / 2, windowWidth / 2, 0, 255));
      pg.fill(255, 0, 0);
      pg.angleMode(DEGREES);
      pg.rotate(angle1);
      pg.rectMode(CENTER);
      pg.rotate(angle2);
      pg.rect(x * 5, (y * angle1) / 1000, cT, 30);
      pg.arc(
        x,
        y + windowHeight / 2,
        cT * PI,
        rT * sin(rTSlider.value()) * 1000,
        angle2 * angleSlider.value(),
        OPEN
      );
    }
    if (showImageCheckbox.checked()) {
      image(pg, 0, 0);
    }
  }

  pg.pop();
  pg.loadPixels();

  for (let i = 0; i < asciiG.length; i++) {
    let g = asciiG[i];
    let index = 4 * (g.x + g.y * pg.width);
    if (index < pg.pixels.length - 4) {
      let r = pg.pixels[index];
      let g = pg.pixels[index + 1];
      let b = pg.pixels[index + 2];
      let a = pg.pixels[index + 3];
      let avg = int((r + g + b + a) / 4);
      asciiG[i].avg = avg;
    }
  }

  for (let i = 0; i < asciiG.length; i++) {
    asciiG[i].show();
  }
}

function createControlPanel() {
  let controlX = 20;
  let controlY = (windowHeight / 2) * 1.5 + 20;

  select("body").style("background-color", "black");

  //top row
  rTSlider = createSlider(5, 50, 10, 1);
  rTSlider.position(controlX, controlY);
  createDiv("rT (arc radius)")
    .position(controlX, controlY - 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  gridSizeSlider = createSlider(10, 100, 20, 1);
  gridSizeSlider.position(controlX + 220, controlY);
  createDiv("Grid Size")
    .position(controlX + 220, controlY - 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  cTSlider = createSlider(10, 100, 30, 1);
  cTSlider.position(controlX + 440, controlY);
  createDiv("Shape Size (cT)")
    .position(controlX + 440, controlY - 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  sqSlider = createSlider(5, 50, 10, 1);
  sqSlider.position(controlX + 660, controlY);
  createDiv("Square Size")
    .position(controlX + 660, controlY - 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  triangleSlider = createSlider(3, 5, 2, 0.1);
  triangleSlider.position(controlX + 880, controlY);
  createDiv("Triangle Size")
    .position(controlX + 880, controlY - 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  //mid row
  angleSlider = createSlider(0, 0.005, 0.001, 0.0001);
  angleSlider.position(controlX, controlY + 40);
  createDiv("Animation Speed")
    .position(controlX, controlY + 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  scaleSlider = createSlider(0.1, 10, 1, 0.01);
  scaleSlider.position(controlX + 220, controlY + 40);
  createDiv("Scale Factor")
    .position(controlX + 220, controlY + 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  sSlider = createSlider(0.1, 1, 0.1, 0.01);
  sSlider.position(controlX + 440, controlY + 40);
  createDiv("Zoom")
    .position(controlX + 440, controlY + 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  cSlider = createSlider(5, 50, 10, 1);
  cSlider.position(controlX + 660, controlY + 40);
  createDiv("Circle Size")
    .position(controlX + 660, controlY + 20)
    .style("font-family", "Estragon")
    .style("color", "white");

  //bottom row (color pickers)
  bgColorPicker = createColorPicker("#000000");
  bgColorPicker.position(controlX, controlY + 80);
  createDiv("Background Color")
    .position(controlX, controlY + 120)
    .style("font-family", "Estragon")
    .style("color", "white");

  strokeColorPicker = createColorPicker("#0000FF");
  strokeColorPicker.position(controlX + 440, controlY + 80);
  createDiv("Font Color")
    .position(controlX + 440, controlY + 120)
    .style("font-family", "Estragon")
    .style("color", "white");

  squareColorPicker = createColorPicker("#00FF0A");
  squareColorPicker.position(controlX + 220, controlY + 80);
  createDiv("Square Color")
    .position(controlX + 220, controlY + 120)
    .style("font-family", "Estragon")
    .style("color", "white");

  ellipseColorPicker = createColorPicker("#FFFF00");
  ellipseColorPicker.position(controlX + 660, controlY + 80);
  createDiv("Circle Color")
    .position(controlX + 660, controlY + 120)
    .style("font-family", "Estragon")
    .style("color", "white");

  triangleColorPicker = createColorPicker("#FFFFF");
  triangleColorPicker.position(controlX + 880, controlY + 80);
  createDiv("Triangle Color")
    .position(controlX + 880, controlY + 120)
    .style("font-family", "Estragon")
    .style("color", "white");

  // Shape Visibility Checkboxes
  showSquareCheckbox = createCheckbox("Show Squares", true);
  showSquareCheckbox
    .position(controlX + 880, controlY + 40)
    .style("font-family", "Estragon")
    .style("color", "white");
  showCircleCheckbox = createCheckbox("Show Circles", true);
  showCircleCheckbox
    .position(controlX + 1020, controlY + 40)
    .style("font-family", "Estragon")
    .style("color", "white");
  showTriangleCheckbox = createCheckbox("Show Triangles", true);
  showTriangleCheckbox
    .position(controlX + 1160, controlY + 40)
    .style("font-family", "Estragon")
    .style("color", "white");
  showImageCheckbox = createCheckbox("Show Background Image", true);
  showImageCheckbox
    .position(controlX + 1160, controlY + 80)
    .style("font-family", "Estragon")
    .style("color", "white");
}

class asciiGraphics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.avg = 0;
  }

  show() {
    let avgB = asciiMap[this.avg] || " ";
    if (avgB.trim() !== "") {
      push();
      translate(this.x, this.y);
      fill(squareColorPicker.color());
      noStroke();
      rectMode(CENTER);
      ellipseMode(CENTER);

      // Only draw if the checkbox is checked
      if (showSquareCheckbox.checked()) {
        square(0, 0, (gridSizeSlider.value() * sqSlider.value()) / 40);
      }

      fill(ellipseColorPicker.color());
      if (showCircleCheckbox.checked()) {
        ellipse(0, 0, (gridSizeSlider.value() * cSlider.value()) / 40);
      }

      stroke(triangleColorPicker.color());
      fill(triangleColorPicker.color());
      if (showTriangleCheckbox.checked()) {
        let tSize = triangleSlider.value() * triangleSlider.value();
        triangle(
          -tSize / 2, // X1
          -tSize / 2, // Y1
          tSize / 2, // X2
          -tSize / 2, // Y2
          0, // X3
          tSize / 2 // Y3
        );
      }

      noStroke();
      fill(strokeColorPicker.color());
      textFont(font);
      textSize(gridSizeSlider.value() * 1.8);
      textAlign(CENTER, CENTER);
      text(avgB, 0, 0);
      pop();
    }
  }
}

let rT = 10;
let gridSize = 20;
let angle1 = 0;
let angle2;
let angle3 = 0;
let pg;
let charset;
let asciiMap = [];
let cT = 10;
let s;
let font;
let asciiG = [];

function preload() {
  font = loadFont("Fonts/Estragon.ttf"); // Ensure path is correct
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(width, height);
  pg.pixelDensity(1);

  charset = "   _«å7.]";
  for (let i = 0; i < 256; i++) {
    let index = floor(map(i, 0, 255, 0, charset.length - 1));
    asciiMap[i] = charset.charAt(index);
  }

  // Create asciiGraphics objects for each grid position
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      asciiG.push(new asciiGraphics(x, y));
    }
  }

  console.log("ASCII Objects Created:", asciiG.length);
}

function draw() {
  background(0);
  pg.background(0);
  pg.push();
  rT += 9;
  cT += 0.9;
  s = map(sin(angle3), -1, 1, 0.1, 0.1);

  pg.translate(windowWidth / 2, windowHeight / 2);
  pg.scale(s);
  angle1 = sin(angle3) * 1.5;
  angle2 = cos(angle3) * 1.5;
  angle3 += 0.003;

  for (let x = -windowWidth / 2; x < windowWidth / 2; x += gridSize / 2) {
    for (let y = -windowHeight / 2; y < windowHeight / 2; y += gridSize / 2) {
      pg.noStroke();
      pg.fill(map(x, -windowWidth / 2, windowWidth / 2, 0, 255));
      pg.angleMode(DEGREES);
      pg.rotate(angle1);
      pg.rectMode(CENTER);
      pg.rotate(angle2);
      pg.rect(x * 5, (y * angle1) / 1000, cT, 30);
      pg.arc(
        x + windowWidth / 2,
        y + windowHeight / 2,
        cT * PI,
        rT * PI,
        angle2,
        CHORD
      );
    }
  }

  pg.pop();
  pg.loadPixels();

  // Update asciiG array with new brightness values
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

  // Update and display all ASCII graphics objects
  for (let i = 0; i < asciiG.length; i++) {
    asciiG[i].update();
    asciiG[i].show();
  }
}

class asciiGraphics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.avg = 0;
    this.angle = random(TWO_PI); // Each object gets its own angle
    this.angleSpeed = random(0.01, 0.03); // Each rotates at a different speed
  }

  update() {
    this.angle += this.angleSpeed; // Increment the angle for animation
  }

  show() {
    push();
    scale(0.5);
    translate(this.x, this.y);
    rotate(this.angle); // Rotate each character independently
    textFont(font);
    fill(0, 0, 250);
    textSize(gridSize * 2); // Adjust as desired for scale
    let char = asciiMap[this.avg];
    text(char, 0, 0);
    pop();
  }
}

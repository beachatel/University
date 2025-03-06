let angle = 0.01;
let amplitude = 70;
let gridSize = 10;
let font;

function preload() {
  font = loadFont("Fonts/Magistral.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#0b0b0b");
  textFont(font);
}

function draw() {
  // Update colors and settings
  push();
  fill(0, 255, 100);
  ellipseMode(CENTER);
  translate(width / 2, height / 2);
  scale(20);

  // Precompute values to avoid recalculating in every loop
  let x1 = map(sin(angle), -1, 2, -amplitude, amplitude);
  let y1 = map(cos(angle), -1, 2, -amplitude, amplitude);

  // Drawing ellipses
  stroke(0, 0, 255);
  for (let x = x1; x < width; x += gridSize) {
    for (let y = y1; y < height - 170; y += gridSize) {
      rotate(0.1);
      ellipse(x, y, x1, y1);
    }
  }
pop();
  // Draw rectangle backgrounds for the footer
  noStroke();
  rectMode(CENTER);
 fill(0, 255, 100);
  rect(0, height - 90, width * 2, height / 5); // First footer rectangle (background)
  fill(0);
  rect(0, height, width * 2, height / 6); // Second footer rectangle (background)

  // Draw text
  textSize(90);
  fill(0);
  text("JUPITER DISCO", width / 30, height / 1.12); // Adjusted y-position for footer text
  textSize(40);
  fill(0, 255, 100);
  text("Animated Poster Concept Series V4", width / 28, height / 1.02); // Adjusted y-position for footer text

  // Update angle
  angle += 0.01;
}

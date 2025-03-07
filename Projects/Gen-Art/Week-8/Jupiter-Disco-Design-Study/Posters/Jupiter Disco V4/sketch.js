let sketch4 = function(p){

let angle = 0.01;
let amplitude = 70;
let gridSize = 10;
let font;

p.preload = function() {
  font = p.loadFont("Fonts/Magistral.ttf");
}

p.setup = function () {
  p.createCanvas(p.windowWidth / 2, p.windowHeight);
  p.background("#0b0b0b");
  p.textFont(font);
}

p.draw = function() {
  // Update colors and settings
 p. push();
  p.fill(0, 255, 100);
 p. ellipseMode(p.CENTER);
   
  p.translate(p.width / 2, p.height / 2);
 p.scale(2);

  // Precompute values to avoid recalculating in every loop
  let x1 = p.map(p.sin(angle), 0.1, 2, -amplitude, amplitude);
  let y1 = p.map(p.cos(angle), 0.1, 2, -amplitude, amplitude);

  // Drawing ellipses
  p.stroke("#0b0b0b");
  p.strokeWeight(20);
  for (let x = 0; x < p.width; x += p.gridSize * 2) {
    for (let y = 0; y < p.height; y += p.gridSize * 2) {
      p.rotate(0.2);
      p.rect(x * 2, y * 4, x1 *x1 * 2, y1 * y1 * 2);
    }
  }
p.pop();
  // Draw rectangle backgrounds for the footer
p.noStroke();
  p.rectMode(p.CENTER);
 p.fill(0, 255, 100);
  p.rect(0, p.height - 90, p.width * 2, p.height / 5); // First footer rectangle (background)
  p.fill(0);
  p.rect(0, p.height, p.width * 2, p.height / 6); // Second footer rectangle (background)

  // Draw text
  p.textSize(90);
  p.fill(0);
  p.text("JUPITER DISCO", p.width / 30, p.height / 1.12); // Adjusted y-position for footer text
  p.textSize(40);
  p.fill(0, 255, 100);
  p.text("Animated Poster Concept Series V4", p.width / 28, p.height / 1.02); // Adjusted y-position for footer text

  // Update angle
  angle += 0.005;
}
}
new p5(sketch4,'sketch4container');

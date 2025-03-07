
let sketch5 = function(p){

let angle = 0.01;
let amplitude = 70;
let gridSize = 10;
let font;

 p.preload = function () {
  font = p.loadFont("Fonts/Magistral.ttf");
}

p.setup = function() {
  p.createCanvas(p.windowWidth / 2, p.windowHeight);
  p.background("#0b0b0b");
  p.textFont(font);
}

 p.draw = function() {
  // Update colors and settings
  p.push();
  p.fill(41, 95, 139);
  p.ellipseMode(p.CENTER);
  p.translate(p.width / 2, p.height / 2);
  p.scale(5);

  // Precompute values to avoid recalculating in every loop
  let x1 = p.map(p.sin(angle), -1, 2, -amplitude, amplitude);
  let y1 = p.map(p.cos(angle), -1, 2, -amplitude, amplitude);

  // Drawing ellipses
  p.stroke(255,0,0);
  p.strokeWeight(2);
  for (let x = x1; x < p.width; x += gridSize) {
    for (let y = y1; y < p.height - 170; y += gridSize) {
      p.rotate(0.1);
      p.ellipse(x / 2, y / 2, x1, y1);
    }
  }
p.pop();
  // Draw p.rectangle backgrounds for the footer
  p.noStroke();
  p.rectMode(p.CENTER);
  p.fill(255,0,0);
  p.rect(0, p.height - 90, p.width * 2, p.height / 5); // First footer p.rectangle (background)
  p.fill(0);
  p.rect(0, p.height, p.width * 2, p.height / 6); // Second footer p.rectangle (background)

  // Draw text
  p.textSize(90);
  p.fill(0);
  p.text("JUPITER DISCO", p.width / 30, p.height / 1.12); // Adjusted y-position for footer text
  p.textSize(40);
  p.fill(255,0,0);
  p.text("Animated Poster Concept Series V5", p.width / 28, p.height / 1.02); // Adjusted y-position for footer text


  // p.fill(0);
  // p.rect(20, 20, 200,1510);
  // p.rect(width - 20, 20, 200,1510);
  // p.rect(height - 20, 0, width * 4,200);
  // p.rect(100, 750, 2000,50);
  // Update angle
  angle += 0.01;
}
}
new p5(sketch5,'sketch5container');
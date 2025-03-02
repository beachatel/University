let amplitude = 100;
let period = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(255);
  noStroke();
  fill(0);
  let x = width / 2;
  let y = amplitude * sin((TWO_PI * frameCount) / period);

  ellipse(x, y + height / 2, y, y);

  let x1 = amplitude * sin((TWO_PI * frameCount) / period);
  let y1 = height / 2;
  ellipse(x1 + width / 2, y1, y, y);
}

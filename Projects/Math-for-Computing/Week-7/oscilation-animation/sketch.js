function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  background(255, 255, 0);
}

function draw() {
  let period = 120;
  let amplitude = 150;
  let y = amplitude * sin((TWO_PI * frameCount) / period);
  /*
see angular velocity in other code
*/

  noStroke();
  fill(0, 0, 255);
  translate(width / 2, height / 3);

  push();
  scale(0.5);
  translate(width / 3, height / 5.5);
  let r = (y / frameCount) * y;
  rotate(r);
  if ((y / frameCount) * y > 20) {
    y = 0;
  }
  rect(y, y, y, y);
  fill(255, 0, 0);
  rect(y / 1.5, y / 1.5, y / 1.5, y / 1.5);
  fill(0, 255, 0);
  rect(y / 2, y / 2, y / 2, y / 2);
  fill(255, 255, 0);
  rect(y / 4, y / 4, y / 4, y / 4);
  pop();
  console.log(y);
  // model the full wave
  //when you do this, move background into setup()
  let x = frameCount; // experiment with multiplying/ dividing this
  // Note also: frequency = 1/period, so note how this changes with frameCount
  push();
  scale(0.6);
  translate(width / 4, height / 5);
  rotate(0.1);
  fill("black");
  translate(-width / 2, height / 2);
  textSize(50);
  stroke(255, 255, 0);
  strokeWeight(5);
  text("Commissions", x - 500, y * 0.9);
  fill(0, 0, 255);
  noStroke();
  rect(x - 200, y * 0.9, 20, 5);
  rect(x - 500, y * 0.9, 20, 5);
  noFill();
  rectMode(CENTER);
  pop();

  push();
  scale(0.6);
  translate(width / 12, height / 3);
  rotate(0.1);
  fill("black");
  translate(-width / 2, height / 2);
  textSize(50);
  stroke(255, 255, 0);
  strokeWeight(5);
  text("Open", x, y * 0.9);
  fill(0, 0, 255);
  noStroke();
  rect(x, y * 0.9, 20, 5);
  rect(x - 200, y * 0.9, 20, 5);
  noFill();
  rectMode(CENTER);
  pop();

  push();
  scale(0.8);
  translate(width / 12, height / 5);
  rotate(-0.1);
  fill("black");
  translate(-width / 2, height / 2);
  textSize(40);
  stroke(255, 255, 0);
  strokeWeight(5);

  text("  bchatelbell@gmail.com", -x + 600, -y - 800);
  fill(0, 0, 255);
  rect(-x + 600 - 20, -y - 800 - 20, 20, 5);
  rect(-x + 600 - 20, -y - 800 - 20, 40, 40);

  noStroke();

  noFill();
  rectMode(CENTER);
  pop();

  // rect(0 + windowWidth / 2, 0, windowWidth - 20, windowHeight - 20);
  // fill(255);
  // noStroke();
  // rect(0, 150, 30, 200);
  // rect(windowWidth - 1, 150, 30, 200);
}

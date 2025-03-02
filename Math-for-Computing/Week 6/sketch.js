let angle = 0;
let angle1 = 0;
let angle2 = 0;
let angleVelocity = 0;
let angleAcceleration = 0.00000009;
let gridSize = 10;
let gridSize1 = 20;
let font;
let tX = 50;
let tS = 35;
let sx1, sx2, sx3, sx4; //individual shape animations positioning
let sy1, sy2, sy3, sy4;
let diameter;

// lets rethink this in terms of angular velocity
// angular velocity = angular velocity + angular accelleration
// angle = angle + angular velocity

function preload() {
  font = loadFont("Fonts/connect1.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  diameter = height - 100;
}

function draw() {
  background(0);

  // tX += 0.4;
  // tS += random(0.5);
  fill(50, 1000, 100);
  rect(tX - 25, 20, 450, 50, 10);
  fill(0);
  noStroke();
  textFont(font);
  textSize(tS);

  text("p5.js Trigonometry", tX - 20, 55);
  fill(50, 1000, 100);
  rect(tX - 25, 85, 450, 200, 10);

  push();

  fill(0);
  rectMode(CENTER);
  rect(width / 7, height / 4.5, 120, 120, 10);

  translate(width / 7, height / 4.5);
  textSize(45);
  fill(0);
  text("rotate()", tX + 130, 110);
  scale(0.4);
  let sx1 = width / 2;
  let sy1 = height / 2;
  noStroke();

  scale(0.0005);

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      rotate(angle);

      fill("#8fc6b6");
      rect(x, y, x * y, (x * y) / 100);
      fill(0);
    }
  }

  pop();

  if (angle > 0.004) {
    angle = 0;
  }
  ellipseMode(CENTER, CENTER);
  fill("#7dfb78");
  ellipse(width / 7, width / 4.5, 20 * angle * 500, 20 * angle * 500);

  // shape 2
  push();
  fill(0);
  rectMode(CENTER);
  rect(width / 2.86, height / 4.5, 160, 120, 10);

  translate(width / 2.85, height / 4.5);
  fill(255);

  scale(0.2);
  noStroke();
  scale(0.0005);
  fill("#8fc6b6");

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      rotate(angle);
      rect((x * y) / 2, y, x * y, y * 2);
    }
  }
  pop();
  ellipseMode(CENTER, CENTER);
  fill("#7dfb78");
  ellipse(width / 2.85, width / 4.5, 20 * angle * 500, 20 * angle * 500);
  // shape 3
  push();
  fill(0);
  rectMode(CENTER);
  rect(width / 1.8, height / 4.5, 120, 120, 10);

  translate(width / 1.8, height / 4.5);
  fill(255);

  scale(0.4);
  fill("#d65c9c");
  noStroke();

  scale(0.0005);
  fill("#8fc6b6");

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      rotate(angle);
      rect(x, y, x * y, (x * y) / 100);
    }
  }
  pop();
  ellipseMode(CENTER, CENTER);
  fill("#7dfb78");
  ellipse(width / 1.8, width / 4.5, 20 * angle * 500, 20 * angle * 500);

  // BOX TWO
  //
  //
  //
  //
  //

  fill(50, 1000, 100);
  rect(tX - 25, 300, 450, 200, 10);

  push();

  fill(0);
  rectMode(CENTER);
  rect(width / 7, height / 1.95, 120, 120, 10);

  translate(width / 7, height / 1.95);
  textSize(45);
  fill(0);
  text("sin()", tX + 200, 110);
  scale(0.4);

  noStroke();

  scale(0.05);
  fill("#8fc6b6");
  rectMode(CENTER);

  pop();

  if (angle1 > 0.04) {
    angle1 = 0;
  }

  // shape 2
  push();
  fill(0);
  rectMode(CENTER);
  rect(width / 2.86, height / 1.95, 160, 120, 10);

  translate(width / 2.85, height / 1.95);
  fill(255);

  scale(0.2);
  noStroke();
  scale(0.0005);
  fill("#8fc6b6");

  pop();

  // shape 3
  push();
  fill(0);
  rectMode(CENTER);
  rect(width / 1.8, height / 1.95, 120, 120, 10);

  translate(width / 1.88, height / 2.05);
  fill(255);

  scale(0.4);
  fill("#d65c9c");
  noStroke();
  ellipseMode(CENTER);
  scale(0.13);
  fill("#8fc6b6");

  let d1 = 10 + (sin(angle2) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle2 + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (sin(angle2 + PI) * diameter) / 2 + diameter / 2;

  ellipse(0, height / 2, d1, d1);
  ellipse(width / 2, height / 2, d2, d2);
  ellipse(width, height / 2, d3, d3);
  fill(0);
  ellipse(0, height / 2, d1 / 4, d1 / 4);
  ellipse(width / 2, height / 2, d2 / 4, d2 / 4);
  ellipse(width, height / 2, d3 / 4, d3 / 4);
  angle2 += 0.1;

  pop();

  //box 3
  rect(tX - 25, 515, 450, 200, 10);
  // push();
  // translate(width / 2, height / 2);
  // scale(0.1);
  // for (i = 0; i < width; i++) {
  //   rect(0 - i, 0, 0, i); //top left
  //   rect(0, 0 - i, i, 50); //top right
  //   rect(0 - i, 0, 50, i); //bottom left
  //   rect(i, 0, 50, i); //bottom right
  // }
  // pop();

  angleVelocity += angleAcceleration;
  angle += angleVelocity;

  angleVelocity += angleAcceleration;
  angle1 += angleVelocity;
}

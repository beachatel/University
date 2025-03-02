// Particle variables
let particles = []; // Array to store particle objects
let partAmount = 500; // Total number of particles
let particlesize = 8; // Size of each particle
let font;
let charset = "";
let charset1 = "This";
let charset2 = "is";
let charset3 = "a";
let charset4 = "poster";
let charArray = [
  charset1,
  charset1,
  charset1,
  charset2,
  charset3,
  charset4,
  charset4,
  charset4,
];

//vector field variables
let scale = 10;
let cols, rows;
let flowField = [];

function preload() {
  font = loadFont("Data/EstragonBold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // Create a canvas of size 900x1200 pixels

  cols = floor(width / scale);
  rows = floor(height / scale);

  flowField = new Array(cols * rows);

  // Initialize particles with different colors
  for (let i = 0; i < partAmount / 3; i++) {
    particles.push(
      new Particle(
        random(width / 2 - 20, width / 2 + 20),
        random(height),
        particlesize,
        color(0, 255, 50)
      )
    );
  }

  for (let i = 0; i < partAmount / 3; i++) {
    particles.push(
      new Particle(
        random(width / 2 - 20, width / 2 + 20),
        random(height),
        particlesize,
        color(0, 100, 255)
      )
    );
  }

  for (let i = 0; i < partAmount / 3; i++) {
    particles.push(
      new Particle(
        random(width / 2 - 20, width / 2 + 20),
        random(height),
        particlesize,
        color(255, 100, 0)
      )
    );
  }
  background(0);
}
let xoff = 0;
function draw() {
  background(0);

  let r = map(noise(xoff), 0, 1, 0, charArray.length);
  let r2 = map(noise(xoff + 10), 0, 1, 0, 5);
  xoff += 0.1;
  console.log(r);

  charset = charArray[floor(r)];
  // } else if (r < 0.5) {
  //   charset = "is";
  // } else if (r < 0.75) {
  //   charset = "a";
  // } else {
  //   charset = "poster";
  // }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i + j * cols;
      let center = createVector(i * scale + scale / 2, j * scale + scale);
      // let dir = p5.Vector.sub(mouse, center);
      // let dir = createVector(0.09, 0.1);

      // if(i > cols/2 -2 && i < cols/2+2){}
      let x = map(i, 0, cols, -scale, scale);
      let y = map(j, 0, rows, -scale, scale);
      let u = sin(y);
      let v = sin(x * tan(x / 100));
      // let t = tan(x * y);
      let dir = createVector(u, v);
      flowField[index] = dir;
      // drawField(center.x, center.y, dir);
    }
  }
  //Update and display each particle
  for (let i = 0; i < particles.length; i++) {
    // let gravity = createVector(0, 0.1);
    particles[i].follow(flowField); // Apply gravity to the particle
    particles[i].update(); // Update the particle's position
    particles[i].edges(); // Handle the edges of the canvas
    particles[i].show(r2); // Display the particle
  }
}

// function drawField(x, y, v) {
//   push();

//   // ellipse(mouseX, mouseY, 50, 50);
//   // fill(0);
//   stroke(0);
//   strokeWeight(10);
//   translate(x, y);
//   rotate(v.heading());
//   line(0, 0, scale / 2, 0);

//   point(scale / 2, 0);
//   pop();
// }

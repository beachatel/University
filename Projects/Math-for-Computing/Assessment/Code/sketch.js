let angle = 0;
let cam;
let points = []; // Array to store the points of the attractor
let x = 0.1, y = 0, z = 0; // Initial conditions
let a, b, c, d, f, g; // Aizawa parameters
let dtSlider, pointSize, clearButton, showAxisButton;
let font;
let showAxis = true; // Boolean to track axis visibility

function preload() {
  font = loadFont("Fonts/karrik.ttf");
}

function setup() {
  createCanvas(windowWidth / 1.2, windowHeight, WEBGL);

  cam = createCamera();
  cam.setPosition(200, -4000, 1000);
  cam.lookAt(0, 0, 0);
  createSliders();
}

function draw() {
  background(0);
  orbitControl(); 


  // axis guidelines
  if (showAxis) {

    strokeWeight(5);

    stroke(255, 0, 0); // Red for X-axis
    line(-5000, 0, 0, 5000, 0, 0); // X-axis

    stroke(0, 255, 0); // Green for Y-axis
    line(0, -5000, 0, 0, 5000, 0); // Y-axis

    stroke(0, 0, 255); // Blue for Z-axis
    line(0, 0, -5000, 0, 0, 5000); // Z-axis
  }

  let dt = dtSlider.value(); // Time step
  let pointSize = slider2.value();

  // Update Aizawa parameters from sliders
  let aVal = a.value();
  let bVal = b.value();
  let cVal = c.value();
  let dVal = d.value();
  let fVal = f.value();
  let gVal = g.value();

  clearButton.mousePressed(() => {
    points = []; // Clear the points array
    x = 0.1; // Reset initial conditions
    y = 0;
    z = 0;
  });

  ambientLight(200);
  pointLight(255, 255, 255, 0, 0, 500);

  noStroke();
  fill(255, 100, 150);
  // Calculate the next point of the Aizawa attractor
  let dx = (z - bVal) * x - dVal * y;
  let dy = dVal * x + (z - bVal) * y;
  let dz =
    cVal +
    aVal * z -
    z ** 3 / 3 -
    (x ** 2 + y ** 2) * (1 + fVal * z) +
    gVal * z * x ** 3;

  x += dx * dt;
  y += dy * dt;
  z += dz * dt;

  // Scale the point for better visualization and add it to the array
  points.push(createVector(x * 1000, y * 1000, z * 1000));

  // Limit the number of points to avoid performance issues
  if (points.length > 50000) {
    points.shift();
  }

  // Draw the Aizawa attractor points
  for (let p of points) {
    push();
    translate(p.x, p.y, p.z);
    sphere(pointSize); // Small spheres for each point
    pop();
  }
}







/// sliders to control params

function createSliders() {
  dtSlider = createSlider(0.01, 0.09, 0.01, 0.01);
  dtSlider.position(20, 50);
  let tLabel = createDiv(`dt: ${dtSlider.value()}`);
  tLabel.position(200, 50);
  tLabel.style("color","white")
  dtSlider.input(() => tLabel.html(`dt: ${dtSlider.value()}`));

  slider2 = createSlider(1, 40, 10, 0.1);
  slider2.position(20, 100);


  a = createSlider(0.5, 1.5, 0.95, 0.01);
  a.position(20, 150);
  let aLabel = createDiv(`a: ${a.value()}`);
  aLabel.position(200, 150);
  aLabel.style("color","white")
  a.input(() => aLabel.html(`a: ${a.value()}`));

  b = createSlider(0.5, 1.0, 0.7, 0.01);
  b.position(20, 200);
  let bLabel = createDiv(`b: ${b.value()}`);
  bLabel.position(200, 200);
   bLabel.style("color","white")
  b.input(() => bLabel.html(`b: ${b.value()}`));

  c = createSlider(0.5, 1.0, 0.6, 0.01);
  c.position(20, 250);
  let cLabel = createDiv(`c: ${c.value()}`);
  cLabel.position(200, 250);
  cLabel.style("color","white")
  c.input(() => cLabel.html(`c: ${c.value()}`));

  d = createSlider(2.0, 5.0, 3.5, 0.1);
  d.position(20, 300);
  let dLabel = createDiv(`d: ${d.value()}`);
  dLabel.position(200, 300);
  dLabel.style("color","white")
  d.input(() => dLabel.html(`d: ${d.value()}`));

  f = createSlider(0.1, 0.5, 0.25, 0.01);
  f.position(20, 350);
  let fLabel = createDiv(`f: ${f.value()}`);
  fLabel.position(200, 350);
  fLabel.style("color","white")
  f.input(() => fLabel.html(`f: ${f.value()}`));

  g = createSlider(0.05, 0.2, 0.1, 0.01);
  g.position(20, 400);
  let gLabel = createDiv(`g: ${g.value()}`);
  gLabel.position(200, 400);
  gLabel.style("color","white")
  g.input(() => gLabel.html(`g: ${g.value()}`));

  clearButton = createButton("Clear Canvas");
  clearButton.position(20, 450);

  showAxisButton = createButton("Show/Hide Axis Guidelines");
  showAxisButton.position(20, 500);
  showAxisButton.mousePressed(() => {
    showAxis = !showAxis; // Toggle the axis visibility
  });
}

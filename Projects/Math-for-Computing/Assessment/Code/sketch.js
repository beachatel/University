let angle = 0;
let cam,font;
let points = []; // Array to store the points of the attractor
let x = 0.1, y = 1, z = 0.01; // Initial conditions
let a, b, c, d, e, f; // Aizawa parameters
let showAxis = true; // Boolean to track axis visibility


function setup() {
  createCanvas(windowWidth / 1.21, windowHeight, WEBGL);

  cam = createCamera();
  cam.setPosition(200, -4000, 1000);
  cam.lookAt(0, 0, 0);

  createSliders();
}

function draw() {
  background(0);
  orbitControl(); //3d camera control


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

  let dt = discreteTimeSlider.value(); // Time step
  let pointSize = pointSizeSlider.value();
  let pointLength = pointLengthSlider.value();

  // Update Aizawa parameters from sliders
  let aVal = a.value();
  let bVal = b.value();
  let cVal = c.value();
  let dVal = d.value();
  let eVal = e.value();
  let fVal = f.value();

  clearButton.mousePressed(() => {
    points = []; // Clear the points array
    x = 0.1; // Reset initial conditions
    y = 0;
    z = 0;
  });

  // ambientLight(200);
  // pointLight(255, 255, 255, 0, 0, 500);

  noStroke();
  fill(255, 100, 200);

  // Aizawa equations
  let dx = (z - bVal) * x - dVal * y;
  let dy = dVal * x + (z - bVal) * y;
  let dz =
    cVal +
    aVal * z -
    z ** 3 / 3 -
    (x ** 2 + y ** 2) * (1 + eVal * z) +
    fVal * z * x ** 3;

  x += dx * dt;
  y += dy * dt;
  z += dz * dt;

  // Scale the point for better visualization and add it to the array
  points.push(createVector(x * 1000, y * 1000, z * 1000));

  // Limit the number of points to avoid performance issues
  if (points.length > pointLength) {
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







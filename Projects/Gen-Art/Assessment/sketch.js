let video;
let superForms = [];
let gridSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  pixelDensity(1);
  frameRate(60);

  // Initialize superForms
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      superForms.push(new SuperForm(x, y, gridSize, 0));
    }
  }
}

function draw() {
  background(0);
  video.loadPixels();

  // Update brightness and properties of each SuperForm
  for (let sf of superForms) {
    sf.update();
    let index = int(sf.x + sf.y * video.width);
    if (index < video.pixels.length) {
      let r = video.pixels[index * 4];
      let g = video.pixels[index * 4 + 1];
      let b = video.pixels[index * 4 + 2];
      let a = video.pixels[index * 4 + 3];
      sf.brightness = int((r + g + b + a) / 4);
    }
  }

  // Render supershapes
  for (let sf of superForms) {
    sf.display();
  }
}


class SuperForm {
  constructor(x, y, w, brightness) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.brightness = brightness;
    this.rotation = random(TWO_PI);
  }

  update() {
    // this.rotation += 0.1; // Rotate over time
  this.rotation += 0.1 + sin(frameCount * 0.01) * 0.05; // Add a sine wave based on frameCount
  }

  display() {
  let alpha = map(this.brightness, 0, 255, 100, 255);
  push();
  translate(this.x + this.w / 2, this.y + this.w / 2);
  rotate(this.rotation);

  let colorShift = sin(frameCount * 0.1 + this.brightness * 0.005) * 255;
  fill(this.brightness + colorShift, this.brightness - colorShift, this.brightness, alpha);
  noStroke();

  beginShape();
  let numPoints = 100;
  for (let theta = 0; theta <= TWO_PI; theta += TWO_PI / numPoints) {
    let dynamicA = 0.4 + 0.2 * sin(this.rotation + frameCount * 0.01);
    let dynamicB = 0.4 + 0.2 * cos(this.rotation / 2 + frameCount * 0.01);
    let dynamicM = 12 + sin(frameCount * 0.05); 
    let radius = this.r(theta * 2, dynamicA, dynamicB, dynamicM, 1, 2, 1);
    let adjustedRadius = radius * this.w;
    vertex(adjustedRadius * cos(theta * 2), adjustedRadius * sin(theta * 2));
  }
  endShape();
  pop();
}


  r(theta, a, b, m, n1, n2, n3) {
    let cosPart = pow(abs(cos((m * theta) / 4.0) / a), n2);
    let sinPart = pow(abs(sin((m * theta) / 4.0) / b), n3);
    return pow(cosPart + sinPart, -1.0 / n1);
  }
}

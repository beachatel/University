let font;
let asciifier;
let drawContext;
let gridSize = 25;
let sine;

function preload() {
  font = loadFont("Fonts/EstragonBold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 75);
  // constructor(charset, font, resolution, drawContext);
  frameRate(60);
  let charset = " BABYK";
  let resolution = 5;
  let textSize = resolution * 2;
  drawContext = createGraphics(width, height);
  drawContext.pixelDensity(1);

  asciifier = new Asciifier(charset, font, resolution, textSize, drawContext);
}

function draw() {
  background(0);
  drawContext.background(0);
  drawContext.fill(100, 255, 100);
  drawContext.stroke(100, 0, 255);

  sine = sin(2);
  let lerpedRand = lerp(gridSize * sin(3, 3.5), gridSize * random(sin(2)), 3);

  console.log(sine);
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let r = random(1);
      if (r > 0.5) {
        drawContext.ellipse(x, y, lerpedRand, lerpedRand);
      } else {
        drawContext.rect(x, y, lerpedRand, lerpedRand);
      }
    }
  }

  // image(drawContext, 0, 0);
  asciifier.render();
}

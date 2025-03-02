let gridScale = 12;
let charset;
let asciiMap = [];

function preload() {
  // Load the image
  img = loadImage("assets/girl_pearl.png");
}
function setup() {
  createCanvas(400, 400);
  //resize the canvas to the size of the image
  resizeCanvas(img.width, img.height);
  pixelDensity(1);
  charset = ".,_-;:+=*^%$&£@!";
  for (let i = 0; i < 255; i++) {
    let index = int(map(i, 0, 254, 0, charset.length));
    asciiMap[i] = charset.charAt(index);
  }
}

function draw() {
  background(0);
  img.loadPixels(); // Load the pixels of the image to the pixels[] array

  for (let x = 0; x < img.width; x += gridScale) {
    for (let y = 0; y < img.height; y += gridScale) {
      let index = (x + y * img.width) * 4; // Get the index of the pixel
      // Get the RGBA values of the pixel
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      let c = color(r, g, b, a); // Create a color object from the RGBA values
      // fill(c);
      let avg = int((r + g + b + a) / 4);

      let rectSize = map(avg, 0, 255, 1, gridScale);

      // noStroke();
      fill(c);
      text(asciiMap[avg], x, y);
    }
  }
}

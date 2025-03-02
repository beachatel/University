let img, vid;
let gridSize = 20;
let playing = true;
let charset;
let asciiMap = [];
let font;
let video;

function preload() {
  // img = loadImage("img/still.png");

  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);

  font = loadFont("/Fonts/EstragonBold.ttf");
}

function setup() {
  createCanvas(400, 400);
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  charset = "   ABCDEFGHIJK";

  for (let i = 0; i < 255; i++) {
    // let index = int(map(i, 100, 254, 0, charset.length));
    let index = int(map(i, 100, 254, 0, charset.length));
    asciiMap[i] = charset.charAt(index);
  }
}

function draw() {
  background(0);
  let img = video.get();
  img.loadPixels();
  video.hide();
  // // image(img,0,0);
  //   image(video, 0,0);
  // img.resize(100,100);
  // console.log(img);

  for (let x = 0; x < img.width; x += gridSize) {
    for (let y = 0; y < img.height; y += gridSize) {
      //red, green, blue + alpha values;
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index]; //pixel array
      let g = img.pixels[index + int(random(5))];
      let b = img.pixels[index + int(random(5))];
      let a = img.pixels[index + int(random(5))];
      let colour = color(r, g, b, a);

      // let avg = (r + g + b + a) / 4;
      let avg = int((r + g + b + a) / 4);

      // let rectSize = map(avg, 0, 255, 1, gridScale);
      let w = 10;
      fill(255, 0, 0);
      textFont(font);
      textSize(20);

      textAlign(CENTER, CENTER);
      noFill();
      rect(x, y, gridSize);
      fill(colour);
      text(asciiMap[avg], x + w / 2, y + w / 2);
    }
  }
}

function mousePressed() {
  if (playing) {
    vid.pause();
  } else {
    vid.play();
  }
  playing = !playing;
}

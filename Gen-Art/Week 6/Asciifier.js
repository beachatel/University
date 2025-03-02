class Asciifier {
  constructor(charset, font, resolution, textSize, drawContext) {
    this.charset = charset;
    this.font = font;
    this.resolution = resolution;
    this.textSize = textSize;
    this.drawContext = drawContext;
    this.asciiMap = [];

    for (let i = 0; i < 256; i++) {
      let index = int(map(i, 0, 255, 0, this.charset.length));
      this.asciiMap[i] = this.charset.charAt(index);
    }

    this.clrMode = createSelect();
    this.clrMode.option("RGB");
    this.clrMode.option("Grayscale");
    this.clrMode.option("White");
  }

  render() {
    this.drawContext.loadPixels();
    for (let x = 0; x < this.drawContext.width; x += this.resolution) {
      for (let y = 0; y < this.drawContext.height; y += this.resolution) {
        let index = int(x + y * this.drawContext.width) * 4;
        let r = this.drawContext.pixels[index];
        let g = this.drawContext.pixels[index + 1];
        let b = this.drawContext.pixels[index + 2];
        let brightness = (r + g + b) / 3;

        if (this.clrMode.selected() === "RGB") {
          fill(r, g, b);
        } else if (this.clrMode.selected() === "Grayscale") {
          fill(brightness);
        } else {
          fill(255);
        }

        textSize(this.textSize);
        textFont(this.font);
        text(this.asciiMap[int(brightness)], x, y);
      }
    }
  }
}

// function preload() {
//   font1 = loadFont("/Fonts/");
//   font2 = loadFont("/Fonts/");
//   font3 = loadFont("/Fonts/");
// }

// charset = "";
// font = "/Font/";

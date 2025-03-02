class Grid {

  constructor(sx, sy, dx, dy, size) {
    this.sx = sx;      // Where in the image copy pixels from
    this.sy = sy;
    this.dx = dx;      // Where on the canvas copied pixels are drawn
    this.dy = dy;
    this.size = size;
  }

  show() {
    // Copy from (sx, sy) in the image to (dx, dy) on the canvas
    copy(
      img, //source image
      this.sx, this.sy,       // source x, y in the image
      this.size, this.size,   // source width, height
      this.dx, this.dy,       // destination x, y on the canvas
      this.size, this.size    // destination width, height
    );
  }


  update(newDX, newDY) {
    // Move the chunk on the canvas
    this.dx = newDX;
    this.dy = newDY;
  }
}
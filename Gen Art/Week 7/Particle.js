class Particle {
  constructor(x, y, particlesize, colour) {
    this.pos = createVector(x, y); // Initialize position randomly on the canvas
    this.vel = createVector(0, 0); // Initialize velocity to zero
    this.acc = createVector(0, 0); // Initialize acceleration to zero
    this.maxSpeed = 3; // Set the maximum speed of the particle
    this.particlesize = particlesize; // Set the size of the particle
    this.colour = colour; // Set the color of the particle
    this.str = Math.random() * 3;
    this.size = scale * random(1, 5);
  }

  follow(vectors) {
    let x = floor(this.pos.x / scale);
    let y = floor(this.pos.y / scale);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force); // Add the force to the particle's acceleration
  }

  update() {
    this.vel.add(this.acc); // Update velocity based on acceleration
    this.vel.limit(this.maxSpeed); // Limit the velocity to the maximum speed
    this.pos.add(this.vel); // Update position based on velocity
    this.acc.mult(0); // Reset acceleration to zero
  }

  edges() {
    // Handle the particle's edges by wrapping around the canvas
    if (this.pos.x > width + 100) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  show(r2) {
    stroke(this.colour); // Set the stroke color to the particle's color
    strokeWeight(particlesize * r2); // Set the stroke weight to the particle's size
    textFont(font);
    textSize(this.size);
    rectMode(CENTER);
    fill(0);
    // let r = random(1);
    // if (r < 0.25) {
    // text(charset1.charAt(random(charset.length)), this.pos.x, this.pos.y); // Draw the particle as a point
    text(charset, this.pos.x, this.pos.y); // Draw the particle as a point
    // } else if (r > 0.5) {
    //   // text(charset2.charAt(random(charset.length)), this.pos.x, this.pos.y); // Draw the particle as a point
    //   text(charset, this.pos.x, this.pos.y); // Draw the particle as a point
    // } else if (r > 0.75) {
    //   // text(charset3.charAt(random(charset.length)), this.pos.x, this.pos.y); // Draw the particle as a point
    //   text(charset3, this.pos.x, this.pos.y); // Draw the particle as a point
    // } else {
    //   // text(charset4.charAt(random(charset.length)), this.pos.x, this.pos.y); // Draw the particle as a point
    //   text(charset4, this.pos.x, this.pos.y); // Draw the particle as a point
    // }
    // }
    // fill(this.colour);
    // rect(this.pos.x, this.pos.y, 20, 20);
    // text("charset", this.pos.x * 2, this.pos.y * 2); // Draw the particle as a point
  }
}

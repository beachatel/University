let velocity,position;
function setup() {
  createCanvas(windowWidth, windowHeight);

  position = createVector(30,100);
  velocity = createVector(5,2);
 
}

function draw() {

   background(0);
 position.add(velocity);

 if (position.x > width - 30 || position.x < 0){
  velocity.x = velocity.x *-1;
 }

 if (position.y > height - 30 || position.y < 0){
  velocity.y = velocity.y *-1;
 }


 noStroke();
 fill(255,0,0);
 square(position.x,position.y,100);
 fill(255);
 textSize(20)
 text(position.x, position.x - 10, position.y - 10);
 text(position.y, position.x - 10, position.y + 110);
 stroke(255);
 line(position.x + width,position.y,position.x,position.y);
 line(position.x,position.y + height,position.x,position.y);
 line(position.x,position.y,position.x - width,position.y);
 line(position.x,position.y,position.x,position.y - height);
}

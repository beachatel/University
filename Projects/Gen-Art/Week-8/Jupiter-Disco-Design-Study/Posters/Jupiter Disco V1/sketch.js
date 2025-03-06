let angle = 0.1;
let amplitude = 200;
let gridSize = 100;
let font;

function preload(){
  font = loadFont("Fonts/Magistral.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
   background("#0b0b0b");
}

function draw() {
  push();
  translate(width/2,height/3);

  for (let x = 0; x < width; x += gridSize){
    for (let y = 0; y < height; y+= gridSize){


  scale(0.9);
  fill(0,0,255);
  stroke(255,100,100,150);
  strokeWeight(2);

  let y  = map(sin(angle),-1,1,-amplitude,amplitude);
    let x  = map(cos(angle),-1,7,-amplitude,amplitude);


  ellipse(y,x,100,100);
  scale(0.7);
  ellipse(y *= -2,x *= -2,100,100);
  

    }
  }
pop();
  fill(255,100,100);
  noStroke();
  rectMode(CENTER);
    rect(0,height - 90,width  *2, height / 5);
    fill(0);
    rect(0,height,width  *2, height / 6);
  fill(0);
  textFont(font);
  textSize(90)
  
    text("JUPITER DISCO",width / 30,height / 1.12)
    textSize(40);
    fill(255,100,100);
        text("Animated Poster Concept Series V1", width / 28,height / 1.02)

   angle += 0.01
}

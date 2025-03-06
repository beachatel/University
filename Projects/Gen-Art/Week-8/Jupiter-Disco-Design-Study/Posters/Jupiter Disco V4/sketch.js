let angle = 0.1;
let amplitude = 50;
let gridSize = 50;
let font;
let counter = 10;

function preload(){
  font = loadFont("Fonts/Magistral.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
   background("#0b0b0b");
}

function draw() {
  push();
    fill(0,255,100);
ellipseMode(CENTER);


 
  let x1  = map(sin(angle),-1,2,-amplitude,amplitude);
 let y1  = map(cos(angle),-1,2,-amplitude,amplitude);
  
 
  for (let x = 0; x < width ; x += gridSize){
    for (let y = 0; y < height - 170; y += gridSize){
for (i = 0; i < counter; i++){
  
  ellipse(x * i,y + i,x1,y1);
  
}
  
  
  
  
    }
  }
pop();



  fill(0,255,100);
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
    fill(0,255,100);
        text("Animated Poster Concept Series V4", width / 28,height / 1.02)

   angle += 0.01
}

let angle = 0.1;
let amplitude = 100;
let gridSize = 300;
let gridSize1 = 200;
let font;

function preload(){
  font = loadFont("Fonts/Magistral.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
   background("#0b0b0b");
}

function draw() {
  fill(255,100,100)
  //  for (let x = 100; x < width - 100; x+= gridSize1){
  //   for (let y = 50; y < height - 200; y+= gridSize1){
  //     ellipse(x,y,10,10);
  //   }
  // }
  push();
  translate(width/2,height/2.5);
    fill("#82a7f4");
  // stroke(255,100,100,150);
  strokeWeight(0.7);

 

  for (let x = 0; x < width; x += gridSize){
    for (let y = 0; y < height; y+= gridSize){




  let y1  = map(sin(angle),-1,2,-amplitude,amplitude);
    let x1  = map(cos(angle),-1,2,-amplitude,amplitude);
 
   
      rotate(angle / 1.5);
  // ellipse(x1  *= 2,y1 *= 2,30,30);
  fill(255,100,200)
  noStroke();
  stroke(0,255,100);
  strokeWeight(0.6);
    noStroke();
  fill(255,100,200);
       scale(0.8);
   ellipse(x -= angle ,y,x1 * 5,y1 *-2);
   noStroke();
   fill(0);
    scale(0.5);
    ellipse(x / 2,y / 2,x1 * 5,y1 * -2);
  

  //  ellipse(y1  *= -2,x1 *= -2,30,30);
    // ellipse(x,y,x1,y1);
  
console.log(angle);
if (angle > 3){
  angle *= -10;
}

    }
  }
pop();
  fill(255,100,200);
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
    fill(255,100,200);
        text("Design Study. Made with p5.js", width / 28,height / 1.02)

   angle += 0.01
}

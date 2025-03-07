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
  fill(30, 4, 158)
  //  for (let x = 100; x < width - 100; x+= gridSize1){
  //   for (let y = 50; y < height - 200; y+= gridSize1){
  //     ellipse(x,y,10,10);
  //   }
  // }
  push();
  translate(width/2,height/2.5);
  scale(2);

    fill(30, 4, 158);
 

 

  for (let x = 0; x < width; x += gridSize * 5){
    for (let y = 0; y < height; y+= gridSize * 5){




  let y1  = map(sin(angle),-1,2,-amplitude,amplitude);
    let x1  = map(cos(angle),-1,2,-amplitude,amplitude);
 
   
      // rotate(angle / 1.5);

  fill(30, 4, 158);
  
  stroke(118, 191, 241);
 
   ellipse(x -= angle ,y,x1 * 5,y1 *-2);
 



    }
  }
pop();



  fill(30, 4, 158);
  noStroke();
  rectMode(CENTER);
    rect(0,height - 90,width  *2, height / 5);
    fill(118, 191, 241);
    rect(0,height,width  *2, height / 6);
  fill(255);
  textFont(font);
  textSize(90)
  
    text("JUPITER DISCO",width / 30,height / 1.12)
    textSize(40);
    fill(30, 4, 158);
        text("Animated Poster Concept Series V6", width / 28,height / 1.02)

   angle += 0.01
}

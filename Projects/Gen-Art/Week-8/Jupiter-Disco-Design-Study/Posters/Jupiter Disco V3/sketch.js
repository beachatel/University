let angle = 0.001;
let amplitude = 40;
let gridSize = 100;
let font;
let counter = 10;

function preload(){
  font = loadFont("Fonts/Magistral.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  
ellipseMode(CENTER);
push();

translate(width/2,height/3 )
  let x1  = map(sin(angle),-1,2,-amplitude,amplitude);
   let y1  = map(cos(angle),-1,7,-amplitude,amplitude);

scale(0.4);

 background("#0b0b0b");
stroke("#44083c");
  fill("#9cd2c7");
  strokeWeight(10);
  

    x = width/2;
  y = height/2;
  s = 300;
  s2 = s;



  strokeWeight(20);
  for ( i = 0; i  < 14; i++) {
    if (i<17) {
   
      rotate(angle * 5);
      ellipse(x, y - (i*x1), s, s2);
      y-= 3;
      s2 -= 7;
    } else if (i<28) {

      rotate(angle * y1);
      ellipse(x, y - (i*x1), s, s2);
      s-=26;
      s2 -=25;
      y+=20;
    } else {

      ellipse(x, y - (i*x1), s, s2);
      s-=16;
      s2 -=10;
      y-=1;
    }
     
  }

  
  
    ellipse(x, y - (i*x1), s, s2);


  


pop();

push();
translate(width/2,height/3)
scale(0.2);
 for ( i = 0; i  < 14; i++) {
    if (i<17) {
   
      rotate(angle * y1 / 5);
      ellipse(x, y - (i*x1), s, s2);
      y-= 3;
      s2 -= 7;
    } else if (i<28) {

      rotate(angle);
      ellipse(x, y - (i*x1), s, s2);
      s-=26;
      s2 -=25;
      y+=20;
    } else {

      ellipse(x, y - (i*x1), s, s2);
      s-=16;
      s2 -=10;
      y-=1;
    }
     
  }

  
  
    ellipse(x, y - (i*x1), s, s2);


  


pop();

  
 
//   for (let x = 0; x < width ; x += gridSize / 2){
//     for (let y = 0; y < height - 170; y += gridSize * 1.5){
// for (i = 0; i < counter; i++){
//   rotate(angle / 1.5);
//   ellipse(x * i,y + i,x1 / 2,y1 / 2);
  

  
  
// }
//     }
  
//   }
  




  fill("#9cd2c7");
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
    fill("#9cd2c7");
        text("Animated Poster Concept Series V3", width / 28,height / 1.02)

   angle += 0.001

}

    

let sketch2 = function(p){

let angle = 0.1;
let amplitude = 100;
let gridSize = 300;
let gridSize1 = 200;
let font;

p.preload = function(){
  font = p.loadFont("Fonts/Magistral.ttf")
}
p.setup = function() {
  p.createCanvas(p.windowWidth / 2, p.windowHeight);
   p.background("#0b0b0b");
}

p.draw = function() {

  p.fill(255,100,100)
  //  for (let x = 100; x < width - 100; x+= gridSize1){
  //   for (let y = 50; y < height - 200; y+= gridSize1){
  //     ellipse(x,y,10,10);
  //   }
  // }
 p.push();
  p.translate(p.width/2,p.height/2.5);
  p.scale(1.8);
    p.fill("#82a7f4");
  // stroke(255,100,100,150);
  p.strokeWeight(0.7);

 

  for (let x = 0; x < p.width; x += p.gridSize){
    for (let y = 0; y < p.height; y+= p.gridSize){




  let y1  = p.map(p.sin(angle),-1,2,-amplitude,amplitude);
    let x1  = p.map(p.cos(angle),-1,2,-amplitude,amplitude);
 
   
      p.rotate(angle / 1.5);
  // ellipse(x1  *= 2,y1 *= 2,30,30);
  p.fill(255,100,200)
  p.noStroke();
  p.stroke(0,255,100);
 p.strokeWeight(0.6);
    p.noStroke();
  p.fill(255,100,200);
       p.scale(0.8);
   p.ellipse(x -= angle ,y,x1 * 5,y1 *-2);
  p. noStroke();
   p.fill(0);
   p. scale(0.5);
    p.ellipse(x / 2,y / 2,x1 * 5,y1 * -2);
  

  //  ellipse(y1  *= -2,x1 *= -2,30,30);
    // ellipse(x,y,x1,y1);
  

if (angle > 3){
  angle *= -10;
}

    }
  }
p.pop();
  p.fill(255,100,200);
  p.noStroke();
  p.rectMode(p.CENTER);
    p.rect(0,p.height - 90,p.width  *2, p.height / 5);
    p.fill(0);
    p.rect(0,p.height,p.width  *2, p.height / 6);
  p.fill(0);
  p.textFont(font);
  p.textSize(90)
  
    p.text("JUPITER DISCO",p.width / 30,p.height / 1.12)
    p.textSize(40);
    p.fill(255,100,200);
        p.text("Animated Poster Concept Series V2", p.width / 28,p.height / 1.02)

   angle += 0.01
}
}
new p5(sketch2,'sketch2container');

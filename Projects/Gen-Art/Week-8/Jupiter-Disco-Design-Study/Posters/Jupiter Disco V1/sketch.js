let sketch1 = function(p){


let angle = 0.1;
let amplitude = 200;
let gridSize = 100;
let font;

p.preload = function(){
  font = p.loadFont("Fonts/Magistral.ttf")
}
p.setup = function() {
  p.createCanvas(p.windowWidth / 2, p.windowHeight);
   p.background("#0b0b0b");
}

p.draw = function () {
    // p.scale(0.5);
  p.push();

  p.translate(p.width/2,p.height/3);

  for (let x = 0; x < p.width; x += gridSize){
    for (let y = 0; y < p.height; y+= gridSize){


  p.scale(0.9);
  p.fill(0,0,255);
  p.stroke(255,100,100,150);
  p.strokeWeight(2);

  let y  = p.map(p.sin(angle),-1,1,-amplitude,amplitude);
    let x  = p.map(p.cos(angle),-1,7,-amplitude,amplitude);


  p.ellipse(y,x,100,100);
  p.scale(0.7);
  p.ellipse(y *= -2,x *= -2,100,100);
  

    }
  }
p.pop();
  p.fill(255,100,100);
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
    p.fill(255,100,100);
        p.text("Animated Poster Concept Series V1", p.width / 28,p.height / 1.02)

   angle += 0.01
}
}

new p5(sketch1,'sketch1container');


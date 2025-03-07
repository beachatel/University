let sketch6 = function(p){



let angle = 0.1;
let amplitude = 100;
let gridSize = 300;
let gridSize1 = 200;
let font;

p.preload = function(){
  font = loadFont("Fonts/Magistral.ttf")
}
p.setup = function() {
  p.createCanvas(p.windowWidth / 2, p.windowHeight);
   p.background("#0b0b0b");
}

p.draw = function() {
  p.fill(30, 4, 158)
  //  for (let x = 100; x < width - 100; x+= gridSize1){
  //   for (let y = 50; y < height - 200; y+= gridSize1){
  //     ellipse(x,y,10,10);
  //   }
  // }
  p.push();
 p.translate(p.width/2,p.height/2.5);
  p.scale(2);


  
 




    
  
  p.pop();



  p.fill(30, 4, 158);
  p.noStroke();
  p.rectMode(p.CENTER);
  p.rect(0,p.height - 90, p.width  *2, p.height / 5);
  p.fill(118, 191, 241);
  p.rect(0,p.height, p.width  *2, p.height / 6);
  p.fill(255);
  p.textFont(font);
  p.textSize(90)
  
  p.text("JUPITER DISCO",p.width / 30,p.height / 1.12)
  p.textSize(40);
  p.fill(30, 4, 158);
  p.text("Animated Poster Concept Series V6", p.width / 28,p.height / 1.02)

   angle += 0.01

}
} 
new p5(sketch6,'sketch6container');
let sketch3 = function(p){


let angle = 0.001;
let amplitude = 40;
let gridSize = 100;
let font;
let counter = 10;

 p.preload = function(){
  font = p.loadFont("Fonts/Magistral.ttf")
}
p.setup = function() {
  let cnv = p.createCanvas(p.windowWidth / 2, p.windowHeight);
  let container = document.getElementById("container")
  
}

p.draw = function() {

  
p.ellipseMode(p.CENTER);
p.push();

p.translate(p.width/2,p.height/2.5 )
  let x1  = p.map(p.sin(angle),-1,2,-amplitude,amplitude);
   let y1  = p.map(p.cos(angle),-1,7,-amplitude,amplitude);

p.scale(0.4);

 p.background("#0b0b0b");
p.stroke("#44083c");
  p.fill("#9cd2c7");
  p.strokeWeight(10);
  

    x = p.width/2;
  y = p.height/2;
  s = 300;
  s2 = s;



  p.strokeWeight(20);
  for ( i = 0; i  < 14; i++) {
    if (i<17) {
   
      p.rotate(angle * 5);
      p.ellipse(x, y - (i*x1), s, s2);
      y-= 3;
      s2 -= 7;
    } else if (i<28) {

      p.rotate(angle * y1);
      p.ellipse(x, y - (i*x1), s, s2);
      s-=26;
      s2 -=25;
      y+=20;
    } else {

      p.ellipse(x, y - (i*x1), s, s2);
      s-=16;
      s2 -=10;
      y-=1;
    }
     
  }

  
  
    p.ellipse(x, y - (i*x1), s, s2);


  


p.pop();

p.push();
p.translate(p.width/2,p.height/2.5)
p.scale(0.2);
 for ( i = 0; i  < 14; i++) {
    if (i<17) {
   
     p. rotate(angle * y1 / 5);
     p. ellipse(x, y - (i*x1), s, s2);
      y-= 3;
      s2 -= 7;
    } else if (i<28) {

      p.rotate(angle);
      p.ellipse(x, y - (i*x1), s, s2);
      s-=26;
      s2 -=25;
      y+=20;
    } else {

      p.ellipse(x, y - (i*x1), s, s2);
      s-=16;
      s2 -=10;
      y-=1;
    }
     
  }

  
  
    p.ellipse(x, y - (i*x1), s, s2);


  


p.pop();

  
 
//   for (let x = 0; x < p.width ; x += gridSize / 2){
//     for (let y = 0; y < p.height - 170; y += gridSize * 1.5){
// for (i = 0; i < counter; i++){
//   rotate(angle / 1.5);
//   ellipse(x * i,y + i,x1 / 2,y1 / 2);
  

  
  
// }
//     }
  
//   }
  




  p.fill("#9cd2c7");
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
    p.fill("#9cd2c7");
        p.text("Animated Poster Concept Series V3", p.width / 28,p.height / 1.02)

   angle += 0.001

}
}
new p5(sketch3,'sketch3container');

    

let gridSize = 50;
let colorPicker = 50;
let colors;
let value = 0.25;
let interA;
let x1 = 10;
  let v1,v2,v3,v4;
  let from,to;
  let noiseFrom,noiseTo;
  let r1,r2,r3,r4; 

let translateSlider,gridSizeSlider,slider3;  

function setup() {
  createCanvas(windowWidth / 1.25 , windowHeight);

//  frameRate(1);
  translateSlider = createSlider(1,20,10,0.01);
    translateSlider.position(10, 10);
  translateSlider.size(80);

  gridSizeSlider = createSlider(10,100,50,1);
    gridSizeSlider.position(10, 40);
  gridSizeSlider.size(80);



}


function draw() {
  colors = [color('#e53723'), color('#3d85d8'), color('#e66e95'), color('#3c8253'), color('#e58136')];

      let s1 = translateSlider.value();
      let gridSize = gridSizeSlider.value();
 
  let baseNoise = frameCount * 0.002;
  r1 = map(noise(baseNoise), 0, 1, 0.5, 1.1);

  let nOffset = 0.1;

  // Declare interpolation variables here
  let interA, interB, interC, interD;

  // Set up noise-based from/to colors; the last iteration will set final values
  let nVal = baseNoise;
  let fromIndex = floor(noise(nVal) * colors.length);
  let toIndex = floor(noise(nVal + 10) * colors.length);
  let from = colors[fromIndex];
  let to = colors[toIndex];

  

    v1 = abs(sin(frameCount * 0.01));
    v2 = abs(sin(frameCount * 0.02));
    v3 = abs(sin(frameCount * 0.03));
    v4 = abs(sin(frameCount * 0.04));
    v5 = abs(sin(frameCount * 0.05));

    interA = lerpColor(from, to, v1); 
    interB = lerpColor(from, to, v2);
    interC = lerpColor(from, to, v4);
    interD = lerpColor(from, to, v5);

  noStroke();
  background("#140208");
  rectMode(CENTER);
  ellipseMode(CENTER);


  for (let x =  0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      push();
      translate(x / s1,y / s1);
      stroke(interC)
      strokeWeight(r1 * gridSize / 4)
      fill(interD);
      
      rect(x / sin(2), y / sin(2), gridSize * r1 / 1.3, gridSize * r1 / 1.3);
    noStroke();
      fill(interB);

      ellipse(x * sin (2), y * sin(2), gridSize, gridSize);
      fill(interC);
       ellipse(x * sin (2), y * sin(2), gridSize / 2.5, gridSize / 2.5);
     
      stroke(interD);
      strokeWeight(2);
      //  line(x,y * 2,x,y,x,y);
      //  line(x,y,x * 2,y,x,y);
      noStroke();
       fill(255);
       pop();
       push();

        // ellipse(x * 2,y * 2,gridSize * 20, gridSize * 2 ); 

      pop();
    }
  }
}


// function lerp(colors,value){

//  return [
//         lerp(colors[0][0] + (colors[1][0] - colors[0][0]) * value
//         ,
//         colors[0][1] + (colors[1][1] - colors[0][1]) * value)
//         // colors[0][2] + (colors[1][2] - colors[0][2]) * value
//     ];

// }

let img;
let gridSize = 10;
let xT,yT;
let slider, slider2,slider3;

function preload(){

  img = loadImage("img/pho.png");
  slider = createSlider(10,100);
  slider.position(900, 100);
  slider.size(80);

  slider2 = createSlider(10,100);
  slider2.position(900, 200);
  slider2.size(80);

  slider3 = createSlider(10,100);
  slider3.position(900, 300);
  slider3.size(80);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  div = createDiv("Slider One controls the width and height of the source image")
  div.style("text-align", "right")
}

  function draw() {
    background(0);
  


    let xT = slider.value();
    let yT = slider2.value();
    let gridSize = slider3.value();
    img.resize(800,850);
    

    //  for loop to copy
     for(x = 0; x < img.width; x += gridSize) {
       for (y = 0; y < img.height; y += gridSize) {
         copy(img,x,y,xT,yT,x,y,gridSize,gridSize);
  
       }
    }



  }

  
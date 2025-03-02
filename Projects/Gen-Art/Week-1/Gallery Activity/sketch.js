let bw1;
let gridSize = 300;
let xT = 0;
let yT = 1;
let xTIncrement = 0.1; // Increment values for xT
let yTIncrement = 100;  // Increment values for yT
let grub;
let fft, peakDetect, pulseSize = 0;
// let beatCounter = 1;
// let flashCounter = 100;

//change to drawing on diff canvases with PGraphics like stuart example ascii p5graphics buffer sound visualiser
// different combinations of variavbles that produce cool effects could be saved in states and added to 
// their own custom PGraphic  


//variables to be controlled by sound
//starting x and y
//x and y increment
//gridSize ++
// x and y ++ to create gap between sections

function preload(){
  bw1 = loadImage("img/fingersalt.JPG");

  soundFormats('mp3');
  grub = loadSound("src/grub.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


   grub.loop();
    fft = new p5.FFT(0.1, 1024);
    peakDetect = new p5.PeakDetect(20, 20000, 0.1, 10);
}

function draw() {
  background(0);

  // image(bw1,0,0,700,700);
  fft.analyze();
    peakDetect.update(fft);

    if (peakDetect.isDetected) {
        pulseSize = 1050;
    }

    xT = pulseSize;

  xT += 750;
  yT += 3; //change to low number like 1 for zoomed in finger textures 1 - 10 is best range

  

  
   for(x = 0; x < bw1.width++; x += gridSize) {
       for (y = yT-1000; y < bw1.height; y += gridSize-yTIncrement) {
         copy(bw1,x--,y,xT--,yT,x,y+yTIncrement,gridSize,gridSize + 50);
        // bw1.resize(windowWidth,windowHeight);

     
       }
    }
 
}

// Toggle Play/Pause on Mouse Press
function mousePressed() {
    if (grub.isPlaying()) grub.pause();
    else grub.play();
}

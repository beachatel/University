let pointSizeSlider,pointLengthSlider,discreteTimeSlider,clearButton,showAxisCheck;



function createSliders() {
  discreteTimeSlider = createSlider(0.01, 0.05, 0.01, 0.001);

  discreteTimeSlider.position(20, 100); // Increased by 50
  discreteTimeSlider.size(100);
  let discreteTimeLabel = createDiv(`Discrete Time: ${discreteTimeSlider.value()}`);
  discreteTimeLabel.position(130, 100); // Increased by 50
  discreteTimeLabel.style("color","black")
  discreteTimeSlider.input(() => discreteTimeLabel.html(`Discrete Time: ${discreteTimeSlider.value()}`));


  pointSizeSlider = createSlider(1,40,10,0.1);

  pointSizeSlider.position(20,150); // Increased by 50
  pointSizeSlider.size(100);
  let pointSizeLabel = createDiv(`Point Size: ${pointSizeSlider.value()}`);

  pointSizeLabel.position(130,150); // Increased by 50
  
  pointSizeLabel.style("color","black")
  pointSizeSlider.input(() => pointSizeLabel.html(`Point Size: ${pointSizeSlider.value()}`));


  pointLengthSlider = createSlider(100,50000,1000,10);

  pointLengthSlider.position(20,200); // Increased by 50
  pointLengthSlider.size(100);
  let pointLengthLabel = createDiv(`Point Length: ${pointLengthSlider.value()}`);
  pointLengthLabel.position(130,200); // Increased by 50
  pointLengthLabel.style("color","black")
  pointLengthSlider.input(() => pointLengthLabel.html(`Point Length: ${pointLengthSlider.value()}`));


  // Aizawa Parameter Sliders
  a = createSlider(0.5, 1.5, 0.95, 0.01);

  a.position(20, 250); // Increased by 50
  a.size(100);

  let aLabel = createDiv(`a: ${a.value()}`);
  aLabel.position(130, 250); // Increased by 50
  aLabel.style("color","black")
  a.input(() => aLabel.html(`a: ${a.value()}`));

  b = createSlider(0.5, 1.0, 0.7, 0.01);

  b.position(20, 300); // Increased by 50
  b.size(100);
  let bLabel = createDiv(`b: ${b.value()}`);

  bLabel.position(130, 300); // Increased by 50

   bLabel.style("color","black")
  b.input(() => bLabel.html(`b: ${b.value()}`));

  c = createSlider(0.5, 1.0, 0.6, 0.01);

  c.position(20, 350); // Increased by 50
  c.size(100);

  let cLabel = createDiv(`c: ${c.value()}`);
  cLabel.position(130, 350); // Increased by 50
  cLabel.style("color","black")
  c.input(() => cLabel.html(`c: ${c.value()}`));

  d = createSlider(2.0, 5.0, 3.5, 0.1);

  d.position(20, 400); // Increased by 50
  d.size(100);
  let dLabel = createDiv(`d: ${d.value()}`);
  dLabel.position(130, 400); // Increased by 50
  dLabel.style("color","black")
  d.input(() => dLabel.html(`d: ${d.value()}`));

  e = createSlider(0.1, 0.5, 0.25, 0.01);

  e.position(20, 450); // Increased by 50
  e.size(100);
  let eLabel = createDiv(`e: ${e.value()}`);
  eLabel.position(130, 450); // Increased by 50
  eLabel.style("color","black")
  e.input(() => eLabel.html(`e: ${e.value()}`));

  f = createSlider(0.05, 0.2, 0.1, 0.01);

  f.position(20, 500); // Increased by 50
  f.size(100);
  let fLabel = createDiv(`f: ${f.value()}`);
  fLabel.position(130, 500); // Increased by 50
  fLabel.style("color","black")
  f.input(() => fLabel.html(`f: ${f.value()}`));

  clearButton = createButton("Clear Canvas");
  clearButton.position(20, 550); // Increased by 50

  showAxisCheck = createCheckbox("Show/Hide Axis Guidelines");
  showAxisCheck.position(20, 600); // Increased by 50
  showAxisCheck.style("color","black");
  showAxisCheck.mousePressed(() => {
    showAxis = !showAxis; // Toggle the axis visibility
  });
}

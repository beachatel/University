let EstragonThin,
  EstragonLight,
  EstragonRegular,
  EstragonMedium,
  EstragonBold,
  EstragonHeavy;
let img1, img2;
let MachineSong;

let windowWidth = 500;
let windowHeight = 500;
let i = 0;
let letters = "EstragonEstragonEstragonEstragonEstragon";
let positions = []; // Store positions for each letter
let winWidth, winHeight; //change
let r0 = 0;

function preload() {
  EstragonThin = new FontFace("EstragonThin", "beachatel/University/blob/main/Projects/Backend-Dev/Week-1/Fonts/EstragonBold.ttf");
  EstragonLight = new FontFace(
    "EstragonLight",
    "url(/Fonts/EstragonLight.ttf)"
  );
  EstragonRegular = new FontFace(
    "EstragonRegular",
    "url(/Fonts/EstragonRegular.ttf)"
  );
  EstragonMedium = new FontFace(
    "EstragonMedium",
    "url(/Fonts/EstragonMedium.ttf)"
  );
  EstragonBold = new FontFace("EstragonBold", "url(/Fonts/EstragonBold.ttf)");
  EstragonHeavy = new FontFace(
    "EstragonHeavy",
    "url(/Fonts/EstragonHeavy.ttf)"
  );

  // Load fonts asynchronously
  EstragonThin.load().then((loadedFont) => document.fonts.add(loadedFont));
  EstragonLight.load().then((loadedFont) => document.fonts.add(loadedFont));
  EstragonRegular.load().then((loadedFont) => document.fonts.add(loadedFont));
  EstragonMedium.load().then((loadedFont) => document.fonts.add(loadedFont));
  EstragonBold.load().then((loadedFont) => document.fonts.add(loadedFont));
  EstragonHeavy.load().then((loadedFont) => document.fonts.add(loadedFont));
}

function setup() {
  noCanvas(); // Remove p5 canvas

  winWidth = window.innerWidth;
  winHeight = window.innerHeight;

  //letter divs
  for (let i = 0; i < letters.length; i++) {
    let letterDiv = createDiv(letters[i]); // Create a div for each letter
    letterDiv.id(`letter${i}`); // Assign a unique ID to each letter
    letterDiv.style("position", "absolute");
    letterDiv.style("font-size", "60px");
    // letterDiv.style("border", "dotted 1px rgb(255, 234, 0");
    letterDiv.style("font-family", "EstragonRegular");
    letterDiv.style("color", "black");
    letterDiv.style("top", `${25 + i * 40}px`); // Staggered vertical positions
    letterDiv.style("left", "r0"); // Start all letters on the left side
    positions.push({ x: 0, y: 50 + i * 30 }); // Store initial positions
  }

  divThin = createDiv("Thin"); //"Thin" text
  divLight = createDiv("Light"); //"Light" text
  h1 = createDiv("Estragon"); //"Estragon" text (regular weight)
  divMedium = createDiv("Medium"); //"Medium" text
  divBold = createDiv("Bold"); //"Bold" text
  divHeavy = createDiv("Heavy"); //"Heavy" text

  //in order top to bottom styles for each text

  divThin.style("font-family", "EstragonThin");

  divThin.style("text-align", "center");
  // divThin.style("border", "dotted 6px black")
  divThin.style("border-radius", "600px");
  divThin.style("color", "black");
  divThin.style("font-size", "50px");
  divThin.style("letter-spacing", "-3px");
  // divThin.style("line-height", "125px")

  divLight.style("font-family", "EstragonLight");

  divLight.style("text-align", "center");
  // divLight.style("border", "dotted 6px black")
  divLight.style("color", "black");
  divLight.style("font-size", "70px");
  divLight.style("letter-spacing", "-3px");
  // divLight.style("line-height", "125px")

  h1.style("font-family", "EstragonRegular");
  h1.style("text-align", "center");
  h1.style("border", "dotted 6px black");
  h1.style("border-radius", "100px");
  h1.style("color", "black");
  h1.style("font-size", "120px");
  h1.style("letter-spacing", "-3px");
  h1.style("line-height", "120px");
  h1.style("z-index", "10"); // Add z-index to bring it in front of other elements

  divMedium.style("font-family", "EstragonMedium");
  divMedium.style("text-align", "center");
  divMedium.style("color", "black");
  divMedium.style("font-size", "90px");
  divMedium.style("letter-spacing", "-3px");

  divBold.style("font-family", "EstragonBold");
  divBold.style("text-align", "center");
  divBold.style("color", "black");
  divBold.style("font-size", "110px");
  divBold.style("letter-spacing", "-3px");

  divHeavy.style("font-family", "EstragonHeavy");
  divHeavy.style("text-align", "center");
  divHeavy.style("color", "black");
  divHeavy.style("font-size", "130px");
  divHeavy.style("letter-spacing", "-3px");

  //floating boxes with info
  // Div 0 top left
  div = createDiv(
    "Design: Dinamo (Fabian Harb, Daniel Chessari) Spacing and Kerning: Igino Marini Production: Dinamo (Robert Janes)"
  );
  div.style("position", "absolute");
  div.style("width", "500px");
  div.style("height", "70px");
  div.style("background", "");
  div.style("border", "4px solid rgb(255, 234, 0");
  div.style("border-radius", "50px");
  div.style("font-family", "EstragonThin");
  div.style("line-height", "20px"); // Center text vertically
  div.style("text-align", "center"); // Center text horizontally
  div.style("font-size", "20px");
  div.style("color", "white");

  // Div 1 bottom left
  div1 = createDiv(
    "Supported Languages: Afrikaans, Albanian, Basque, Bemba, Bosnian, Breton, Catalan, Croatian, Czech, Danish, Dutch, English, Esperanto, Estonian, Faroese, Filipino, Finnish, French, Frisian, Friulian, Gaelic, Galician, German, Greenlandic, Hungarian, Icelandic, Indonesian, Irish, Italian, Kinyarwanda, Latin, Latvian, Lithuanian, Luxembourgish, Malay, Maltese, Montenegrin, Māori, Norwegian, Occitan, Polish, Portuguese, Romanian, Romansh, Inari Sami, Lule Sami, Northern Sami, Southern Sami, Serbian (Latin), Slovak, Slovenian, Spanish, Swahili, Swedish, Turkish, Welsh and more"
  );
  div1.style("position", "absolute");
  div1.style("width", "300px");
  div1.style("height", "350px");
  div1.style("background", "");
  div1.style("border", "4px solid rgb(255, 234, 0");
  div1.style("border-radius", "50px");
  div1.style("font-family", "EstragonThin");
  div1.style("line-height", "20px"); // Center text vertically
  div1.style("text-align", "center"); // Center text horizontally
  div1.style("color", "white");

  // Div 2 medium right
  div2 = createDiv(
    "We first spotted Estragon’s starting point while scrolling on the Type Foundries Archive Twitter account @typeTFA, noticing a spread later identified as part of Harrild &amp; Sons’ New &amp; Abridged Specimens of Wood-letter, Corners, Borders, &amp;c (circa 1890). Unfortunately, no more characters or information on the design could be found; one librarian at the St Bride Foundation in London suggested it might be an example of the ornamental headline wood types that typographers in the late 19th century would often offer to clients as an additional freebie. We redrew the design for contemporary eyes in 2017, adding three distinctive styles—Wildstyle, Arrow, and Bubble—that can be freely combined at the level of individual characters. Sam de Groot first used the typeface for the identity of Condo New York, describing it aptly as “Schwitters-meets-Wildstyle.” While Matthew Carter once said that “a typeface is a beautiful collection of letters, not a collection of beautiful letters,” Estragon begs to differ."
  );
  div2.style("position", "absolute");
  div2.style("width", "500px");
  div2.style("height", "320px");
  div2.style("background", "");
  div2.style("border", "4px solid rgb(255, 234, 0)");
  div2.style("border-radius", "50px");
  div2.style("font-family", "EstragonThin");
  div2.style("line-height", "20px"); // Center text vertically
  div2.style("text-align", "center"); // Center text horizontally
  div2.style("color", "white");
}

function draw() {
  // Animate each letter diagonally within screen boundaries
  for (let i = 0; i < letters.length; i++) {
    let letterDiv = select(`#letter${i}`);
    let pos = positions[i];

    // Update position
    pos.x += i + 3; // Each letter moves at a different speed
    pos.y += (i + 1) * 0.1; // Diagonal movement

    // Reset position if it goes out of bounds
    if (pos.x > winWidth || pos.y > winHeight) {
      pos.x = -50; // Reset to start outside the left
      pos.y = 50 + i * 30; // Reset to the original vertical position
    }

    // Apply updated position to the letter
    letterDiv.style("left", `${pos.x}px`);
    letterDiv.style("bottom", `${pos.y}px`);
  }

  // Div 0 Animation
  div.style("left", `${i + 100}px`);
  div.style("top", "25px");

  // Reset position when it goes out of bounds
  if (i > windowWidth / 2) {
    i = -0;
  }
  i += 0.01; // Update position increment

  // Div 1 Animation
  div1.style("left", `${i}px`);
  div1.style("top", "350px");

  // Reset position when it goes out of bounds
  if (i > windowWidth / 2) {
    i = -0;
  }
  i += 0.05; // Update position increment

  // Div 2 Animation
  div2.style("right", `${i}px`);
  div2.style("top", "300px");

  // Reset position when it goes out of bounds
  if (i > windowWidth / 2) {
    i = -0;
  }
  i += 0.06; // Update position increment
}

function keyPressed() {
  // Reset the animation when 'r' is pressed
  if (key === "r") {
    i = 0;
  }
}

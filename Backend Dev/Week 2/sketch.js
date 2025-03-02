let headerDiv,head,headerDivH2,divIContainer;
let NewOrderMedium;

let zonaImg = [];
let zonaImgPaths = ['img/1.jpg',"img/2.jpg"];

function preload(){
  NewOrderMedium = new FontFace('NewOrderMedium', 'url(/Fonts/NewOrderMedium.ttf)');
  NewOrderMedium.load().then((loadedFont) => document.fonts.add(loadedFont));

//  for (let i = 0; i < zonaImgPaths.length; i++) {
//   zonaImg[i] = loadImage(zonaImgPaths[i]);
//  }
}


function setup() {
  noCanvas();


  head = createElement("h1","Zona")
  head.style("font-family", "NewOrderMedium")
  head.style("font-size", "4vw")
  head.style("background-color", "none"); 
  head.style("padding", "5vh");
  head.style("margin-left","5vw");
  head.style("margin-right","5vw");
  head.style("font-family","NewOrderMedium");
  head.style("font-size","5vw");


 
  for (let i = 0; i < zonaImg.length; i++) {
    let imgElement = createImg(zonaImgPaths[i]); // Create an img element
  }

  


  let divContent = [
  "",
  "Zona promueve prácticas de cruces para transformar nuestros vínculos con el ecosistema desde el quehacer artístico. A través de las prácticas situadas y la alianza con otras disciplinas, ZONA busca fomentar impactos duraderos.", 
  "Dispositivo de investigación = que promueve prácticas interdisciplinares para transformar nuestros vínculos con el ecosistema",
  "",
  "",
  "",
  ""
  ];
  let divI = [];
  //create 5 divs and add them to the container
  for (let i = 0; i < 7; i++) {
    divI[i] = createDiv(`${divContent[i]}`);


    //dynamic styling
    divI[i].style("background-color", "none"); 
    divI[i].style("padding", "5vh");
    divI[i].style("margin-left","5vw");
    divI[i].style("margin-right","5vw");
    divI[i].style("font-family","NewOrderMedium");
    divI[i].style("font-size","2vw");

 
  }

}










function draw() {

}

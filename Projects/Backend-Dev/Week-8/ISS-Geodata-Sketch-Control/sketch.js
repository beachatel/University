
let xDiam,yDiam;
var x;
let y;
var lat,lon;
var data;
let gridSize = 10;
let colour;

      // setInterval(getSatData, 8000);
      document.onload = getSatList().then(setInterval(getSatData, 3000));

      let mapz = L.map("map").setView([53.480759, -2.242631], 4);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapz);

      let satIcon = L.icon({
        iconUrl: "ISS.png",
        iconSize: [50, 40],
        iconAnchor: [25, 0],
      });

      let marker = L.marker([53.480759, -2.242631], { icon: satIcon }).addTo(
        mapz
      );

      async function getSatList() {
        const url =
          "https://uphere-space1.p.rapidapi.com/satellite/list?country=US&page=1";
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "4b1b6aed70mshd0d1427ccf12e6fp1a681bjsnd03b11a20030",
            "x-rapidapi-host": "uphere-space1.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);
        const satList = await response.json();

        satList.forEach((satellite) => {
          const selectedSatellite = document.getElementById("satSelector");
          const option = document.createElement("option");
          option.value = satellite.number;
          option.textContent = satellite.name;
          selectedSatellite.appendChild(option);
          console.log(satellite.name);
        });
      }

      async function getSatData() {
        const selectedSatellite = document.getElementById("satSelector");
        const satID = selectedSatellite.value;
        const url = `https://uphere-space1.p.rapidapi.com/satellite/${satID}/location`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "4b1b6aed70mshd0d1427ccf12e6fp1a681bjsnd03b11a20030",
            "x-rapidapi-host": "uphere-space1.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.coordinates);

        marker.setLatLng([data.coordinates[1], data.coordinates[0]]);
        mapz.setView([data.coordinates[1], data.coordinates[0]]);

        document.getElementById("lat").textContent = data.coordinates[1];
        document.getElementById("lon").textContent = data.coordinates[0];
      }






function setup() {

  var myCanvas = createCanvas(windowWidth / 1.045, windowHeight / 2.3);
  
    myCanvas.parent(document.getElementById("MyCanvas"));
    // background(0);
 
}

function draw() {
  // getSatData();
  background(0);
    let markerPos = marker.getLatLng();
    // console.log(markerPos)
    // let data1 = getSatData();
    let {lat,lng} = markerPos
   
  
  // xDiam = map(lat, -180, 180, 0, width); // constrain cords to canvas
  // yDiam = map(lng, -90, 90, 0, height);
  xDiam = lat * sin(lat) ;
  yDiam = lng * sin(lng);
// x = 0;
// y = 0;
  // xDiam = 10;
  yDiam = 10;
 
  noStroke();

   fill(255,0,90)

//  fill(colour);
  for (let x = 0; x < width * 2; x+=gridSize){
    for (let y = 0; y < width; y+=gridSize){
      rotate(lat + lng / 20)
   
      ellipse(x,y,xDiam,yDiam);
    }
  }
 
 

//  document.getElementById("lat").textContent = data.coordinates[1];
//   document.getElementById("lon").textContent = data.coordinates[0];

  // console.log(data.coordinates[1]);
  //  console.log(lat,lon);
}

// function liveCoordinates() {

  

//   // lat = 0; //temp cords
//   // lon = 0;  

// }



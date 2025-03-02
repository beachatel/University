
// Function to perform a random search
function search() {
  const objID = ""; //string input from search bar
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objID}`;

  fetch(url)
    .then((response) => response.json())
    .then((searchval) => {
      console.log(searchval);

      
        // Update main content
        updateMainDisplay(searchval);
  
    }
}
  

// Function to update the main display with the image and information
function updateMainDisplay(searchval) {
  //image variable
  const img = document.getElementById("item-image");
  //image src = search value
  img.src = searchval.primaryImageSmall || ""; // Set the image
  const info = document.getElementById("item-info");
  info.innerHTML =
  `Title: ${data.title || "Unknown"} 
  <br>
  Medium: ${data.medium || "Unknown"}
  <br>
  Dimensions: ${data.dimensions || "Unknown"}`;
}



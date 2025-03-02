let savedObjects = []; // Store history of searched objects

// Function to perform a random search
function randomSearch() {
  const objID = Math.floor(Math.random() * 490000);
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objID}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // If missing or empty image, search again
      if (!data.primaryImageSmall) {
        randomSearch();
      } else {
        savedObjects.push(data); // Save the object for history

        // Update main content
        updateMainDisplay(data);

        // Populate the left side divs
        randLeftBox(data);
      }
    });
}

// Function to update the main display with the image and information
function updateMainDisplay(data) {
  const img = document.getElementById("item-image");
  img.src = data.primaryImageSmall || ""; // Set the image

  const info = document.getElementById("item-info");
  info.innerHTML = `Title: ${data.title || "Unknown"} <br> Medium: ${
    data.medium || "Unknown"
  } <br> Dimensions: ${data.dimensions || "Unknown"}`;
}

// Function to populate the left-side div with the object data
function randLeftBox(data) {
  if (!data) return;

  let divContent = [
    `Title: ${data.title || "Untitled"}`,
    `Medium: ${data.medium || "Unknown"}`,
    `Dimensions: ${data.dimensions || "Unknown"}`,
  ];

  let divBox = document.createElement("div");

  // Create an anchor tag
  let anchor = document.createElement("a");
  anchor.href = "#main-content"; // Scrolls back to the object display
  anchor.style.textDecoration = "none"; // Removes underline for styling

  // Set content inside the anchor
  anchor.innerHTML = divContent.join("<br>");

  // When clicked, update the display with this object's details
  anchor.onclick = function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    updateMainDisplay(data); // Update the main content with the clicked object
  };

  // Apply styling
  divBox.style.padding = "1vw";
  divBox.style.marginLeft = "1vw";
  divBox.style.marginTop = "0.5vw";
  divBox.style.marginRight = "1vw";
  divBox.style.fontSize = "1vw";
  divBox.style.border = "2px solid black";
  divBox.style.width = "45vw";

  divBox.appendChild(anchor);
  document.body.appendChild(divBox);
}

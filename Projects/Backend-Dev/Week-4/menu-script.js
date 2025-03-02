const menuDiv = document.getElementById("menu");
const fragment = document.createDocumentFragment();
const linkLabels = ["Search", "Random-Search", "About"];

linkLabels.forEach((label) => {
  const link = document.createElement("a");
  link.textContent = label;

  if (label === "Search") {
    link.href = `index.html`;
  } else {
    link.href = `${label}.html`;
  }

  fragment.appendChild(link);
});
menuDiv.appendChild(fragment);

function openNav() {
  document.getElementById("menu").style.width = "15vw";
  document.getElementById("left").style.paddingLeft = "150vw";
}

function closeNav() {
  document.getElementById("menu").style.width = "0vw";
  document.getElementById("left").style.paddingLeft = "0vw";
}

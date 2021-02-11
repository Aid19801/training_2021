console.log("Hello Aid!");

  
function selectVenue(id, town, price) {
  console.log(id, town, " and price is ", price)
}

function mouseHasEntered() {
  console.log("Mouse Has ENtered!")
  const image = document.getElementById("hover-fx-img-id");
  const fadeToWhite = document.getElementsByClassName("fade-to-white");
  for(var i = 0; i < fadeToWhite.length; i++) {
    fadeToWhite[i].style.color = "white";
  }
  image.style.opacity = 1;
}

function mouseHasLeft() {
  console.log("mouse has left!");
  const image = document.getElementById("hover-fx-img-id");
  image.style.opacity = 0.3;
  const fadeToWhite = document.getElementsByClassName("fade-to-white");
  for(var i = 0; i < fadeToWhite.length; i++) {
    fadeToWhite[i].style.color = "black";
  }
}
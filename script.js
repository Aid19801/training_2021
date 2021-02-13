console.log("Hello Aid!");

  
function selectVenue(id, town, price) {
  console.log(id, town, " and price is ", price)
}

function mouseHasEntered(ref) {
  console.log("Mouse Has Entered!");
  const venueImg = ref.children[0];
  const venueDetailsDiv = ref.children[1];
  venueDetailsDiv.style.opacity = 1;
  venueImg.style.opacity = 1;
}

function mouseHasLeft(ref) {
  console.log("mouse has left!");
  const venueImg = ref.children[0];
  const venueDetailsDiv = ref.children[1];
  venueDetailsDiv.style.opacity = 0.3;
  venueImg.style.opacity = 0.3;
}


// Set starting points and added points
var points = 0;
var newPoints;
function InsertPoints() {
  // set the points in the card
  localStorage.setItem("01", points);
  // set the points varabile with the key value
  points = localStorage.getItem("01");
  // get user input (points)
  newPoints = prompt("enter your points");
  // add the new points to the old points
  points = parseInt(points) + parseInt(newPoints);
  console.log(points);
  // set the card with the new points
  localStorage.setItem("01", points);
  console.log(localStorage.getItem("01"));
}

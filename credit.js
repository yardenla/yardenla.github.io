// Set starting points and added points
var points = 0;
var newPoints;
var cardNumbers = ["01", "02", "03"];

function GetCardNumber() {
  let cardNumber = prompt("הכניס.י מספר כרטיס");
  // if card number is in the list return card number
  if (cardNumbers.includes(cardNumber)) {
    console.log(cardNumber);
    return cardNumber;
  } else {
    // alert card is not valid
    alert("כרטיס לא נמצא");
    return;
  }
}

function InsertPoints() {
  let cardNumber = GetCardNumber();
  if (cardNumber) {
    // set the points in the card
    localStorage.setItem(cardNumber, points);
    // set the points varabile with the key value
    points = localStorage.getItem(cardNumber);
    // get user input (points)
    newPoints = prompt("הכנס.י מספר נקודות");
    // add the new points to the old points
    points = parseInt(points) + parseInt(newPoints);
    console.log(points);
    // set the card with the new points
    localStorage.setItem(cardNumber, points);
    // result msg
    let msg =
      "הטענת את הכרטיס ב-" + newPoints + " נקודות. יש לך " + points + " נקודות";
    // alert results
    alert(msg);
  }
}

function CheckPoints() {
  // get card number from user
  let cardNumber = GetCardNumber();
  // get results div
  let resultDiv = document.getElementById("checkPointsResult");

  // if card number is valid
  if (cardNumber) {
    // set the points varabile with the key value
    let pointsLeft = localStorage.getItem(cardNumber);
    // if not been set set to 0
    if (pointsLeft == null) {
      pointsLeft = 0;
    }
    // put the results in the div
    resultDiv.innerHTML =
      "כרטיס מספר " + cardNumber + "</br>" + pointsLeft + " נקודות";
    //console.log(pointsLeft);
  }
}

function CleanLocalStorage() {
  // clear local storage data
  window.localStorage.clear();
  // give success msg
  alert("נתונים נוקו בהצלחה");
}

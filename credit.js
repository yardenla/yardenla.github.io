function InsertPoints() {
  // set key
localStorage.cardOne = 0;

// get key
alert( localStorage.cardOne ); // 0

}

function creditPoints() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}
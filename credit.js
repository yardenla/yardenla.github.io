function InsertPoints() {
  if (localStorage['01']) {
    console.log('dsds')
    var points = parseInt(localStorage.getItem('01'));
    console.log(points);
    console.log(localStorage.getItem('01'));
   // points = points+1;
    localStorage.setItem('01',points);
    console.log(localStorage.getItem('01'));
} else {
  localStorage.setItem =('01', 0);
}
//
  }
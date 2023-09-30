const loginForm = document.getElementById("form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "adminY" && password === "bingo2023") {
    //alert("You have successfully logged in.");
    window.open("./bingo.html", "_self");
    //location.reload();
    
  } else if (username === "kinguk" && password === "genuis!89") {
    window.open("./escapebox.html", "_self");

  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

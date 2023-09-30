const solveBtn = document.getElementById("solve-button");
const puzzleForm = document.getElementById("puzzle-form");
const loginErrorMsg = document.getElementById("puzzle-error-msg");
const num1 = puzzleForm.num1;
const num2 = puzzleForm.num2;
const num3 = puzzleForm.num3;
const num4 = puzzleForm.num4;

function changeColor(element) {
  element.style.color = "red";
}

solveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(num1.value + num2.value + num3.value + num4.value);
  if (
    num1.value === "1" &&
    num2.value === "2" &&
    num3.value === "3" &&
    num4.value === "4"
  ) {
    alert("You have successfully logged in.");
  } else {
    loginErrorMsg.style.opacity = 1;
    num1.style.color = "red";
    num2.style.color = "red";
    num3.style.color = "red";
    num4.style.color = "red";
  }
});

function changeBack() {
  console.log("change");
  num1.style.color = "black";
  num2.style.color = "black";
  num3.style.color = "black";
  num4.style.color = "black";
}

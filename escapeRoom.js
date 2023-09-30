const solveBtn = document.getElementById("solve-button");
const puzzleForm = document.getElementById("puzzle-form");
const loginErrorMsg = document.getElementById("puzzle-error-msg");

solveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const num1 = puzzleForm.num1.value;
  const num2 = puzzleForm.num2.value;
  const num3 = puzzleForm.num3.value;
  const num4 = puzzleForm.num4.value;
  console.log(num1 + num2 + num3 + num4);
  if (num1 === "1" && num2 === "2" && num3 === "3" && num4 === "4") {
    alert("You have successfully logged in.");

    //location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

var formRef = document.querySelector("#form");
var btnRef = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  var score = 0;
  //   var index = 0;

  const data = new FormData(formRef);

  if (data["answer1"] === correctAnswers[0]) {
    score += 1;
  }
  if (data["answer2"] === correctAnswers[1]) {
    score += 1;
  }

  output.innerText = "Your score is " + score;
}

btnRef.addEventListener("click", calculateScore);

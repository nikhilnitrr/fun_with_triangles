var formRef = document.querySelector("#form");
var btnRef = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  var score = 0;

  const data = new FormData(formRef);
  var arr = Object.values(data);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == correctAnswers[i]) {
      score++;
    }
  }

  output.innerText = "Your score is " + score;
}

btnRef.addEventListener("click", calculateScore);

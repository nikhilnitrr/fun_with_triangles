var input1 = document.querySelector("#input-base");
var input2 = document.querySelector("#input-height");
var output = document.querySelector("#output");

function findArea() {
  if (!input1.value || !input2.value) {
    output.innerText = "Invalid input";
  } else if (Number(input1.value) < 0 || Number(input2.value) < 0) {
    output.innerText = "Side of 🔺 can't have negative length";
  } else if (Number(input1.value) == 0 || Number(input2.value) == 0) {
    output.innerText = "Side of 🔺 can't be 0";
  } else {
    var area = (Number(input1.value) * Number(input2.value)) / 2;
    area = area.toFixed(2);
    output.innerText = "Area of triangle is " + area + " sq. units";
  }
}

output.addEventListener("click", findArea);

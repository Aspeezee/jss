
let Principle = document.getElementById("P");
let Time = document.getElementById("T");
let Rate = document.getElementById("R");

let result = document.getElementById("result");

function simpleInterest() {
  // Operrtion
  result.innerText = Principle.value*Time.value*Rate.value / 100;
}

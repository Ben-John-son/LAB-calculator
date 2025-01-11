console.log("hello")
// let numButt = document.querySelectorAll(".num")
let put = document.getElementById("putput")
let equal = docment.getElementsByClassName("opEqaul")
let numNum = document.getElementById("tWo").innerHTML;
let outty = document.querySelectorAll(".num")
let newOut = outty.value
let buttt = document.getElementById("butt")
let currentInput = ""
let operator = ""
let firstOperand = ""


function addNum () {
   return numButt + numButt
}

function equals() {
return put.innerHTML = addNum();
}

function clearAll() {
  put.innerHTML = "";
}

function displayNum(input) {
put.value += input

}

const numberButtons = document.querySelectorAll(".num");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => displayNum(button.textContent));
});

let calculation = localStorage.getItem("calculation") || "";

const inputEl = document.getElementById("input__el");

const numb0 = document.getElementById("number__0");
const numb1 = document.getElementById("number__1");
const numb2 = document.getElementById("number__2");
const numb3 = document.getElementById("number__3");
const numb4 = document.getElementById("number__4");
const numb5 = document.getElementById("number__5");
const numb6 = document.getElementById("number__6");
const numb7 = document.getElementById("number__7");
const numb8 = document.getElementById("number__8");
const numb9 = document.getElementById("number__9");

const dotPoint = document.getElementById("dot__point");

const addBtn = document.getElementById("operator__plus");
const substractBtn = document.getElementById("operator__minus");
const divideBtn = document.getElementById("operator__divide");
const multiplyBtn = document.getElementById("operator__multiply");
const equalBtn = document.getElementById("operator__equal");

const clearBtn = document.getElementById("clear__btn");

// Buttons____________________________________________________________

dotPoint.addEventListener("click", () => {
  updateCalculation(".");
});

numb1.addEventListener("click", () => {
  updateCalculation("1");
});

numb2.addEventListener("click", () => {
  updateCalculation("2");
});

numb3.addEventListener("click", () => {
  updateCalculation("3");
});

numb4.addEventListener("click", () => {
  updateCalculation("4");
});

numb5.addEventListener("click", () => {
  updateCalculation("5");
});

numb6.addEventListener("click", () => {
  updateCalculation("6");
});

numb7.addEventListener("click", () => {
  updateCalculation("7");
});

numb8.addEventListener("click", () => {
  updateCalculation("8");
});

numb9.addEventListener("click", () => {
  updateCalculation("9");
});

numb0.addEventListener("click", () => {
  updateCalculation("0");
});

// Function to update calculation
function updateCalculation(value) {
  inputEl.value += value;
}

// Operators____________________________________________________________

addBtn.addEventListener("click", () => {
  inputEl.value += " + ";
});

substractBtn.addEventListener("click", () => {
  inputEl.value += " - ";
});

multiplyBtn.addEventListener("click", () => {
  inputEl.value += " * ";
});

divideBtn.addEventListener("click", () => {
  inputEl.value += " / ";
});

equalBtn.addEventListener("click", () => {
  calculationFunc();
});

clearBtn.addEventListener("click", () => {
  inputEl.value = " ";
});

inputEl.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    calculationFunc();
  }
});

function calculationFunc() {
  calculation = eval(inputEl.value);
  inputEl.value = calculation;
}

// Additional function______________________________________________

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

let calculation = " ";

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
dotPoint.addEventListener("click", function () {
  inputEl.value += ".";
});

numb1.addEventListener("click", function () {
  inputEl.value += "1";
});

numb2.addEventListener("click", function () {
  inputEl.value += "2";
});

numb3.addEventListener("click", function () {
  inputEl.value += "3";
});

numb4.addEventListener("click", function () {
  inputEl.value += "4";
});

numb5.addEventListener("click", function () {
  inputEl.value += "5";
});

numb6.addEventListener("click", function () {
  inputEl.value += "6";
});

numb7.addEventListener("click", function () {
  inputEl.value += "7";
});

numb8.addEventListener("click", function () {
  inputEl.value += "8";
});

numb9.addEventListener("click", function () {
  inputEl.value += "9";
});

numb0.addEventListener("click", function () {
  inputEl.value += "0";
});

// Operators____________________________________________________________

// function myFunction() {
//   let e = event || window.event; // get event object
//   let key = e.keyCode || e.which; // get key cross-browser

//   if (key < 48 || key > 57) {
//     //if it is not a number ascii code
//     //Prevent default action, which is inserting character
//     if (e.preventDefault) e.preventDefault(); //normal browsers
//     e.returnValue = false; //IE
//   }
// }

addBtn.addEventListener("click", function () {
  inputEl.value += " + ";
});

substractBtn.addEventListener("click", function () {
  inputEl.value += " - ";
});

multiplyBtn.addEventListener("click", function () {
  inputEl.value += " * ";
});

divideBtn.addEventListener("click", function () {
  inputEl.value += " / ";
});

equalBtn.addEventListener("click", function () {
  calculation = eval(inputEl.value);
  inputEl.value = calculation;
});

clearBtn.addEventListener("click", function () {
  inputEl.value = " ";
});

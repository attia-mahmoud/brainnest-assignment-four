let displayValue = "";
let value = "";
let operands = [null, null];
let operator = null;
let prevResult = null;

const characters = document.querySelectorAll(".char");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const errorMessage = document.querySelector(".error-message");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      break;
  }
}

function addChar(a) {
  if (a === "." && value.includes(".")) {
    return;
  }
  displayValue += a;
  document.querySelector(".display").innerHTML = displayValue;
}

function addPrevResult() {
  displayValue = prevResult + displayValue;
  document.querySelector(".display").innerHTML = displayValue;
}

function clear() {
  displayValue = "";
  operator = null;
  operands = [null, null];
  document.querySelector(".display").innerHTML = displayValue;
}

function deleteChar() {
  const lastChar = displayValue.charAt(displayValue.length - 1);
  if (isNaN(lastChar)) {
    operator = "";
  } else {
    value = value.slice(0, -1);
  }
  displayValue = displayValue.slice(0, -1);
  document.querySelector(".display").innerHTML = displayValue;
}

function error() {
  errorMessage.innerHTML = "You can't do that!";
  clear();
}

function calculate(operands, operator) {
  if ((operator == "/" && operands[1] == 0) || value === "") {
    error();
    return;
  }
  prevResult =
    Math.trunc(operate(operator, +operands[0], +operands[1]) * 100) / 100;
  clear();
  document.querySelector(".display").innerHTML = prevResult;
  value = "";
}

function setOperator(button) {
  if (value) setNumber();
  if (operands[1] != null) {
    calculate(operands, operator);
    operator = button.innerHTML;
    addChar(operator);
  }
  value = "";
  operator = button.innerHTML;
  if (operands[0] == null) {
    addPrevResult();
    operands[0] = prevResult;
  }
}

function setNumber() {
  operands[0] == null ? (operands[0] = +value) : (operands[1] = +value);
}

document.querySelector(".clear").addEventListener("click", function () {
  errorMessage.innerHTML = "";
  clear();
});

document.querySelector(".equals").addEventListener("click", function () {
  setNumber();
  calculate(operands, operator);
});

document.querySelector(".delete").addEventListener("click", function () {
  deleteChar();
});

characters.forEach((character) => {
  character.addEventListener("click", function () {
    errorMessage.innerHTML = "";
    addChar(character.innerHTML);
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (number.innerHTML === "." && value.includes(".")) {
      return;
    }
    value += number.innerHTML;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    setOperator(operator);
  });
});

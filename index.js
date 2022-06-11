let displayValue = "";
let operands = [null, null];
let operator = null;
let prevResult = null;

const characters = document.querySelectorAll(".char");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

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

function calculate(operands, operator) {
  if (prevResult != null && operands[1] == null) {
    prevResult = operate(
      operator,
      parseFloat(prevResult),
      parseFloat(operands[0])
    );
  } else {
    prevResult = operate(
      operator,
      parseFloat(operands[0]),
      parseFloat(operands[1])
    );
  }
  clear();
  document.querySelector(".display").innerHTML = Math.round(prevResult);
}

function setOperator(button) {
  operator = button.innerHTML;
  if (operands[0] == null) {
    addPrevResult();
  }
}

function setNumbers(button) {
  operands[0] == null
    ? (operands[0] = button.innerHTML)
    : (operands[1] = button.innerHTML);
}

document.querySelector(".clear").addEventListener("click", function () {
  clear();
});

document.querySelector(".equals").addEventListener("click", function () {
  calculate(operands, operator);
});

characters.forEach((character) => {
  character.addEventListener("click", function () {
    addChar(character.innerHTML);
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    setNumbers(number);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    setOperator(operator);
  });
});

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

let operation = "";

function addChar(a) {
  operation += a;
  document.querySelector(".display").innerHTML = operation;
}

function clear() {
  operation = "";
  document.querySelector(".display").innerHTML = operation;
}

function calculate(operation) {
  let nums = operation
    .split("+")
    .join(",")
    .split("-")
    .join(",")
    .split("*")
    .join(",")
    .split("/")
    .join(",")
    .split(",");

  if (operation.indexOf("+") !== -1) {
    operate("+", nums[0], nums[1]);
  } else if (operation.indexOf("-") !== -1) {
    operate("-", nums[0], nums[1]);
  } else if (operation.indexOf("*") !== -1) {
    operate("*", nums[0], nums[1]);
  } else if (operation.indexOf("/") !== -1) {
    operate("/", nums[0], nums[1]);
  }
}

const numbers = document.querySelectorAll(".char");

numbers.forEach.call(numbers, function (number) {
  number.addEventListener("click", function () {
    addChar(number.innerHTML);
  });
});

document.querySelector(".clear").addEventListener("click", function () {
  clear();
});

document.querySelector(".equals").addEventListener("click", function () {
  calculate(operation);
});

function calculate(input) {
  let nums = input
    .split("+")
    .join(",")
    .split("-")
    .join(",")
    .split("*")
    .join(",")
    .split("/")
    .join(",")
    .split(",");
  let operator = "";
  if (input.indexOf("+") !== -1) {
    operator = "+";
  } else if (input.indexOf("-") !== -1) {
    operator = "-";
  } else if (input.indexOf("*") !== -1) {
    operator = "*";
  } else if (input.indexOf("/") !== -1) {
    operator = "/";
  }
  operation = "";
  document.querySelector(".display").innerHTML = Math.round(
    operate(operator, parseInt(nums[0]), parseInt(nums[1])),
    2
  );
}

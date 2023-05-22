const numberKey = document.querySelectorAll(".numberkey");
const operatorKey = document.querySelectorAll(".operatorkey");
const calculation = document.getElementById("calc");
const Result = document.getElementById("result");
const clearResultkey = document.getElementById("clearAll");
const backSpacekey = document.getElementById("backspace");
const equalkey = document.getElementById("equal");

let calcResult = " ";
let calcArray = [];

const getNumber = (number) => {
  const lastChar = calcResult[calcResult.length - 1];
  if (lastChar === "." && number === ".") {
    return true;
  }
  calcResult += number;
  calcArray.push(number);
  if (calc.innerHTML === "0") {
    calc.innerHTML = " ";
  }
  calc.innerHTML += calcArray[calcArray.length - 1];
  SetResult();
  console.log(calcArray);
};

const getOperator = (opr) => {
  const lastChar = calcResult[calcResult.length - 1];
  if (
    lastChar !== "%" &&
    lastChar !== "/" &&
    lastChar !== "*" &&
    lastChar !== "+" &&
    lastChar !== "-"
  ) {
    calcResult += opr;
    calcArray.push(`<span style=" color:#ff3c39;margin:0 6px">${opr}</span>`);
    calc.innerHTML += calcArray[calcArray.length - 1];
    console.log(calcResult);
  }
};

const SetResult = () => {
  Result.textContent = eval(calcResult);
  console.log(Result);
};

numberKey.forEach((num) => {
  num.addEventListener("click", (event) => {
    const keyvalue = event.target.innerHTML;
    getNumber(keyvalue);
  });
});

operatorKey.forEach((op) => {
  op.addEventListener("click", (event) => {
    const keyOpr = event.target.innerHTML;
    getOperator(keyOpr);
  });
});

const clearAll = () => {
  calcResult = "";
  calcArray = [];
  calc.innerHTML = "0";
  Result.textContent = "0";
};

const backSpace = () => {
  calcArray.splice(calcArray.length - 1, 1);
  calcResult = calcResult.substring(0, calcResult.length - 1);
  calc.innerHTML = calcArray.join("");
  if (calcResult === "") {
    clearAll();
  }
};

const equal = () => {
  calc.textContent += eval(calcResult);
};

clearResultkey.addEventListener("click", clearAll);
backSpacekey.addEventListener("click", backSpace);
equalkey.addEventListener("click", equal);

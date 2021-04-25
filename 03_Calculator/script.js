const OPERATORS = {
  Plus: "+",
  Minus: "-",
  Multiply: "*",
  Divide: "/",
};

var currentNum = "0";
var currentOpr = null;
var newNum = "0";

var result = document.getElementById("result");

for (var i = 0; i < 10; i++) {
  (function (m) {
    var element = document.getElementById("num" + m);
    element.onclick = () => {
      if (currentOpr === null) {
        currentNum += m;
        updateResult(parseInt(currentNum));
      } else {
        newNum += m;
        updateResult(parseInt(newNum));
      }
    };
  })(i);
}

for (var key in OPERATORS) {
  (function (m) {
    var element = document.getElementById("opr" + m);
    element.onclick = () => {
      currentOpr = OPERATORS[m];
    };
  })(key);
}

function updateResult(num) {
  result.innerHTML = num;
}

var btnEquals = document.getElementById("oprEquals");
btnEquals.onclick = () => {
  var resultNum;
  var a = parseInt(currentNum);
  var b = parseInt(newNum);
  if (currentOpr === "+") {
    resultNum = a + b;
  } else if (currentOpr === "-") {
    resultNum = a - b;
  } else if (currentOpr === "*") {
    resultNum = a * b;
  } else {
    resultNum = a / b;
  }
  updateResult(resultNum);
};

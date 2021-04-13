function add(a, b) {
  return a + b;
}
var num1 = 1;
var num2 = 2;
var result = add(num1, num2);
console.log(result);

// add : 함수의 이름
// (a, b) : 매개변수, parameter
// retrun : 함수에서 반환하는 것

var heecheol = {
  name: "heecheol",
  gender: "man",
};

var yujin = {
  name: "yujin",
  gender: "woman",
};

// function isWomen(person) {
//   // woman : true
//   // man : false

//   if (person.gender == "woman") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isWomen(heecheol));
// console.log(isWomen(yujin));

var num = 1;

function isWomen(person) {
  // woman : true
  // man : false

  if (person.gender == "woman") {
    console.log(person.name + " is Woman!");
  } else {
    console.log(person.name + " is Man!");
  }

  return "FINISH";
}

console.log(isWomen(heecheol));

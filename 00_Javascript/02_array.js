// array 배열
var array = [1, 2, 3];
// array = [] => empty array
// array = [1, 2, 3]
console.log(typeof array);

console.log(array[2]);

var empty = [];
console.log(empty);
empty.push(3);
console.log(empty);

// var heecheol_age = 28;
// var heecheol_gender = male;
// var heecheol_address = seoul;

var heecheol = {
  age: 28,
  gender: "male",
  address: "seoul",
};

var yujin = {
  age: 29,
  gender: "female",
  address: "seoul",
};

var hyunwoo = {
  age: 20,
  gender: "male",
  address: "busan",
};

var people = [heecheol, yujin, hyunwoo];
console.log(heecheol);

// console.log(heecheol_age);
// console.log(heecheol.age);

var multi2 = [2, 4, 6, 8, 10, 12, 14, 16, 18];
var multi3 = [3, 6, 9, 12, 15, 18, 21, 24, 27];
var multi4 = [4, 8, 12, 16, 20, 24, 28, 32, 36];
var multi5 = [5, 10, 15, 20, 25, 30, 35, 40, 45];

var googoo = [multi2, multi3, multi4, multi5];

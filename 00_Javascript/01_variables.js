// 변수 -> variable
var num1 = 10;
let num2 = 11;

// 상수 -> constant
const NUM = 0;

// 변수를 선언한다.
// 변수를 선언해야 사용 가능.

// 변수 -> Type : element 단위의 값 만
// Javascript -> Number(숫자) / String(문자열)

var number = 10; // 정수, 소수, 실수 모두 가능
var string = "a"; // "a" -> 문자를 작은/큰 따옴표로 감싸준다.

// Type 확인
var typeOfNumber = typeof number;
console.log(typeOfNumber);

var typeOfString = typeof string;
console.log(typeOfString);

// Type간 연산
var n1 = 1;
var n2 = 2;
var n3 = n1 + n2;
console.log(n3);

var s1 = "1";
var s2 = "2";
var s3 = s1 + s2;
console.log(s3);

const NUM_OF_BUTTONS = 7;
const COLORS_ENG = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
const COLORS_KOR = ["빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색"];

var colorButtons = document.getElementsByClassName("colors");
var result = document.getElementById("result");

for (var i = 0; i < NUM_OF_BUTTONS; i++) {
  colorButtons[i].innerHTML = COLORS_KOR[i];
  colorButtons[i].style.backgroundColor = COLORS_ENG[i];
}

function click(c) {
  result.style.backgroundColor = c;
}

function anotherColor() {
  var rgbCode = prompt("6자리 RGB 코드를 입력하세요. ex)#000000");

  if (rgbCodeCheck(rgbCode)) {
    result.style.backgroundColor = `#${rgbCode}`;
  } else {
    alert("잘못된 코드를 입력하셨습니다. 0~F로 이루어진 6자리 코드를 입력하세요.");
    anotherColor();
  }
}

function rgbCodeCheck(rgbCode) {
  const possibleChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
  if (rgbCode.length != 6) return false;
  else {
    for (var c of rgbCode) {
      if (!possibleChar.includes(c)) return false;
    }
    return true;
  }
}

colorButtons[0].onclick = () => click(COLORS_ENG[0]);
colorButtons[1].onclick = () => click(COLORS_ENG[1]);
colorButtons[2].onclick = () => click(COLORS_ENG[2]);
colorButtons[3].onclick = () => click(COLORS_ENG[3]);
colorButtons[4].onclick = () => click(COLORS_ENG[4]);
colorButtons[5].onclick = () => click(COLORS_ENG[5]);
colorButtons[6].onclick = () => click(COLORS_ENG[6]);
colorButtons[7].onclick = anotherColor;

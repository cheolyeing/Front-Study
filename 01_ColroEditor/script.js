const NUM_OF_BUTTONS = 7
const COLORS_ENG = ["red", "orange", "yellow", "green", "blue", "navy", "purple"]
const COLORS_KOR = ["빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색"]

var colorButtons = document.getElementsByClassName('colors')
var result = document.getElementById('result')

for(var i=0; i<NUM_OF_BUTTONS; i++) {
    colorButtons[i].innerHTML = COLORS_KOR[i]
    colorButtons[i].style.backgroundColor = COLORS_ENG[i]
}

function click(c) {
    result.style.backgroundColor = c;
}

colorButtons[0].onclick = () => {click(COLORS_ENG[0])}
colorButtons[1].onclick = () => {click(COLORS_ENG[1])}
colorButtons[2].onclick = () => {click(COLORS_ENG[2])}
colorButtons[3].onclick = () => {click(COLORS_ENG[3])}
colorButtons[4].onclick = () => {click(COLORS_ENG[4])}
colorButtons[5].onclick = () => {click(COLORS_ENG[5])}
colorButtons[6].onclick = () => {click(COLORS_ENG[6])}
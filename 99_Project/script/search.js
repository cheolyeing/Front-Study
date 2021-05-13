const SEARCH_AT = {
  naver: "https://search.naver.com/search.naver?&query=",
  google: "https://www.google.com/search?q=",
};

var input = document.getElementsByClassName("search-query")[0];
var button = document.getElementsByClassName("search-button")[0];
var select = document.getElementsByClassName("search-option")[0];

const onClick = () => {
  const query = input.value;
  const option = select.value;

  openInCurrentTab(SEARCH_AT[option] + query);
};

const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};

const openInCurrentTab = (url) => {
  location.href = url;
};

button.onclick = onClick;

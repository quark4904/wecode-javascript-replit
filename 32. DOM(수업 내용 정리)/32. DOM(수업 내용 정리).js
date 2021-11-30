function updateTitle() {
  let title = document.getElementsByClassName("h1-title")[0];

  title.innerHTML = "바뀐 제목!!!";
}

// 주석을 풀고 실행해보세요.
updateTitle();

function addClass(name) {
  let title = document.getElementsByTagName("h1")[0];

  title.className = name;
}
// 주석을 풀고 실행해보세요.
addClass("title");

function addElement() {
  let listWrap = document.createElement("ul");
  let list = document.createElement("li");
  let listContent = document.createElement("span");

  listContent.innerHTML = "목록이다";
  list.appendChild(listContent);
  listWrap.appendChild(list);

  document.body.appendChild(listWrap);
}
// 주석을 풀고 실행해보세요.
addElement();

function addPara() {
  let para = document.createElement("p");
  let paraTag = document.getElementsByTagName("h1")[0];

  para.innerHTML = "DOM";
  para.className = "dom";
  paraTag.appendChild(para);
}

addPara();

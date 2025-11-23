const userBackGround = document.getElementById("Background");
userBackGround.addEventListener("change", () =>
  changeBackGround(userBackGround.value)
);

function changeBackGround(Background) {
  document.getElementById("background").style.backgroundColor = Background;
}



const userHeading = document.getElementById("Heading");
userHeading.addEventListener("change", () => changeHeading(userHeading.value));

function changeHeading(Heading) {
  document.getElementById("heading").style.color = Heading;
}



const userPara = document.getElementById("Paragraph");
userPara.addEventListener("change", () => changePara(userPara.value));

function changePara(Paragraph) {
  document.getElementById("paragraph").style.color = Paragraph;
}

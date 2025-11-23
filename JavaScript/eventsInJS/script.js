function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

function Red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

function Blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}

function Green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}

const userClr = document.getElementById("clr");
userClr.addEventListener("change", () => changeBulbColor(userClr.value));

function changeBulbColor(clr) {
  document.getElementById("bulb").style.backgroundColor = clr;
}

// toggler->same button 0on/off

function SB_Control() {
  const btn = document.getElementById("sb-btn");
  if (btn.innerText === "On") {
    document.getElementById("sb-btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("on");
  } else {
    document.getElementById("sb-btn").innerText = "On";
    document.getElementById("smartBulb").classList.remove("on");
  }
}

function SB_Control2() {
  document.getElementById("smartestBulb").classList.toggle("on");
}

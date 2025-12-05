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


document.getElementById("c1").addEventListener("mouseenter",()=>{
  fillColour("violet")
})

document.getElementById("c1").addEventListener("mouseleave",()=>{
  fillColour("white")
})


document.getElementById("c2").addEventListener("mouseenter",()=>{
  fillColour("indigo")
})

document.getElementById("c2").addEventListener("mouseleave",()=>{
  fillColour("white")
})

document.getElementById("c3").addEventListener("mouseenter",()=>{
  fillColour("blue")
})

document.getElementById("c3").addEventListener("mouseleave",()=>{
  fillColour("white")
})

document.getElementById("c4").addEventListener("mouseenter",()=>{
  fillColour("green")
})

document.getElementById("c4").addEventListener("mouseleave",()=>{
  fillColour("white")
})

document.getElementById("c5").addEventListener("mouseenter",()=>{
  fillColour("yellow")
})

document.getElementById("c5").addEventListener("mouseleave",()=>{
  fillColour("white")
})

document.getElementById("c6").addEventListener("mouseenter",()=>{
  fillColour("orange")
})

document.getElementById("c6").addEventListener("mouseleave",()=>{
  fillColour("white")
})

document.getElementById("c7").addEventListener("mouseenter",()=>{
  fillColour("red")
})

document.getElementById("c7").addEventListener("mouseleave",()=>{
  fillColour("white")
})

function fillColour(color)
{
  document.getElementById("rainbowBulb").style.backgroundColor=color;
}

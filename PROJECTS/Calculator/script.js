function clickA(char) {
  if (char === "=") {
    try {
        document.getElementById("screen").value = eval(
      document.getElementById("screen").value
    );
    } catch (error) {
        alert("Invalid Expression");
        document.getElementById("screen").value = "";
    }
  } else if (char === "C") {
    document.getElementById("screen").value = "";
  } else {

    // let exp= document.getElementById("screen").value;
    // exp=exp+char;

    document.getElementById("screen").value =
      document.getElementById("screen").value + char;
  }
}


document.addEventListener("keydown",(abc)=>{
  console.log("Pressed key", abc.key);

  if(abc.key==="Enter"){
    clickA("=");
  }
  else if(
    abc.key==="1"||
    abc.key==="2"||
    abc.key==="3"||
    abc.key==="4"||
    abc.key==="5"||
    abc.key==="6"||
    abc.key==="7"||
    abc.key==="8"||
    abc.key==="9"||
    abc.key==="0"||
    abc.key==="+"||
    abc.key==="-"||
    abc.key==="*"||
    abc.key==="/"

  )

  {
    clickA(abc.key);
  }
  else if(abc.key ==="Backspace")
  {
    clickA("C")
  }
})
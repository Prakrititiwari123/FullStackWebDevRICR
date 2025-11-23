function clickA(char) {
  if (char === "=") {
    try {
        document.getElementById("screen").value = eval(
      document.getElementById("screen").value
    );
    } catch (error) {
        alert("Invalid error");
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

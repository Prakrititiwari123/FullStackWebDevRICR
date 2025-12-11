function submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("number").value.trim();
  const db = document.getElementById("dob").value.trim();



  document.querySelectorAll(".Error").forEach((element)=>{
    element.innerHTML="";
  })

  //Validation start
  if (!/^[A-Za-z ]+$/.test(nm)) {
    // console.log("wrong name");
    document.getElementById("NameError").innerText="Only alphabet d spaces are allowed";
    return;
  }

  if (!/^[\w\.]+@(gmail|outlook|ricr)\.(com|in|co.in)$/.test(em)) {
    // console.log("wrong email");
    document.getElementById("EmailError").innerText="Use proper email format";
    return;
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    // console.log("wrong number");/
    document.getElementById("NameError").innerText="Only alphabet d spaces are allowed";
    return;
  }

      const currentDate=new Date();
     console.log(currentDate);


//   //    use calculator age and dont allow less than 18 years age
//   const currYear = new Date().getFullYear;
//   const birthYear = Number(db.split("-")[0]);
//   if (currYear - birthYear < 17) {
    // alert("not eligible by age");

//     return;
//   }

  

  const data = {
    fullName: nm,
    email: em,
    Phone: ph,
    DOB: db,
  };
  console.log(data);
}

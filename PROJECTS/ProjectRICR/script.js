function submit() {
  console.log("Submit Button Clicked");

  const nm = document.getElementById("personName").value;
  console.log("Name: " + nm);

  const no = document.getElementById("personNumber").value;
  console.log("Number: " + no);

  const em = document.getElementById("personMail").value;
  console.log("Email: " + em);

  const qf = document.getElementById("personQualify").value;
  console.log("Qualification: " + qf);

  const scn = document.getElementById("clgId").value;
  console.log("School/College Name: " + scn);

  const year = document.getElementById("yyear").value;
  console.log("Year: " + year);

  const brnch = document.getElementById("personBranch").value;
  console.log("Branch: " + brnch);

  const soi = document.getElementById("sourceInfo").value;
  console.log("Source of Information: " + soi);

  const enm = document.getElementById("NameOfExecutive").value;
  console.log("Name of Executive: " + enm);

  const course0=document.getElementById("fswd").value;
  console.log("Course: "+course0)

  // const course1=document.getElementById("DSwithPython").value;
  // console.log("Course: "+course1)

  // const course2=document.getElementById("DAwithPyhton").value;
  // console.log("Course: "+course2)

  // const course3=document.getElementById("businessA").value;
  // console.log("Course: "+course3)

  // const course4=document.getElementById("javaProg").value;
  // console.log("Course: "+course4)

  // const course5=document.getElementById("pythonProg").value;
  // console.log("Course: "+course5)

  // const course6=document.getElementById("c/c++Prog").value;
  // console.log("Course: "+course6)
  
  // const course7=document.getElementById("other").value;
  // console.log("Course: "+course7)
  


  alert("Submission Done");


  document.getElementById("personName").value="";
  document.getElementById("personNumber").value="";
  document.getElementById("personMail").value="";
  document.getElementById("personQualify").value="";
  document.getElementById("clgId").value="";
  document.getElementById("yyear").value="";
  document.getElementById("personBranch").value="";
  document.getElementById("sourceInfo").value="";
  document.getElementById("fswd").value="";
  document.getElementById("NameOfExecutive").value="";
}

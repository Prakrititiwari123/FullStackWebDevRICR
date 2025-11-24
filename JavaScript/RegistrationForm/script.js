function submit() {
  // const batch=document.querySelectorAll("input[name='batch']:checked");
  // console.log(batch);

  // let selectedBatchTiming=[];
  // batch.forEach((element)=>{
  //     selectedBatchTiming.push(element.value)
  // })
  // console.log(selectedBatchTiming);


  console.log("Login Button Clicked");
  const nm = document.getElementById("fullName").value;
  console.log("Full Name: "+nm);
  const selectedBatch=document.querySelector("input[name='gender']:checked").value;
  console.log(selectedBatch);
  const em = document.getElementById("email").value;
  console.log("Email: "+em);
  const no = document.getElementById("number").value;
  console.log("Number: "+no);
  const dob = document.getElementById("dob").value;
  console.log("Date of Birth: "+dob);
   const quali = document.getElementById("qualification").value;
  console.log("Qualification: "+quali);
  const score = document.getElementById("score").value;
  console.log("Percentage/Grade: "+score);
  const course = document.getElementById("course").value;
  console.log("Available Course: "+course);
  let selectedBatchTiming = [];
  document 
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectedBatchTiming.push(element.value);
    });
  console.log(selectedBatchTiming);
  const address = document.getElementById("address").value;
  console.log("Residental Address: "+address);
  const city = document.getElementById("city").value;
  console.log("City: "+city);
  const pinCode = document.getElementById("pinCode").value;
  console.log("Pin Code: "+pinCode);
  const guardianName = document.getElementById("guardianName").value;
  console.log("Guardian Name: "+guardianName);
  const guardianNumber = document.getElementById("guardianNumber").value;
  console.log("Guardian Number: "+guardianNumber);
  const coachingInfo = document.getElementById("coachingInfo").value;
  console.log("How did you hear about us?:: "+coachingInfo);
  const optionalRequirement = document.getElementById("optionalRequirement").value;
  console.log("Optional Requirement: "+optionalRequirement);




//   let selectedBatchTiming = [];
//   document
//     .querySelectorAll("input[name='batch']:checked")
//     .forEach((element) => {
//       selectedBatchTiming.push(element.value);
//     });
//   console.log(selectedBatchTiming);

//   const selectedBatch=document.querySelector("input[name='gender']:checked").value;
//   console.log(selectedBatch);
}
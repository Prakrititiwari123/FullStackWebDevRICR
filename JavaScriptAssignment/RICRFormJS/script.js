function submitForm(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const dob = document.getElementById("dob").value;

  const qualification = document.getElementById("qualification").value;
  const score = document.getElementById("score").value.trim();

  const course = document.getElementById("course").value;

  const batches = [];
  document.querySelectorAll('input[name="batch"]:checked').forEach((item) => {
    batches.push(item.value);
  });

  const timing = document.querySelector('input[name="timing"]:checked')
    ? document.querySelector('input[name="timing"]:checked').value
    : "";

  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();

  const GFname = document.getElementById("GFname").value.trim();
  const GCnumber = document.getElementById("GCnumber").value.trim();

  if (
    !fullName ||
    !email ||
    !mobile ||
    !dob ||
    !qualification ||
    !score ||
    !course ||
    batches.length === 0 ||
    !timing ||
    !address ||
    !city ||
    !pin ||
    !GFname ||
    !GCnumber
  ) {
    alert("❌ Please fill all required fields!");
    return;
  }

  const formData = {
    fullName,
    email,
    mobile,
    dob,
    qualification,
    score,
    course,
    batches,
    timing,
    address,
    city,
    pin,
    guardianName: GFname,
    guardianContact: GCnumber,
  };

  console.log("Form Submitted Successfully!");
  console.log(formData);

  alert("✅ Registration Form Submitted Successfully!");

  document.querySelector("form").submit(); // Form Reset
}

document.querySelector("form").addEventListener("submit", submitForm);

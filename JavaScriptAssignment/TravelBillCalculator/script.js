function calBill() {
  const kms = document.getElementById("km").value;

  const final = document.getElementById("gnfinl");
  const toTal = document.getElementById("total");
  const surCh = document.getElementById("sur");
  const finL = document.getElementById("fnnll");

  if (kms < 0) {
    alert("Please enter positive integer");
  }
  let bill1 = 0;
  let bill10 = 0;
  let bill100 = 0;
  let bill = 0;
  if (kms <= 10) {
    bill = kms * 11;
    bill1 = bill;
  } else if (10 < kms && kms <= 100) {
    bill = 10 * 11 + (kms - 10) * 10;
    bill10 = (kms - 10) * 10;
    bill1 = 10 * 11;
  } else if (100 < kms) {
    bill = 10 * 11 + 90 * 10 + (kms - 100) * 9;
    bill100 = (kms - 100) * 9;
    bill1 = 10 * 11;
    bill10 = 90 * 10;
  }

  toTal.innerText = ` First 10 km = ${bill1} ₹`;
  surCh.innerText = `10-100 km = ${bill10} ₹`;
  final.innerText = `After 100 km = ${bill100} ₹`;

  finL.innerText = `Total Bill =  ${bill} ₹ `;
}
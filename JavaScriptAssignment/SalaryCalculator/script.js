function grosssal() {
  const basic = document.getElementById("basic").value;
  const basics = document.getElementById("basicSalary");
  const hra = document.getElementById("HRA");
  const da = document.getElementById("DA");
  const grossSl = document.getElementById("grossSalary");

  let sv = basic;
  basics.value = sv;

  if (basic < 0) {
    alert("Please enter positive integer");
  }

  const b = Number(basic);
  let hrA = b * 0.2;
  let dA = b * 0.1;

  let grossSL = b + hrA + dA;

  hra.value = hrA.toFixed(2);
  da.value = dA.toFixed(2);

  grossSl.value = grossSL.toFixed(2);

  console.log(sv);
}

function resett() {
  const basic = document.getElementById("basic");
  const basics = document.getElementById("basicSalary");
  const hra = document.getElementById("HRA");
  const da = document.getElementById("DA");
  const grossSl = document.getElementById("grossSalary");

  basic.value = "";
  basics.value = "";
  hra.value = "";
  da.value = "";
  grossSl.value = "";
}
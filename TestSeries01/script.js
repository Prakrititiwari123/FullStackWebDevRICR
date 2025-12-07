function login() {
  console.log("Login Button Clicked");
  const em = document.getElementById("LoginEmail").value;
  console.log("Email: "+em);
  const ps = document.getElementById("LoginPassword").value;
  console.log(ps);

  alert("Login Done")


  document.getElementById("LoginEmail").value="";
  document.getElementById("LoginPassword").value="";

}
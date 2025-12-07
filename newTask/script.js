function search() {
  const text = document.getElementById("state").value;
  const img = document.getElementById("div");
  const div = document.createElement("div");
  div.innerText = "⛳️";
  div.style.position = "absolute";
  div.style.zIndex = "99";
  div.style.width = "999px";
  if (text === "Andhra Pradesh") {
    div.style.top = "68%";
    div.style.left = "37%";
    img.appendChild(div);
  }
  if (text === "Arunachal Pradesh") {
    div.style.top = "26%";
    div.style.left = "85%";
    img.appendChild(div);
  }
  if (text === "Assam") {
    div.style.top = "32%";
    div.style.left = "80%";
    img.appendChild(div);
  }
  if (text === "Bihar") {
    div.style.top = "35%";
    div.style.left = "59%";
    img.appendChild(div);
  }
  if (text === "Chandigarh") {
    div.style.top = "19%";
    div.style.left = "30%";
    img.appendChild(div);
  }
  if (text === "Chhattisgarh") {
    div.style.top = "47%";
    div.style.left = "47%";
    img.appendChild(div);
  }
  if (text === "Delhi") {
    div.style.top = "26%";
    div.style.left = "32%";
    img.appendChild(div);
  }
  if (text === "Goa") {
    div.style.top = "65.5%";
    div.style.left = "20%";
    img.appendChild(div);
  }
  if (text === "Gujarat") {
    div.style.top = "42%";
    div.style.left = "15%";
    img.appendChild(div);
  }
  if (text === "Haryana") {
    div.style.top = "24%";
    div.style.left = "30%";
    img.appendChild(div);
  }
  if (text === "Himachal Pradesh") {
    div.style.top = "16%";
    div.style.left = "34%";
    img.appendChild(div);
  }
  if (text === "Jammu & Kashmir") {
    div.style.top = "10%";
    div.style.left = "27%";
    img.appendChild(div);
  }
  if (text === "Jharkhand") {
    div.style.top = "41%";
    div.style.left = "57%";
    img.appendChild(div);
  }
  if (text === "Karnataka") {
    div.style.top = "68%";
    div.style.left = "26%";
    img.appendChild(div);
  }
  if (text === "Kerala") {
    div.style.top = "83%";
    div.style.left = "28%";
    img.appendChild(div);
  }
  if (text === "Ladakh") {
    div.style.top = "7%";
    div.style.left = "32%";
    img.appendChild(div);
  }
  if (text === "Madhya Pradesh") {
    div.style.top = "42%";
    div.style.left = "35%";
    img.appendChild(div);
  }
  if (text === "Maharashtra") {
    div.style.top = "53%";
    div.style.left = "25%";
    img.appendChild(div);
  }
  if (text === "Manipur") {
    div.style.top = "37%";
    div.style.left = "84%";
    img.appendChild(div);
  }
  if (text === "Meghalaya") {
    div.style.top = "36%";
    div.style.left = "75%";
    img.appendChild(div);
  }
  if (text === "Mizoram") {
    div.style.top = "42%";
    div.style.left = "81%";
    img.appendChild(div);
  }
  if (text === "Nagaland") {
    div.style.top = "32%";
    div.style.left = "86%";
    img.appendChild(div);
  }
  if (text === "Odisha") {
    div.style.top = "50%";
    div.style.left = "50%";
    img.appendChild(div);
  }
  if (text === "Punjab") {
    div.style.top = "18%";
    div.style.left = "27%";
    img.appendChild(div);
  }
  if (text === "Rajasthan") {
    div.style.top = "30%";
    div.style.left = "20%";
    img.appendChild(div);
  }
  if (text === "Sikkim") {
    div.style.top = "30%";
    div.style.left = "66.8%";
    img.appendChild(div);
  }
  if (text === "Tamil Nadu") {
    div.style.top = "80%";
    div.style.left = "35%";
    img.appendChild(div);
  }
  if (text === "Telangana") {
    div.style.top = "58%";
    div.style.left = "37%";
    img.appendChild(div);
  }
  if (text === "Tripura") {
    div.style.top = "40%";
    div.style.left = "77%";
    img.appendChild(div);
  }
  if (text === "Uttar Pradesh") {
    div.style.top = "32%";
    div.style.left = "43%";
    img.appendChild(div);
  }
  if (text === "Uttarakhand") {
    div.style.top = "21%";
    div.style.left = "39%";
    img.appendChild(div);
  }
  if (text === "West Bengal") {
    div.style.top = "41%";
    div.style.left = "65%";
    img.appendChild(div);
  }
  const temp = document.createElement("p");
  temp.innerText = text;
  div.addEventListener("mouseenter", () => {
    div.appendChild(temp);
  });
  div.addEventListener("mouseleave", () => {
    div.removeChild(temp);
  });
}
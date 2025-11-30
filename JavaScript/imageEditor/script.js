if (
  document.getElementById("image").src ===
  "http://127.0.0.1:5500/JavaScript/imageEditor/index.html"
) {
  document.getElementById("image").style.display = "none";
}

function uploadImage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);
  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
}

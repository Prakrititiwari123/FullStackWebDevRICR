const img=document.getElementById("image").src;

console.log(img);

if(!img)
{
    document.getElementById("image").style.display=none;
}
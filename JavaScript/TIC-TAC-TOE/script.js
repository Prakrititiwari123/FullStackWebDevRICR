let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetBtn");
let newGameBtn=document.querySelector("newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


const showWinner=(winner)=>{
  msg.innerText=`Congratulation, winner is ${winner}`;
  msgContainer.classList.remove("hide");
}

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let post1Val = boxes[patterns[0]].innerText;
    let post2Val = boxes[patterns[1]].innerText;
    let post3Val = boxes[patterns[2]].innerText;

    if(post1Val !="" && post2Val !="" && post3Val !=""){
      if(post1Val === post2Val && post2Val === post3Val){
        console.log("winner",post1Val);
        showWinner(post1Val);
      }
    }

  }  

};


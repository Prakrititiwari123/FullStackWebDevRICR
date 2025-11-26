function start() {
  console.log("Game started");

  document.getElementById("rollDice1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  // console.log("Game restarted");
  window.location.reload();
}

function p1Play() {
  console.log("Player1 playing");

  let score = Number(document.getElementById("p1sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  switch (DF) {
    case 1: {document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image1.png";
    break;
   }
    case 2: {document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image2.png";
    break;
   }
    case 3: {document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image3.png";
    break;
   }
    case 4: {document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image4.png";
    break;
   }
    case 5: {document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image5.png";
    break;
   }
    case 6: {document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image6.png";
    break;
   }
    default:{document.getElementById("p1dice").src="/PROJECTS/diceGameProject/images/image6.png";
    break;
   }
}


  // console.log(DF);
  if(DF===6)
  {
    document.getElementById("rollDice1").disabled = true;
    document.getElementById("rollDice2").disabled = false;

  }
  else{
        score = score + DF;
        document.getElementById("p1sc").innerText = score;
  }
  
}

function p2Play() {
  console.log("Player2 playing");
  let score = Number(document.getElementById("p2sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

//   switch (DF) {
//     case 1: {document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }
//     case 2: {document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }
//     case 3: {document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }
//     case 4: {document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }
//     case 5: {document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }
//     case 6: {document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }
//     default:{document.getElementById("p2dice").src="/PROJECTS/diceGameProject/image.png";
//     break;
//    }



    document.getElementById("p2dice").src=`/PROJECTS/diceGameProject/images/image${DF}.png`

  // console.log(DF);
  if(DF===6)
  {
    document.getElementById("rollDice1").disabled = false;
    document.getElementById("rollDice2").disabled = true;

  }
  else{
        score = score + DF;
        document.getElementById("p2sc").innerText = score;
  }
  

  }




// // const Playertxt = document.getElementById("Playertxt");
// // const Computertxt = document.querySelector("#Computertxt");
// // const resulttxt = document.querySelector("#resulttxt");
// // const choicebtn = document.querySelectorAll(".choicebtn");
// // let player;
// // let computer;
// // let result;

// // choicebtn.forEach((button) =>button.addEventListener("click", ()=>{
// // player=button.textContent;
// // computerturn();
// // Playertxt.textContent=`Player:${player}`
// // Computertxt.textContent=`Computer${computer}`
// // resulttxt.textContent=checkwinner();
// // }))



// // function computerturn(){
// //     const randNum=Math.floor(Math.random()*3)+1;
// //     switch (randNum){
// //         case 1:
// //             computer="ROCK";
// //             break;
// //             case 2:
// //                 computer="PAPER";
// //                 break;
// //                 case 3:
// //                     computer="SISSORS";
// //                     break;
// //     }
// // }

// // function checkwinner() {
// //     if (computer == player) {
// //         return "Draw";
// //     } else if (computer == "ROCK") {
// //         return player =="PAPER" ? "You win" : "You lose";
// //     } else if (computer == "PAPER") {
// //         return player == "SISSORS" ? "You win" : "You lose";
// //     } else if (computer == "SISSORS") {
// //         return player == "ROCK" ? "You win" : "You lose";
// //     }
// // }


// const Playertxt = document.getElementById("Playertxt");
// const Computertxt = document.querySelector("#Computertxt");
// const resulttxt = document.querySelector("#resulttxt");
// const choicebtn = document.querySelectorAll(".choicebtn");
// let player;
// let computer;
// let result;

// choicebtn.forEach((button)=>{button.addEventListener("click",()=>{
// player=button.textContent;
// computerchoice()
// Playertxt.textContent=`Player:${player}`;
// Computertxt.textContent=`Computer:${computer}`;
// resulttxt.textContent=checkwinner();




// })})






//  function computerchoice(){
//     const randNum=Math(Math.random()*3)+1;
//     switch (randNum){
//         case 1:
//             computer="ROCK";
//         break;
//         case 2:
//             computer="PAPER";
//             break;
    
//     case 3:
// computer="SCISSORS";
// break;
//     }
//  }

const Playertxt = document.getElementById("Playertxt");
const Computertxt = document.querySelector("#Computertxt");
const resulttxt = document.querySelector("#resulttxt");
const choicebtn = document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;

choicebtn.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.textContent;
    computerchoice(); // Generate computer's choice
    Playertxt.textContent = `Player: ${player}`;
    Computertxt.textContent = `Computer: ${computer}`; // Display the computer's choice
    resulttxt.textContent = checkwinner(); // Display the result
  });
});

function computerchoice() {
  const randNum = Math.floor(Math.random() * 3) + 1; // Corrected random number generation
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS"; // Corrected spelling to "SCISSORS"
      break;
  }
}

function checkwinner() {
  if (computer === player) {
    return "Draw";
  } else if (computer === "ROCK") {
    return player === "PAPER" ? "You win" : "You lose";
  } else if (computer === "PAPER") {
    return player === "SCISSORS" ? "You win" : "You lose";
  } else if (computer === "SCISSORS") {
    return player === "ROCK" ? "You win" : "You lose";
  }
}


// function checkwinner() {
//     if (computer === player) {
//         return "Draw";
//     } else if (computer === "ROCK") {
//         return player ==="PAPER" ? "You win" : "You lose";
//     } else if (computer === "PAPER") {
//         return player === "SICSSORS" ? "You win" : "You lose";
//     } else if (computer === "SCISSORS") {
//         return player === "ROCK" ? "You win" : "You lose";
//     }
// }

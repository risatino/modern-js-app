// var boxNumbersClicked = [];
// var numToWin = 3;

// function clickMe(boxNumber) {
//   if (boxNumbersClicked.indexOf(boxNumber) === -1){
//   boxNumbersClicked.push(boxNumber);
//   }
//   checkIfWinner();
// }

// function checkIfWinner() {
//   if (boxNumbersClicked.length === numToWin) {
//     userWon();
//   }
// }

// function userWon() {
//   alert("You're so cool");
// }

function timeOfDay(color) {
  document.getElementsByTagName('body')[0].style.background = color;
  document.getElementById('time').innerHTML = time;
  }
// var numClicks = 0;
// var winClicks = 5;

// function jackhammer() {
//   numClicks++;
//   if (numClicks === winClicks) {
//     win();
//   }
// }

// function win() {
//   alert("You win!!!");
// }

var numClicks = 0;
var colors = ["blue", "red", "black", "green", "purple"];

function jackhammer(box) {

  box.style["background-color"] = colors[numClicks];
  if (numClicks < colors.length - 1) {
    numClicks++;
  } else {
    numClicks = 0;
  }
}
// .style["CSS-ATTRIBUTE"] can change the styling of the element
// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);


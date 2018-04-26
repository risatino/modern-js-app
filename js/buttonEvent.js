// Set variable for the button
var buttonClick = document.querySelector("#clickHere");

buttonClick.addEventListener("click", function () {
    
    var favoriteColor = prompt("What is your favorite color? ");
    var colorText = "Yerr favorite color is " + favoriteColor + ".";
    var color = document.querySelector("#color");

    // add new html line to color
    color.innerHTML = colorText;
});
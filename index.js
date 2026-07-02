if (performance.getEntriesByType("navigation")[0].type === "reload") {

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
image1.setAttribute("src", randomImageSource1);

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
image2.setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 👾 Player 1 wins!!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "👾 Player 2 wins!!";

}
// Draw
else {
    document.querySelector("h1").innerHTML = "👽 It seems to be a ... DRAW!";
}
}
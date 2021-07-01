var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceRandom = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceSource = "images/" + diceRandom; //images/dice1.png to dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceRandom = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", diceRandom);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏁 Player 1 wins!";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins! 🏁";
}

else {
    document.querySelector("h1").innerHTML = "🎌Draw🎌";
}
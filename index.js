//player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "image/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
//player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "image/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//condition for winning
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩!";
}
else
{
    document.querySelector("h1").innerHTML = "Match Draw!";
}
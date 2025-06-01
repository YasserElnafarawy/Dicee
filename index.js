
var player1Name = prompt("Player 1 Name");
var player2Name = prompt("Player 2 Name");
document.querySelectorAll("p")[0].innerHTML = player1Name;
document.querySelectorAll("p")[1].innerHTML = player2Name;

var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var player1Image = "./images/dice" + player1 + ".png";
document.querySelector("img.img1").setAttribute("src", player1Image);

// if (player1 === 1){
//     document.querySelector("img.img1").setAttribute("src","./images/dice1.png")
// } 
// else if (player1 === 2) {
//     document.querySelector("img.img1").setAttribute("src","./images/dice2.png")
// }
// else if (player1 === 3) {
//     document.querySelector("img.img1").setAttribute("src","./images/dice3.png")
// }
// else if (player1 === 4) {
//     document.querySelector("img.img1").setAttribute("src","./images/dice4.png")
// }
// else if (player1 === 5) {
//     document.querySelector("img.img1").setAttribute("src","./images/dice5.png")
// }
// else {
//     document.querySelector("img.img1").setAttribute("src","./images/dice6.png")
// }



// var player2Image = "./images/dice" + player2 + ".png";
// document.querySelector("img.img2").setAttribute("src", player2Image);

if (player2 === 1){
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png")
} 
else if (player2 === 2) {
    document.querySelector("img.img2").setAttribute("src","./images/dice2.png")
}
else if (player2 === 3) {
    document.querySelector("img.img2").setAttribute("src","./images/dice3.png")
}
else if (player2 === 4) {
    document.querySelector("img.img2").setAttribute("src","./images/dice4.png")
}
else if (player2 === 5) {
    document.querySelector("img.img2").setAttribute("src","./images/dice5.png")
}
else {
    document.querySelector("img.img2").setAttribute("src","./images/dice6.png")
}




if (player1 > player2) {
    document.querySelector("h1").innerHTML = player1Name + " Wins!<img src='./images/trophy.png' class='win' />";
} 
else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "<img src='./images/trophyLeft.png' class='win' />" + player2Name + " Wins!";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


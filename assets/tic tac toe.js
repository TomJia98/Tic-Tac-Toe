/*var TL = document.getElementById("TL");
TL.addEventListener("mouseover", mOver());
TL.addEventListener("mouseout", mOut);
TL.addEventListener("click", TLclick);*/
var turn = 1;
var redWin= ["0",];//creates an array to log Reds turns
var greenWin = ["0",];//creates an array to log greens turns
const all = [1,2,3,4,5,6,7,8,9]

function mOver(x) {
    document.getElementById(x).style.backgroundColor = "Lightblue";  
}//changes the currently selected box to lightblue


function mLeave(x) {
    document.getElementById(x).style.backgroundColor = "";
}//changes back the currently selected box to blank if not selected


function onClick(x) {
   turn++;
   if (turn % 2 == 0) {
    document.getElementById(x).style.backgroundColor = "red";
    redWin.push(x);
   }
   else { 
       document.getElementById(x).style.backgroundColor = "green";
       greenWin.push(x);
       
   }
    document.getElementById(x).onmouseleave = "";
    document.getElementById(x).onmouseover = "";
    document.getElementById(x).onclick = "";
// clears the ability for a clicked box to be re-clicked

if (redWin.includes(1) && redWin.includes(2) && redWin.includes(3)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if row one is filled by red, display "Red Wins!"
}
if (greenWin.includes(1) && greenWin.includes(2) && greenWin.includes(3)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if row one is filled by green, display "Green Wins!"
}
if (redWin.includes(4) && redWin.includes(5) && redWin.includes(6)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if row two is filled by red, display "Red Wins!"
}
if (greenWin.includes(4) && greenWin.includes(5) && greenWin.includes(6)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if row two is filled by green, display "Green Wins!"
}
if (redWin.includes(7) && redWin.includes(8) && redWin.includes(9)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if row three is filled by red, display "Red Wins!"
}
if (greenWin.includes(7) && greenWin.includes(8) && greenWin.includes(9)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if row three is filled by green, display "Green Wins!"
}
if (greenWin.includes(1) && greenWin.includes(4) && greenWin.includes(7)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if collumn one is filled by green, display "Green Wins!"
}
if (redWin.includes(1) && redWin.includes(4) && redWin.includes(7)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if collumn one is filled by red, display "Red Wins!"
}
if (redWin.includes(2) && redWin.includes(5) && redWin.includes(8)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if collumn two is filled by red, display "Red Wins!"
}
if (greenWin.includes(2) && greenWin.includes(5) && greenWin.includes(8)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if collumn two is filled by green, display "Green Wins!"
}
if (redWin.includes(3) && redWin.includes(6) && redWin.includes(9)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if collumn three is filled by red, display "Red Wins!"
}
if (greenWin.includes(3) && greenWin.includes(6) && greenWin.includes(9)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if collumn three is filled by green, display "Green Wins!"
}
if (greenWin.includes(1) && greenWin.includes(5) && greenWin.includes(9)) {
    document.getElementById("win").innerHTML = "Green Wins!";
//if \ is filled by green, display "Green Wins!"
}
if (redWin.includes(1) && redWin.includes(5) && redWin.includes(9)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if \ is filled by red, display "Red Wins!"
}
if (greenWin.includes(3) && greenWin.includes(5) && greenWin.includes(7)) {
    document.getElementById("win").innerHTML = "Green Wins!";
    var gameWon = true;
//if / is filled by green, display "Green Wins!"
}
if (redWin.includes(3) && redWin.includes(5) && redWin.includes(7)) {
    document.getElementById("win").innerHTML = "Red Wins!";
    var gameWon = true;
//if / is filled by red, display "Red Wins!"
}// in case of a game with more possible outcomes, listing all for a win condition would be pointless. since 
// tic tac toe is so simple, its easier to just do it this way. i would like to have made a way for the code to work
// out if the game had been won, rather than just checking over every outcome.
if (gameWon == true) {
    document.getElementById(1).onclick ="";
    document.getElementById(2).onclick ="";
    document.getElementById(3).onclick ="";
    document.getElementById(4).onclick ="";
    document.getElementById(5).onclick ="";
    document.getElementById(6).onclick ="";
    document.getElementById(7).onclick ="";
    document.getElementById(8).onclick ="";
    document.getElementById(9).onclick ="";
// makes all boxes unclickable after win

    document.getElementById(1).onmouseover ="";
    document.getElementById(2).onmouseover ="";
    document.getElementById(3).onmouseover ="";
    document.getElementById(4).onmouseover ="";
    document.getElementById(5).onmouseover ="";
    document.getElementById(6).onmouseover ="";
    document.getElementById(7).onmouseover ="";
    document.getElementById(8).onmouseover ="";
    document.getElementById(9).onmouseover ="";
//removes "lightblue" colour from hover

    document.getElementById("winButton").style.display="block";
//displays the reset button on win
console.log(gameWon)
}//locks out game on a win. i would rather refer to each box in one statement, but i couldnt figure out how to input an array
//into the "if" function
}

function reset() {
    document.getElementById(1).style.backgroundColor = "";
    document.getElementById(2).style.backgroundColor = "";
    document.getElementById(3).style.backgroundColor = "";
    document.getElementById(4).style.backgroundColor = "";
    document.getElementById(5).style.backgroundColor = "";
    document.getElementById(6).style.backgroundColor = "";
    document.getElementById(7).style.backgroundColor = "";
    document.getElementById(8).style.backgroundColor = "";
    document.getElementById(9).style.backgroundColor = "";
//clears the board
    
     greenWin = ["0"];
    redWin = ["0"];

    
    document.getElementById(1).onmouseover = "mOver(1)";

}
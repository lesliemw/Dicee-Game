let randomNumber1 = Math.floor((Math.random() * 6) + 1); //gives a random number ebtween 1 and 6
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

randomNumber1
randomNumber2

// Sets parameters for the first dice
function dice1() {

    let img1 = document.querySelector(".img1");

    if (randomNumber1 === 1) {
        img1.setAttribute("src" , "images/dice1.png");
    } else if (randomNumber1 === 2) {
        img1.setAttribute("src" , "images/dice2.png");
    } else if (randomNumber1 === 3) {
        img1.setAttribute("src" , "images/dice3.png");
    } else if (randomNumber1 === 4) {
        img1.setAttribute("src" , "images/dice4.png");
    } else if (randomNumber1 === 5) {
        img1.setAttribute("src" , "images/dice5.png");
    } else {
        img1.setAttribute("src" , "images/dice6.png");
    }
}

// set parameters for the second dice
function dice2() {

    let img2 = document.querySelector(".img2");

    if (randomNumber2 === 1) {
        img2.setAttribute("src" , "images/dice1.png");
    } else if (randomNumber2 === 2) {
        img2.setAttribute("src" , "images/dice2.png");
    } else if (randomNumber2 === 3) {
        img2.setAttribute("src" , "images/dice3.png");
    } else if (randomNumber2 === 4) {
        img2.setAttribute("src" , "images/dice4.png");
    } else if (randomNumber2 === 5) {
        img2.setAttribute("src" , "images/dice5.png");
    } else {
        img2.setAttribute("src" , "images/dice6.png");
    }
}

// Sets message for winner of the dice roll
function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText= "Player 1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText= "Player 2 Wins!"
    } else {
        document.querySelector("h1").innerText= "It's A Tie!"
    }
}

dice1();
dice2();
winner();
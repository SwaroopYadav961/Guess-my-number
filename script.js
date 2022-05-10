'use strict';

/*console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".message").textContent = "Demo Text");

document.querySelector(".score").textContent = "18";
document.querySelector(".number").textContent = "18";

document.querySelector(".guess").value = "18" 

document.querySelector(".check").addEventListener("click", function () {
    console.log(document.querySelector(".guess").value);
    console.log(document.querySelector(".message").textContent = "Demo Text");
}); */

let seceretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    // No input
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    }
    // Player Wins!
    else if (guess === seceretNumber) {
        document.querySelector(".message").textContent = "🤙 Correct Number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = seceretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }
    // player eners wrong guess !
    else if (guess !== seceretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > seceretNumber ? "🙁 Too High!" : "🤔 Too low!";
            score -= 1;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "🙃 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }

    }
});

//     // guess is higher than secretNumber
//     else if (guess > seceretNumber) {
//         if (score > 1) {
//             document.querySelector(".message").textContent = "🙁 Too High!";
//             score -= 1;
//             document.querySelector(".score").textContent = score;
//         }
//         else {
//             document.querySelector(".message").textContent = "🙃 You lost the game!";
//             document.querySelector(".score").textContent = 0;
//         }

//         // guess is lower than secretNumber
//     }
//     else if (guess < seceretNumber) {
//         if (score > 1) {
//             document.querySelector(".message").textContent = "🤔 Too low!";
//             score -= 1;
//             document.querySelector(".score").textContent = score;
//         }
//         // player lost!
//         else {
//             document.querySelector(".message").textContent = "🙃 You lost the game!";
//             document.querySelector(".score").textContent = 0;
//         }


//     }

// });

//  restart button

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    seceretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";








})

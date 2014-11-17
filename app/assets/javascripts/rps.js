var user;
var choose = function(choice) {
    user = choice;
}

var refreshPage = function(choice) {
    choose(choice); 
    compare(user, computerChoice);
    setTimeout(function() { window.location.reload(true) },2000); //makes response stay on page, instead of going away
}
var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }


var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        document.getElementById("result").innerHTML = "Tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Win!";
        } else {
            document.getElementById("result").innerHTML = "You Lose!";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Win!";
        } else if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Lose!";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Lose!";
        } else if (choice2 === "paper") {
            document.getElementById("result").innerHTML = "You Win!";
        }
    } else {
        document.getElementById("result").innerHTML = "ERROR!";
    }
}


// code below is alternate js version of the game but without the button tie in.

// $('#play').click(function() {
//     var userChoice = $('#play').text();
//     var computerChoice = Math.random();

//     if (computerChoice < 0.34) {
//         computerChoice = "rock";
//     } else if (computerChoice <= 0.67) {
//         computerChoice = "paper";
//     } else {
//         computerChoice = "scissors";
//     }

//     compare(userChoice, computerChoice);

// });




// function compare(choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     }

//     if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return "rock wins";
//         } else {
//             return "paper wins";
//         }
//     }

//     if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "paper wins";
//         } else {
//             if (choice2 === "scissors") {
//                 return "scissors wins";
//             }
//         }

//         if (choice1 === "scissors") {
//             if (choice2 === "rock") {
//                 return "rock wins";
//             } else {
//                 if (choice2 === "paper") {
//                     return "scissors wins";
//                 }
//             }
//         }
//     }

// }



// code written below was the first version of the rock paper scissor game in javascript

// $('#play').click(function(evt){
//     console.log(evt);
// var userChoice = $('button').val();
// var computerChoice = Math.random();
// compare(userChoice, computerChoice);

// });


// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if (computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// function compare(choice1, choice2) {
//         if (choice1 === choice2) {
//             return "The result is a tie!";
//         }

//         if (choice1 === "rock") {
//             if (choice2 === "scissors") {
//                 return "rock wins";
//             } else {
//                 return "paper wins";
//             }
//         }

//         if (choice1 === "paper") {
//             if (choice2 === "rock") {
//                 return "paper wins";
//             } else {
//                 if (choice2 === "scissors") {
//                     return "scissors wins";
//                 }
//             }

//             if (choice1 === "scissors") {
//                 if (choice2 === "rock") {
//                     return "rock wins";
//                 } else {
//                     if (choice2 === "paper") {
//                         return "scissors wins";
//                     }
//                 }
//             }
//         }
//         prompt("User Choice: " + userChoice + "" +" Computer Choice: " + computerChoice);
//     }

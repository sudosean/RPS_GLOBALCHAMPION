var user;
var choose = function(choice) {
    user = choice;
}


var refreshPage = function(choice) {
    choose(choice);
    setTimeout(function() {
        compare(user, makeComputerChoice());
    }, 2600); //makes response stay on page, instead of going away
}


var computerChoice = makeComputerChoice();

function makeComputerChoice() {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}




var compare = function(choice1, choice2) {   //choice 1 = user, choice 2 = computer
    if (choice1 === choice2) {
        document.getElementById("result").innerHTML = "Tie!";
        if (choice1 === "rock" && choice2 === "rock") {
            document.getElementById("fist_back").src="assets/luchador_rock.png";
            document.getElementById("fist_front").src="assets/luchador_rock.png";
        } else if (choice1 === "paper" && choice2 === "paper"){
            document.getElementById("fist_back").src="assets/luchador_paper.png";
            document.getElementById("fist_front").src="assets/luchador_paper.png";
        } else {
            document.getElementById("fist_back").src="assets/luchador_scissors.png";
            document.getElementById("fist_front").src="assets/luchador_scissors.png";
        }
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Win!";
            document.getElementById("fist_back").src="assets/luchador_rock.png";     //user choice rock
            document.getElementById("fist_front").src="assets/luchador_scissors.png"; //computer choice scissors
        } else {
            document.getElementById("result").innerHTML = "You Lose!";
            document.getElementById("fist_back").src="assets/luchador_rock.png";   //user choice rock
            document.getElementById("fist_front").src="assets/luchador_paper.png"; //computer choice paper
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Win!";
            document.getElementById("fist_back").src="assets/luchador_paper.png";  //user choice paper
            document.getElementById("fist_front").src="assets/luchador_rock.png";  //computer choice rock
        } else if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Lose!";
            document.getElementById("fist_back").src="assets/luchador_paper.png";     //user choice paper
            document.getElementById("fist_front").src="assets/luchador_scissors.png";  //computer choice scissors
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Lose!";                  
            document.getElementById("fist_back").src="assets/luchador_scissors.png";    //user choice scissors
            document.getElementById("fist_front").src="assets/luchador_rock.png";       //computer choice rock
        } else if (choice2 === "paper") {
            document.getElementById("result").innerHTML = "You Win!";                   
            document.getElementById("fist_back").src="assets/luchador_scissors.png";    //user choice scissors
            document.getElementById("fist_front").src="assets/luchador_paper.png";      //computer choice paper        
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
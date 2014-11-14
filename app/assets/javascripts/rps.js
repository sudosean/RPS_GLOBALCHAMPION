
$('#play').click(function(){
var = userChoice = $('button').val();
var computerChoice = Math.random();
compare(userChoice, computerChoice);

});


if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

function compare(choice1, choice2) {
        if (choice1 === choice2) {
            return "The result is a tie!";
        }

        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
            } else {
                return "paper wins";
            }
        }

        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
            } else {
                if (choice2 === "scissors") {
                    return "scissors wins";
                }
            }

            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    return "rock wins";
                } else {
                    if (choice2 === "paper") {
                        return "scissors wins";
                    }
                }
            }
        }
        prompt("User Choice: " + userChoice + "" +" Computer Choice: " + computerChoice);
    }
        

        $('button').click(function() {
    var userChoice = $('button').val();
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    compare(userChoice, computerChoice);
    prompt( "Computer Choice: " + computerChoice);

});




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


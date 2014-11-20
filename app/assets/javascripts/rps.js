var user;
var choose = function(choice) {
    user = choice;
}


var refreshPage = function(choice) {
    choose(choice);
    setTimeout(function() {
        compare(user, makeComputerChoice());
    }, 2600);//makes response stay on page, instead of going away
    $("#fist_back").removeClass("hidden");
    $("#fist_front").removeClass("hidden");
    $("#mask-rock-l").addClass("hidden"); 
    $("#mask-rock-r").addClass("hidden");
    $("#mask-paper-l").addClass("hidden");
    $("#mask-paper-r").addClass("hidden");
    $("#mask-scissors-r").addClass("hidden");
    $("#mask-scissors-l").addClass("hidden");
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
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");
            $("#mask-rock-l").removeClass("hidden");
            $("#mask-rock-r").removeClass("hidden");
        } else if (choice1 === "paper" && choice2 === "paper"){
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");
            $("#mask-paper-l").removeClass("hidden");
            $("#mask-paper-r").removeClass("hidden");
        } else {
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");
            $("#mask-scissors-l").removeClass("hidden");
            $("#mask-scissors-r").removeClass("hidden");
        }
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Win!";
            $("#fist_back").addClass("hidden");                     
            $("#fist_front").addClass("hidden");                    
            $("#mask-rock-l").removeClass("hidden");        //user choice rock
            $("#mask-scissors-r").removeClass("hidden");    //computer choice scissors
        } else {
            document.getElementById("result").innerHTML = "You Lose!";
            $("#fist_back").addClass("hidden");     
            $("#fist_front").addClass("hidden");    
            $("#mask-rock-l").removeClass("hidden");        //user choice rock
            $("#mask-paper-r").removeClass("hidden");       //computer choice paper
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Win!";
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");
            $("#mask-paper-l").removeClass("hidden");   //user choice paper
            $("#mask-rock-r").removeClass("hidden");  //computer choice rock
        } else if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Lose!";
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");
            $("#mask-paper-l").removeClass("hidden");       //user choice paper
            $("#mask-scissors-r").removeClass("hidden");        //computer choice scissors

        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Lose!";
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");                  
            $("#mask-scissors-l").removeClass("hidden");               //user choice scissors
            $("#mask-rock-r").removeClass("hidden");       //computer choice rock
        } else if (choice2 === "paper") {
            document.getElementById("result").innerHTML = "You Win!";
            $("#fist_back").addClass("hidden");
            $("#fist_front").addClass("hidden");
            $("#mask-scissors-l").removeClass("hidden");               //user choice scissors
            $("#mask-paper-r").removeClass("hidden");      //computer choice paper        
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
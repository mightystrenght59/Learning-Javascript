//Conditional Statement Practice 
let userInput = prompt("What is your password");
let countPass = userInput.length;

if (countPass < 4) {
    console.log("Password is too short");
} else if (countPass > 4) {
    console.log("Password is too long");
} else {
    console.log("Lovely");
}

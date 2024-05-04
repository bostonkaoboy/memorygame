let storedNumber = null;
let score = 0;
let wrong = 0;
let min = 1;
let max =10;

// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update the HTML element with a random number
function updateRandomNumber() {
    var randomNumber = getRandomNumber(min, max);
    document.getElementById("random-number").textContent = randomNumber;
    storedNumber=randomNumber.toString();
    // Clear the number from the screen in 5 seconds
    setTimeout(clearNumber, 5000);
    min = min * 10;
    max = max * 10;
}

// Automatically generate and display a random number when the page loads
    window.onload = function() {
    updateRandomNumber();
};

// Get the value entered by the user and check to see if it is correct
function getStringInput() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value="";
    var element = document.getElementById("rightWrong");

    if (userInput === storedNumber){
        console.log("You are correct");
        rightWrong = "Correct";
        score++;
        document.getElementById("score").textContent=score;
        element.classList.remove("red-text");
        element.classList.add("green-text");
        document.getElementById("rightWrong").textContent="Correct";
        updateRandomNumber();
    }
    else {
        console.log("Incorrect");
        element.classList.remove("green-text");
        element.classList.add("red-text");
        wrong++;
        document.getElementById("rightWrong").textContent="Incorrect: "+wrong;
        min = min / 10;
        max = max / 10;
        if (wrong == 3){
            document.getElementById("rightWrong").textContent="GAME OVER";
        } 
        updateRandomNumber();
    }
}

// Function to clear the number from screen
function clearNumber(){
    document.getElementById("random-number").textContent = "_______";
}
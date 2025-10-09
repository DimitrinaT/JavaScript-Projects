// Function to perform addition
function addition() {
    var result = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + result;
}

// Function to perform subtraction
function subtraction() {
    var result = 20 - 7;
    document.getElementById("Subtraction").innerHTML = "20 - 7 = " + result;
}

// Function to perform multiplication
function multiplication() {
    var result = 9 * 3;
    document.getElementById("Multiplication").innerHTML = "9 * 3 = " + result;
}

// Function to perform division
function division() {
    var result = 30 / 5;
    document.getElementById("Division").innerHTML = "20 / 5 = " + result;
}

// Function that performs multiple operations
function multipleOperations() {
    var result = (2 + 4) * 8 / 2 - 2;
    document.getElementById("Multiple").innerHTML = "(2 + 4) * 8 / 2 - 2 = " + result;
}

// Function to demonstrate modulus operation
function modulus() {
    var result = 39 % 6;
    document.getElementById("Modulus").innerHTML = "39 % 6 = " + result;
}

// Function to demonstrate negation operator
function negation() {
    var x = 7;
    document.getElementById("Negation").innerHTML = -x;
}


// Function to demonstrate increment operator
function increment() {
    var x = 9;
    x++;
    document.getElementById("Increment").innerHTML = x;
}

// Function to demonstrate decrement operator
function decrement() {
    var x = 12;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}


// Displays an alert box with a random number between 0 and 20
window.alert(Math.random() * 20);

// Function to round a number using Math.round()
function roundNumber() {
    var result = Math.round(5.4);
    document.getElementById("Round").innerHTML = "Math.round(5.4) = " + result;
}

// Function to generate a random integer between 1 and 20
function randomNumber() {
    var result = Math.floor(Math.random() * 20) + 1; 
    document.getElementById("Random").innerHTML = "Random number (1-20): " + result;
}
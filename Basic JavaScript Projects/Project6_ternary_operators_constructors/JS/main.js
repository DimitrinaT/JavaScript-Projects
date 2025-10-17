//Functions using a ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function votingEligibility() {
    var age = document.getElementById("age").value;
    var canVote = (age >= 18) ? "You can vote!":"You are not old enough to vote!";
    document.getElementById("result").textContent = canVote;
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 1971, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//Functions to display the result of the constructor in the HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Cat(name, age, color, breed) {
    this.catName = name;
    this.catAge = age;
    this.catColor = color;
    this.catBreed = breed;
}

var Bob = new Cat("Zev", 3, "Gray", "Siamese");
var Mel = new Cat("Arlo", 2, "Black", "Persian");
var Denis = new Cat("Tuna", 5, "Orange", "Tabby");

function myCat() {
    document.getElementById("New_and_This").innerHTML = 
    Mel.catName + " is a " + Mel.catColor + " " + Mel.catBreed + 
    " who is " + Mel.catAge + " years old.";
}


//A nested function
function fullName() {
    var firstName = "John";

    function addLastName(lastName) {
        firstName = firstName + " " + lastName;
    }

    addLastName("Lewis");
    document.getElementById("Nested_Function").innerHTML = "Full Name: " + firstName;
}
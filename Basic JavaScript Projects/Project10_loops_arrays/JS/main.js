//using a while loop
function Call_Loop() {
    var result = "";
    var i = 3;
    while (i <= 10) {
        result += "<br>" + i;
        i++
    }
    document.getElementById("Loop").innerHTML = result;
}

//using a for loop
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet"]
var content = "";
var y;

function forLoop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content
}

//using an array
function arrayFunction() {
    var fruits = [];
    fruits[0] = "Apple";
    fruits[1] = "Cherry";
    fruits[2] = "Banana";
    fruits[3] = "Mango";
    fruits[4] = "Orange";
    document.getElementById("Array").innerHTML = "This is " + fruits[3] + ".";
}

// using const keyword
function constantPhone() {
    const phone = {
        brand: "Apple",
        model: "iPhone 13",
        storage: "128GB"
    };

    // change a property's value
    phone.storage = "256GB";

    // add a new property with value
    phone.color = "Midnight Black";

    document.getElementById("Constant").innerHTML =
        "Brand: " + phone.brand +
        ", Model: " + phone.model +
        ", Storage: " + phone.storage +
        ", Color: " + phone.color;
}

//Creating an object with the let keyword
let coffee = {
    name: "Lavazza Intenso",
    origin: "Italy",
    strength: "Strong",
    type: "Espresso",
    coffeeInfo() {  //method to summarize coffee info
        return this.name + " is a " + this.strength + " " +
        this.type + " coffee from " + this.origin + ".";
    }
};
document.getElementById("Coffee").innerHTML = coffee.coffeeInfo()


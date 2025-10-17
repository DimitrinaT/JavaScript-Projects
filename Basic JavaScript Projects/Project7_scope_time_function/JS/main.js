//assigning global variable
var x = 6;

function multiplayNumber1() {
    var x = 5; //local variable
    document.write(7 * x + "<br>" ); //using local variable
}

function multiplayNumber2() {
    document.write(x * 2); //using global variable
    console.log(x); // consol.log shows that the global variable is being used
}

multiplayNumber1();
multiplayNumber2();

//A function with an error
function faultyFunc() {
    document.write(x * y);
    console.log(y)
    console.log(x)
}

faultyFunc()


//A function with an if statement
function getDate() {
    if (new Date().getHours() < 11) {
        document.getElementById("Greeting").innerHTML = "It is morning time";
    }
}

// A function with if and else statement
function lunchTime() {
    if (new Date().getHours() === 12) {
        document.getElementById("lunch").innerHTML = "Take a break! It's lunchtime";
    } else {
        document.getElementById("lunch").innerHTML = "Keep working!";
    }
}

//Utilizing the time function from revious slides
function timeFunction() {
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }  else if (Time >= 12 == Time < 18) {
        Replay = "It is afternoon";
    } else {
        Replay = "It is evening time!";
    }
    document.getElementById("time").innerHTML = Replay;
}


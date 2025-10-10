// it shows the data type of the value
document.write(typeof 9); 
document.write("<br>");

// it concatenates a string and a number
document.write("Name" + 4); 
document.write("<br>");


document.write(6 >8); //practice
document.write("<br>");

document.write(23 < 50); //practice
document.write("<br>");


// it shows positive 'Infinity'
document.getElementById("positiveInfinity").innerHTML = 4E308

// it shows negative 'Infinity'
document.getElementById("negativeInfinity").innerHTML = -2E310 


console.log(7 + 3); //practice

console.log(10 > 20); //practice


// using the == operator
document.write(3 == 3);
document.write("<br>");

document.write(6 == 5);
document.write("<br>");

// using the === operator
var a = 7;
var b = 7;
document.write(a === b);
document.write("<br>");

document.write("14" === 7);
document.write("<br>");

document.write("7" === 7);
document.write("<br>");

document.write(3 === 1);
document.write("<br>");

//using the && operator
document.write(3>2 && 5>2);
document.write("<br>");

document.write(7>3 && 3>8);
document.write("<br>");

//using the || operator
document.write(9<11 || 9>10);
document.write("<br>");

document.write(6>10 || 8>10);
document.write("<br>");

//using the ! operator
function not() {
    document.getElementById("not").innerHTML = !(13 > 3);
}


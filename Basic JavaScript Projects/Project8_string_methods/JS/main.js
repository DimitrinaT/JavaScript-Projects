//Using the .concat() method
function concatenate() {
    var sentence1 = "Hello";
    var sentence2 = "World!";
    var fullSentence = sentence1.concat(sentence2);
    document.getElementById("Concatenate").innerHTML = fullSentence
}

//Using the .slice() method
function sliceMethod() {
    var sentence = "Silently capture user sessions without any manual steps or bug reports.";
    var slicedSection = sentence.slice(9, 50)
    document.getElementById("output").innerHTML = slicedSection;
}

//Using the .toString() method
function stringMethod() {
    var a = 100;
    document.getElementById("numberToString").innerHTML = a.toString();
}

//Using the .toPrecision() method
function precisionMethod() {
    var b = 235.4586;
    document.getElementById("Precision").innerHTML = b.toPrecision(5)
}
function fullName () {
    //Declare two variables
    var firstName = "Alice";
    var lastName = "Johnson"

    document.getElementById("intro").innerHTML = "Full Name: ";
    
    // Use += operator to append the first and last name to the paragraph
    document.getElementById("intro").innerHTML += firstName + " " + lastName;
}
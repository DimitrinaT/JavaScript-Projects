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
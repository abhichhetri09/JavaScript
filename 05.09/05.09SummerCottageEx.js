function calculateRent() {
	var rent = Number(document.getElementById("rent").value);
	var participants = Number(document.getElementById("participants").value);
	 // TODO
	var perPerson = rent / participants;
	document.getElementById("answerDiv").innerHTML = "Rent per participants is " + perPerson.toFixed(2) + " euros.";
}
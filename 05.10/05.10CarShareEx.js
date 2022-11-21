function calculateCosts() {
	var km = document.getElementById("kilometers").value;
	var consumption = document.getElementById("consumption").value;
	var price = document.getElementById("price").value;
	var participants = document.getElementById("participants").value;
	var cost = ((consumption/100) * price * km) / participants;

	document.getElementById("answerId").innerHTML = "Fuel costs per participant is " + cost.toFixed(2) + " euros.";
}
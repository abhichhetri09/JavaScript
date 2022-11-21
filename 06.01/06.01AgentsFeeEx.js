function calculateFee() {
		
	// Read value from the input field
var price = document.getElementById("price").value;

	// Calculate fee, save the result to a variable
var fee = (3.44/100) * price;		
		
	// if the fee is under minimum, update it
if(fee < 2400){
	fee = 2400;
}

// Write the answer on the page, to the fee div, as content of the div
	document.getElementById("fee").innerHTML = "Real state agent's fee is " + fee.toFixed(2) + " euros"
}
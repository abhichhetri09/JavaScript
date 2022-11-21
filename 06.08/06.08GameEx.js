function play() {
	// Read value from the input field
	var bet = document.getElementById("bet").value;
	// Randomize dice pips between 1-6
	var pips = Math.round((Math.random() * 5) + 1);
	var pay;
	// Calculate win base on pips
	if(pips == 1 || pips == 3 || pips == 5){
		pay = "no pay";
	}
	else if(pips == 2 || pips == 4){
		pay = "Paid back: " + (bet * 1.25) + " euros";
	}
	else{
		pay = "Paid back: " +  (bet * 1.5) + " euros";
	}
	document.getElementById("answer").innerHTML = "Pips was " + pips + " - " + pay ;
	// Write the answer on the page, to the answer div, as content of the div

}

// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function getReimbursement(length){
	var length = parseInt(length);
	var reimbursement;
	if(length <= 10){
		reimbursement = 8;
	}
	else if(length >= 10 && length <= 20){
		reimbursement = 11;
	}
	else if(length >= 20 && length <= 30){
		reimbursement = 13.5;
	}
	else if(length >= 30 && length <= 45){
		reimbursement = 16.5;
	}
	else if(length >= 45){
		reimbursement = 21;
	}
	return reimbursement;
}
// Define a function  
function calculate() {
		// Read values from the input fields
		var length = document.getElementById("length").value;
		var doctorFee = document.getElementById("doctorsFee").value;
		// Call the function (1.) which calculates and returns Kela reimbursement 
		var reimbursement = getReimbursement(length);
		outputText = "Length of visit is " + length + " minutes." + "<br />" + "Kela reimbursement is " + reimbursement.toFixed(2) + " euros.";
		
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = outputText;
}
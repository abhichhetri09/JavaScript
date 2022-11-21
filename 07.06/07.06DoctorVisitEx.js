
// Defne a function (1.) 
function getReimbursement(length){
	var length = parseInt(length);
	var reimbursement;
	if(length  <= 10){
		reimbursement = 8;
	}
	else if(length > 10 && length <= 20){
		reimbursement = 11;
	}
	else if(length > 20 && length <= 30){
		reimbursement = 13.50;
	}
	else if(length > 30 && length <= 45){
		reimbursement = 16.50;
	}
	else if(length > 45){
		reimbursement = 21;
	}
	return reimbursement;
}
// Defne a function (2.) 
function toPay(doctorsFee, officeFee, result){
    var toPay = (doctorsFee + officeFee) - result;
	return toPay;
}
	
// Define a function (3.) 
function calculate() {
		// Read values from the input fields
		var length = Number(document.getElementById("length").value);
		var doctorsFee = Number(document.getElementById("doctorsFee").value);
		// Call the function (1.) which calculates Kela reimbursement 
		var officeFee = 15.90;
		var result = getReimbursement(length);
		// Call the function (2.) which calculates amount left for the customer to pay
	
		var pay = toPay(doctorsFee, officeFee, result);
		
		// Write the answer on the page, to the answer div, as content of the div
		var outputText = "Doctor's Fee is " + doctorsFee.toFixed(2) + " euros." + "<br />" + "Kela reimbursement is " + result.toFixed(2) + " euros." + "<br />" + "Office Fee is " + officeFee.toFixed(2) + " euros." + "<br />" + "Customer needs to pay " + pay.toFixed(2) + " euros.";

		document.getElementById("answer").innerHTML = outputText;
}
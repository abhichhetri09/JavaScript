function comparePackages() {
	
	// assign input field values into a variables
var text = document.getElementById("textMessages").value;	
var callTime = document.getElementById("callTime").value;
	// calculate the costs of the Special Package
var specialPackage = (text * 0.069 + callTime * 0.069) + 19.90;	
var inclusivePackage = 29.90;
if(specialPackage < inclusivePackage){
	document.getElementById("answer").innerHTML = "The Special package(" + specialPackage.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
}
else{
	document.getElementById("answer").innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package (" + specialPackage.toFixed(2) + ")";
}
}
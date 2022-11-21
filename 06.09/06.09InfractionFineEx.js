function tellInfractionFine() {
	var drivingSpeed = document.getElementById("drivingSpeed").value;
	var speedLimit = document.getElementById("speedLimit").value;
	var fine1 = 85;
	var fine2 = 115;
	var fine3 = 70;
	var fine4 = 100;
	var outPutText;
	var excessSpeed = drivingSpeed - speedLimit;

	if((speedLimit >= 10 && speedLimit <=60) && excessSpeed <= 15){
		outPutText = "Infraction fine is " + fine1 + " euros.";
	}
	else if((speedLimit >=10 && speedLimit <= 60) && excessSpeed > 15 && excessSpeed <= 20){
		outPutText = "InFraction fine is " + fine2 + " euros.";
	}
	else if((speedLimit >= 70 && speedLimit <= 120) && excessSpeed > 1 && excessSpeed <= 15){
		outPutText = "Infraction fine is " + fine3 + " euros.";
	}
	else if((speedLimit >= 70 && speedLimit <= 120) && excessSpeed > 15 && excessSpeed <= 20){
		outPutText = "Infraction fine is " + fine4 + " euros.";
	}
	else if(drivingSpeed > (speedLimit + 15)){
		outPutText = "Income-based unit fine.";
	}
	else{
		outPutText = "No speeding, no fine.";
	}
	document.getElementById("answer").innerHTML = outPutText;
}

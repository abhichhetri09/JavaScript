
function showWeightGoals() {
	var weight = document.getElementById("weight").value;
	var lose = weight * 0.1 / 7;
	outputText = "";

	for(var i = 1; i <= 7; i++){
		weight = weight - lose;
		outputText = outputText + "After " + i + ". week " + weight.toFixed(1) + " kg" + "<br />";
	}
	document.getElementById("answer").innerHTML = outputText;
}
function showComparisonScores() {
	var totalVotes = document.getElementById("votes").value;
	var candidates = document.getElementById("candidates").value;
	outputText = "";

	for(var i = 1; i <= candidates; i++){
		var voteScore = totalVotes / i;
		outputText = outputText + i + ". candidate: " + voteScore.toFixed(0) + "<br />";
	}
	document.getElementById("answer").innerHTML = outputText;
}
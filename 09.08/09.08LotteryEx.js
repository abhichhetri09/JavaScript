	// Define the array variable and index variable inside the script element, but NOT inside the function. 
	// Then they will be global and thus available for all functions to read from or write to.
	var names = [];
	var index = 0;
	var outputText = "";
	function addName() {
		// Assign name from the input field to the array
		var name = document.getElementById("name").value;
		names.push(name);
		var outputName = "";
		for(var i = 0; i < names.length; i++){
			outputName = outputName + names[i] + " ";
			outputText = "Inserted names: " + outputName;
		}
		document.getElementById("nameList").innerHTML = outputText;
		document.getElementById("name").value = ""; 
		document.getElementById("answer").innerHTML = "";

	}

	function makeDraw() {
		var winningIndex = Math.floor(Math.random() * names.length);
		// Randomize the index of the winner
		document.getElementById("answer").innerHTML = "<br>" + "Winner is " + names[winningIndex];
		
		// Write the answer on the page, to the answer div, as content of the div
		

	}

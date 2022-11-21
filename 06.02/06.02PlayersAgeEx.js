function checkAge() {
	// assign the age input field value into a variable
var age = document.getElementById("age").value;	
	//if age smaller than 18
	if(age < 18){
		var adolescents = "Adolescents are not allowed to play.";
		document.getElementById("answer").innerHTML = adolescents;
	}
	else{
		var old = "Old enough to play.";
		document.getElementById("answer").innerHTML = old;
	}

	
	// Write the answer to the web page DOM, in the answer div, as the content
	
}
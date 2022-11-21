function showStudyGrant() {
	var age = document.getElementById("age").value;
	var withParents = document.getElementById("withParents").value;

		if(age >= 20 && withParents == "y"){
			document.getElementById("answer").innerHTML = "The Study grant is 136.70 euros.";
		}
		else if(age >= 20 && withParents == "n"){
			document.getElementById("answer").innerHTML = "The Study grant is 335.20 euros.";
		}
		else{
			document.getElementById("answer").innerHTML = "Ask Kela.";
		}	
}
	
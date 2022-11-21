function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value; 
  var BMI = (weight / (height/100 * height/100)).toFixed(2);
      if(BMI <= 18.4){
        document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI + " (Weight less than normal weight)";
      }
      else if(BMI  >= 18.5 && BMI <= 24.9){
        document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI + " (Normal Weight)";
      }
      else{
        document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI + " (Overweight)";
      }
  }
  
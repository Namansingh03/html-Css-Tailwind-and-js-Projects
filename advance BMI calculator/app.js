let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let BMI = document.querySelector("#BMI");
const btn = document.querySelector("#btn");
let newBmi = document.querySelector("#updated-bmi");
const updateBtn = document.querySelector(".updated");
let weightLoss = document.querySelector("#weightLoss");

function showNum(){
  let heightVal = height.valueAsNumber;
  let weightVal = weight.valueAsNumber;
  
  let num = weightVal / (heightVal * heightVal);
  
  BMI.valueAsNumber = num;
  newBmi.value = num;
  
}


updateBtn.addEventListener('click', () => {
    let updatedBmi = document.querySelector("#updated-bmi").valueAsNumber;
    let heightVal = height.valueAsNumber;
    let answer = updatedBmi * (heightVal * heightVal);

    weightLoss.valueAsNumber = Math.floor(answer);
});
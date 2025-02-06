const weight = document.querySelector(".weight")
const height = document.querySelector(".height")

const display = document.querySelector(".output-display")

function submitBtnFunc() {
    if(height.value == "" && weight.value == "") {
        alert("Enter your weight & height")
    }

    let bmiCalc = weight.value / (height.value * height.value) * 10000

    if(bmiCalc >= 0 && bmiCalc <= 18.4) {
        display.style.background = "hsl(33, 100%, 80%)"
        display.style.color = "#000"
        display.innerHTML = bmiCalc.toFixed(2) + " (Underweight)"
    } else if (bmiCalc >= 18.5 && bmiCalc <= 24.9) {
        display.style.background = "green"
        display.style.color = "#fff"
        display.innerHTML = bmiCalc.toFixed(2) + " (Normal)"
    } else if (bmiCalc >= 25.0 && bmiCalc <= 39.9) {
        display.style.background = "goldenrod"
        display.style.color = "#000"
        display.innerHTML = bmiCalc.toFixed(2) + " (Overweight)"
    } else if (bmiCalc >= 40.0) {
        display.style.background = "red"
        display.style.color = "#fff"
        display.innerHTML = bmiCalc.toFixed(2) + " (Obese)"
    } 
}
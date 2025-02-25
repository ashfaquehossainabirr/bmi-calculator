const bmiBox = document.querySelector(".bmi")
const weight = document.querySelector(".weight")
const height = document.querySelector(".height")

const display = document.querySelector(".output-display")

function submitBtnFunc() {
    if(height.value == "" && weight.value == "") {
        bmiBox.classList.add("error")
        display.style.background = "red"
        display.style.color = "#fff"
        display.innerHTML = "Enter your height & weight"

        setTimeout(() => {
            display.style.background = "none"
            display.style.color = "none"
            display.innerHTML = ""
            bmiBox.classList.remove("error")
        }, 6000)
    } else if(height.value == "") {
        bmiBox.classList.add("error")
        display.style.background = "red"
        display.style.color = "#fff"
        display.innerHTML = "Enter your height"
        weight.value = ""

        setTimeout(() => {
            display.style.background = "none"
            display.style.color = "none"
            display.innerHTML = ""
            bmiBox.classList.remove("error")
        }, 6000)
    } else if(weight.value == "") {
        bmiBox.classList.add("error")
        display.style.background = "red"
        display.style.color = "#fff"
        display.innerHTML = "Enter your weight"
        height.value = ""

        setTimeout(() => {
            display.style.background = "none"
            display.style.color = "none"
            display.innerHTML = ""
            bmiBox.classList.remove("error")
        }, 6000)
    } else if(isNaN(height.value) || isNaN(weight.value)) {
        bmiBox.classList.add("error")
        display.style.background = "red"
        display.style.color = "#fff"
        display.innerHTML = "Enter valid height & weight"
        weight.value = ""
        height.value = ""

        setTimeout(() => {
            display.style.background = "none"
            display.style.color = "none"
            display.innerHTML = ""
            bmiBox.classList.remove("error")
        }, 6000)
    } else {
        let bmiCalc = weight.value / (height.value * height.value) * 10000

        if(bmiCalc >= 0 && bmiCalc <= 18.4) {
            display.style.background = "hsl(33, 100%, 80%)"
            display.style.color = "#000"
            display.innerHTML = "BMI: " + bmiCalc.toFixed(2) + " (Underweight)"
            height.value = ""
            weight.value = ""
            
            setTimeout(() => {
                display.style.background = "none"
                display.style.color = "none"
                display.innerHTML = ""
            }, 6000)
        } else if (bmiCalc >= 18.5 && bmiCalc <= 24.9) {
            display.style.background = "green"
            display.style.color = "#fff"
            display.innerHTML = "BMI: " + bmiCalc.toFixed(2) + " (Normal)"
            height.value = ""
            weight.value = ""
            
            setTimeout(() => {
                display.style.background = "none"
                display.style.color = "none"
                display.innerHTML = ""
            }, 6000)
        } else if (bmiCalc >= 25.0 && bmiCalc <= 39.9) {
            display.style.background = "goldenrod"
            display.style.color = "#000"
            display.innerHTML = "BMI: " + bmiCalc.toFixed(2) + " (Overweight)"
            height.value = ""
            weight.value = ""
            
            setTimeout(() => {
                display.style.background = "none"
                display.style.color = "none"
                display.innerHTML = ""
            }, 6000)
        } else if (bmiCalc >= 40.0) {
            display.style.background = "red"
            display.style.color = "#fff"
            display.innerHTML = "BMI: " + bmiCalc.toFixed(2) + " (Obese)"
            height.value = ""
            weight.value = ""
            
            setTimeout(() => {
                display.style.background = "none"
                display.style.color = "none"
                display.innerHTML = ""
            }, 6000)
        }
    }
}
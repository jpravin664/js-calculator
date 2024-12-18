const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll('button')

console.log(buttons)

let calculation =[]
let accumulative 


function calculate(button){

    const value = button.textContent
    if (value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = 0
    }
    else if(value === '='){
        console.log(accumulative)
        screenDisplay.textContent = eval(accumulative)
    }
    else{
        calculation.push(value)
        accumulative = calculation.join('')
        screenDisplay.textContent = accumulative
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
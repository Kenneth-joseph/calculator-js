const numberButtons= document.querySelectorAll('.number')
const triggerButtons= document.querySelectorAll('.trigger')
const deleteButton=document.querySelector("#delete")
const clearButton = document.querySelector("#clear")
const previousInput= document.querySelector('#previous-input')
const currentInput= document.querySelector('#current-input')



class Calculator{
    constructor(previousInput, currentInput){
    this.previousInput= previousInput
    this.currentInput = currentInput
    this.clear()
    }

    
}


const calculator = new.Calculator(previousInput, currentInput)
 
numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNUmber(button.innerText)
        calculator.updateDisplay()
    })
})


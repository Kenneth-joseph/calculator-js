

const numberButtons= document.querySelectorAll('.number')
const triggerButtons= document.querySelectorAll('.trigger')
const deleteButton=document.querySelector("#delete")
const clearButton = document.querySelector("#clear")
const equalButton = document.querySelector("#equa")
const previousInputTextElement= document.querySelector('#previous-input')
const currentInputTextElement= document.querySelector('#current-input')

console.log(clearButton)
// console.log(equalButton)
// Creating a class constructor for building other calculators
class Calculator{
   constructor(previousInputTextElement,currentInputTextElement){
    this.previousInputTextElement= previousInputTextElement
    this.currentInputTextElement = currentInputTextElement
    this.clear()
    }

// creating rlevant functions to perform different tasks

 // this fucntion will help clear all the data in the results section 
 clear(){
    this.currentInput=""
    this.previousInput=""
    this.operation= undefined

}

// this is gonna help with deleting characters
delete(){
 
}

// this will append values in the result, currentinput section
appendNUmber(number){
 if(number=='.' && this.currentInput.includes('.')) return
 this.currentInput= this.currentInput.toString() + number.toString()
}

// this is gonna help withn the selected operation
chooseTrigger(operation){
 if(this.currentInput==='') return
 if(this.previousInput !== ''){
     this.compute()
 }
 this.operation = operation
 this.previousInput = this.currentInput
 this.currentInput=''
}

// to solve or find compution values will call for this fucntion

compute(){

}

//    update display wil help show the results after being computed
updateDisplay(){
 this.currentInputTextElement.innerText= this.currentInput
 this.previousInputTextElement.innerText= this.previousInput
 
}

}

const calculator = new Calculator(previousInputTextElement,currentInputTextElement)

numberButtons.forEach(button=>{
button.addEventListener( 'click',()=>{
    // console.log(button.innerText)
    calculator.appendNUmber(button.innerText)
    calculator.updateDisplay()
 
})
})

triggerButtons.forEach(button=>{
    button.addEventListener( 'click',()=>{
        // console.log(button.innerText)
        calculator.chooseTrigger(button.innerText)
        calculator.updateDisplay()
       
    })
    })


// deleteButton.addEventListener('click'=()=>{
//     console.log("hello man")
// })
// alert("hey i am okay")
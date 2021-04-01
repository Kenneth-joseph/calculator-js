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
    }

    // this fucntion will help clear all the data in the results section 
    clear(){

    }
// this is gonna help with deleting characters
    delete(){

    }
// this will append values in the result, currentinput section
    appendNUmber(number){

    }

// this is gonna help withn the selected operation
    chooseTrigger(trigger){

    }

// to solve or find compution values will call for this fucntion

   compute(){

   }

//    update display wil help show the results after being computed
  updateDisplay(){
      
  }
}


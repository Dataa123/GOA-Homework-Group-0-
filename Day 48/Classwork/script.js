// let currentDate = new Date()

// console.log(currentDate)

// console.log("Iron" + "Man")

// Creating constant variables of input elements with ids num1 and num2
const numInput1 = document.getElementById('num1');
const numInput2 = document.getElementById('num2');

// Creating constant variable of button type input element with id mybtn
const myBtn = document.getElementById('mybtn');

// Creating constant variable of p tag with id myp
const myP = document.getElementById('myp');

// Adding event listener to variable myBtn(button type input element)
// Giving it 'click' listener and creating function to sum 2 inputs as Numbers
myBtn.addEventListener('click',function(){
    let num1 = Number(numInput1.value);
    let num2 = Number(numInput2.value);

    myP.textContent = num1 + num2;
})


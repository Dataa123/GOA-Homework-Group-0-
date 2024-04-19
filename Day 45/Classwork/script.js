// let num1 = Number(prompt("Enter number: "));
// let num2 = Number(prompt("Enter number: "));
// let num3 = Number(prompt("Enter number: "));

// function threeMultiple(num1, num2, num3){
//     console.log(num1 + num2 + num3)
// }

// threeMultiple(num1, num2, num3)

// function myFunc(){
//     let num1 = Number(prompt())
//     let num2 = Number(prompt())
//     let num3 = Number(prompt())

//     let result = num1 + num2 + num3

//     return result
// }

// let result = myFunc();

// console.log(result)

// function myFunc(){
//     let num1 = 5
//     let num2 = 5

//     return num1 + num2
// }

// console.log(myFunc())

////////////////////////////////////////////////////////////////

// Task 1

// creating variable myBtn and connecting it with button with id 'mybtn' in html document
let myBtn = document.getElementById('mybtn')

// creating function named changeContent()
function changeContent(){
    // creating variables myP1 and myP2 and connecting it with p elements with ids: 'myp1' and 'myp2'
    let myP1 = document.getElementById('myp1');
    let myP2 = document.getElementById('myp2');

    // swapping their text contents
    myP1.textContent = "Bye byeeeee";
    myP2.textContent = "Hello World !";

    // giving them colors: red('myp1') and green('myp2')
    myP1.style.color = 'red';
    myP2.style.color = 'green';
}

// activating function name changeContent when myBtn is clicked
myBtn.onclick = changeContent

// Task 2

// creating function name multiply
function multiply(num1 = 1, num2 = 2, num3 = 3){
    // returning mathematical operation
    return ((num1 + num2) * num3);
}

// displaying answer in console 
let result = multiply(15, 15, 2);

console.log(result)
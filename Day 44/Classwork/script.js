function myFunc(){
    let num1 = 5
    let num2 = 10
    console.log(num1 + num2)
}
myFunc()

const myBtn = document.getElementById('mybtn');

// myBtn.addEventListener('click',function(){
//     myBtn.textContent = "Bye Bye"
// })

function changeBtn(){
    myBtn.textContent = "clicked";
    myBtn.style.color = "red";
}

myBtn.onclick = changeBtn;

function myFuncSecond(){
    let num3 = Number(prompt("Enter number 3: "));
    let num4 = Number(prompt("Enter number 4: "));

    console.log(num3 + num4)
}

myFuncSecond()
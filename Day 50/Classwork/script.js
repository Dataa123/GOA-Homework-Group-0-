// let a = 10
// let b = 15

// console.log(a > b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a >= b)
// console.log(a === b)

let checkBox = document.getElementById('accept');
let myP = document.getElementById('myp');
let myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click',function(n){
    n.preventDefault()
    let value = checkBox.checked;
    console.log(value);

    if(value === true){
        alert('Payment proceeded successfully')
    } else{
        alert("Payment didn't proceed successfully")
    }
})
let p = document.getElementById('myp');
let myBtn1 = document.getElementById('mybtn1');
let myBtn2 = document.getElementById('mybtn2');

myBtn1.addEventListener('click',function(){
    p.textContent = 'Goodbye World !'
})

myBtn2.addEventListener('click',function(){
    p.textContent = 'Hello World !'
})
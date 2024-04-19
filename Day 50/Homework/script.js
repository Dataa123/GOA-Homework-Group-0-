let withdraw = document.getElementById('withdraw');
let deposit = document.getElementById('deposit');
let money = document.getElementById('input');
let myP = document.getElementById('balance');

let balance = 0;

deposit.addEventListener('click', function(){
    money1 = parseFloat(money.value);
    balance += money1;

    myP.textContent = balance;

    money.value = "";
})

withdraw.addEventListener('click', function(){
    money2 = parseFloat(money.value);

    if(balance >  money2){
        balance -= money2;
    } else{
        alert("You don't have enough money")
    }
    myP.textContent = balance;
    money.value = "";
})
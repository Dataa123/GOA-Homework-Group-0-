const amount = document.getElementById("amount");
const term = document.getElementById("term");
const rate = document.getElementById("rate");
const myBtn = document.getElementById("mybtn");

const rightStart = document.getElementById("rightstart");
const right = document.getElementById("right");

const radio1 = document.getElementById("rep");
const radio2 = document.getElementById("int");
const radio1l = document.getElementById("radio1l");
const radio2l = document.getElementById("radio2l");

const amountInp = document.getElementById("amountinp");
const termInp = document.getElementById("terminp");
const rateInp = document.getElementById("rateinp");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

const money = document.getElementById("money");
const totalMoney = document.getElementById("totalmoney");

myBtn.addEventListener("click", function(e){
    e.preventDefault()

    if (amount.value == ""){
        amountInp.style.border = "1px solid red";
        span1.style.backgroundColor = "red";
        span1.style.color = "white";
    } else {
        amountInp.style.border = "1px solid hsl(200, 24%, 40%)";
        span1.style.backgroundColor = "hsl(202, 86%, 94%)";
        span1.style.color = "hsl(200, 24%, 40%)";
    }

    if (term.value == ""){
        termInp.style.border = "1px solid red";
        span2.style.backgroundColor = "red";
        span2.style.color = "white";
    } else {
        termInp.style.border = "1px solid hsl(200, 24%, 40%)";
        span2.style.backgroundColor = "hsl(202, 86%, 94%)";
        span2.style.color = "hsl(200, 24%, 40%)";
    }

    if (rate.value == ""){
        rateInp.style.border = "1px solid red";
        span3.style.backgroundColor = "red";
        span3.style.color = "white";
    } else {
        rateInp.style.border = "1px solid hsl(200, 24%, 40%)";
        span3.style.backgroundColor = "hsl(202, 86%, 94%)";
        span3.style.color = "hsl(200, 24%, 40%)";
    }

    if (radio1.checked == false && radio2.checked == false){
        radio1l.style.border = "1px solid red";
        radio2l.style.border = "1px solid red";
    }

    let p = amount.value;
    let r = rate.value / 100;
    let n = 12;
    let t = term.value;

    let calculation = p * (r / n) / (1 - (1 + r/n)**(-n*t))
    console.log(calculation)
    if (amount.value != "" && term.value != "" && rate.value != "" && (radio1.checked == true || radio1.checked == true)){
        rightStart.style.display = "none";
        right.style.display = "block";
    }
    
    money.textContent = `£${calculation}`.slice(0, 8)
    totalMoney.textContent = `£${calculation * (t * n)}`.slice(0, 10)
})

radio1.addEventListener('click', function(){
    radio1l.style.border = "1px solid hsl(61, 70%, 52%)";
    radio1l.style.backgroundColor = "hsl(61, 70%, 52%, 0.1)";
    radio2l.style.border = "1px solid hsl(200, 24%, 40%)";
    radio2l.style.backgroundColor = "white";
})

radio2.addEventListener('click', function(){
    radio2l.style.border = "1px solid hsl(61, 70%, 52%)";
    radio2l.style.backgroundColor = "hsl(61, 70%, 52%, 0.1)";
    radio1l.style.border = "1px solid hsl(200, 24%, 40%)";
    radio1l.style.backgroundColor = "white";
})
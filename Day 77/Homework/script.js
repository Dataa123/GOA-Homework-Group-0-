const myP1 = document.getElementById('ps1');
const myP2 = document.getElementById('ps2');
const myP3 = document.getElementById('ps3');

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let ps = [myP1.textContent, myP2.textContent, myP3.textContent]

let count = 0;
console.log(myP2)
console.log(myP3)

nextBtn.addEventListener('click', function(){
    count += 1;
    if (count >= ps.length){
        count = 0;
    }
    myP1.textContent = ps[count]
})

prevBtn.addEventListener('click', function(){
    count -= 1;
    if (count < 0){
        count = ps.length - 1;
    }
    myP1.textContent = ps[count]
})
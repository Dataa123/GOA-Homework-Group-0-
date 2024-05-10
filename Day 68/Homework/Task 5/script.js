const myPs = document.getElementsByTagName('p');
const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(){
    for (let i = 0; i < myPs.length; i++){
        if (myPs[i].className == 'myp'){
            myPs[i].style.color = 'red';
        };
    };
})

console.dir(myPs)
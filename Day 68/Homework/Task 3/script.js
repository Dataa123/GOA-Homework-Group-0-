const myBtn = document.getElementById('mybtn');
const myP = document.getElementsByClassName('myp');

myBtn.addEventListener('click', function(){
    for (let i = 0; i < myP.length; i++){
        myP[i].textContent = Math.floor(Math.random() * 10);
    }
})
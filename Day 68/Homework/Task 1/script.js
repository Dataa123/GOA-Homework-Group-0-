const div = document.getElementById('div');
const myP = document.getElementById('myp');
const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(){
    myP.textContent = Number(myP.textContent) + 1;
    div.style.backgroundColor = 'red';
    myP.style.color = 'white';
});
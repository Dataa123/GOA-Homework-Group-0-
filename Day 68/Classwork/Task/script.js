const div = document.getElementById('parent');
const children = document.getElementsByClassName('child');
const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(){
    div.style.flexDirection = 'column';
})


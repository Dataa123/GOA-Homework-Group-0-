const div = document.getElementById('div');
const link = document.getElementById('link');
const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(){
    div.style.backgroundColor = 'red';
    link.href = 'https://www.w3schools.com/js/js_random.asp';
})
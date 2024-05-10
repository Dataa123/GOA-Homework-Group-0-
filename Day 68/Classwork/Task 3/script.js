const myPs = document.getElementsByClassName('myp');
const myBtn = document.getElementById('add');

myBtn.addEventListener('click', function(){
    for (let i = 0; i < myPs.length; i++){
        myPs[i].textContent += " Diasamidze";
    }; 
})

// creating variables
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const ageInput = document.getElementById('age')
const submitInput = document.getElementById('submit')

submitInput.addEventListener('click',function(){
    console.log(nameInput.value);
    console.log(lastnameInput.value);
    console.log(ageInput.value);
})
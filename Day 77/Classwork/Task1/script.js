const parentDiv = document.getElementById('parent');
const childDiv = document.getElementById('child');
// bubling from nested to up
// capturing opposite of bubling
// type 1

// childDiv.addEventListener('click', function(){
//     parentDiv.style.backgroundColor = 'red';
//     childDiv.style.backgroundColor = 'green';
// }, false);

// type 2

parentDiv.addEventListener('click', function(){
    parentDiv.style.backgroundColor = 'red';
    childDiv.style.backgroundColor = 'green';
}, true);
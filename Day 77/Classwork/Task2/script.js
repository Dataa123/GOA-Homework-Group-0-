const children = document.getElementsByClassName('block');
const parentDiv = document.getElementById('div5');

parentDiv.addEventListener('click', function(){
    for (let i = 0; i < children.length; i++){
        console.log(children[i].id)
    }

}, true)
 
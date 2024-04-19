// 1) me object about myself and method to change name

const meObj = {
    name: "Data",
    lastName: "Diasamidze",
}

// 2) create object car and add information about it, and in that object create another object named engine and give it's detail, add one more object which returns engine object
const engine = {
    cylinderLiner: "New",
    valve: "Old"
}
const carObj = {
    color: "Black",
    model: "Mercedes",
    myFunc: function(){
        console.log(carObj.engine)
    },
    engine
}

carObj.myFunc()
// 3) create form (name, lastname, age, button), and store input information in object and console log it

let nameP = document.getElementById('name');
let lastName = document.getElementById('lastname');
let age = document.getElementById('age');
let myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(){
    console.log(nameP.value)
    console.log(lastName.value)
    console.log(age.value)
})
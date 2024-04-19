const me = {
    name: "Data",
    lastName: "Diasamidze",
    age: 16,
    bankAcc: {
        accountName: "Davit",
        accountId: "618063180"
    }
}

const you = {
    name: "Luka",
    lastName: "Tskhvaradze",
    age: 17,
    bankAcc: {
        accountName: "Luka",
        accountId: "0561512051"
    }
}

const administrator = {
    getName: function(accountObj, newName){
        accountObj.name = newName;
    },
    getLastName: function(accountObj, newLastName){
        accountObj.lastName = newLastName;
    },
    getAge: function(accountObj, newAge){
        accountObj.age = newAge
    }
}

administrator.getName(you, "Giorgi")

console.log(you)

let form = document.getElementById('form');
let myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(myObj){
    myObj = {
        number1: form.elements.num1.value,
        number2: form.elements.num2.value
    }
    console.log(myObj)
})

const arr = []

function addArr(num){
    arr.push(num)
}

addArr(5)
addArr(10)
addArr(15)
console.log(arr)
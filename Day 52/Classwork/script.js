let myP = document.getElementById('myp');
let myBtn = document.getElementById('btn');

function myFunc(){
    myP.textContent = "Hello World"
    myBtn.onmouseover = myHover
}

function myHover(){
    myP.textContent = "..."
}

myBtn.onclick = myFunc

// create 2 car's object (color, model, release date, how many doors, methods)

const carObj1 = {
    color: "Black",
    model: "Lexus",
    releaseDate: 2016,
    doorsCount: 4,
    methods: "Have radio, window cleaners, doors open automatically"
}

const carObj2 = {
    color: "Grey",
    model: "Mercedes",
    releaseDate: 1983,
    doorsCount: 4,
    methods: "No functions"
}

console.log(carObj1)
console.log(carObj2)
console.log("First car's color is:" + " " + carObj1.color)
console.log("Second car's color is:" + " " + carObj2.color)

// test

const cars = {
    carObj1,
    carObj2
}

console.log(cars.carObj1.color)

// extra

const myObj = {
    color: "Black",
    myFunc: function(){
        console.log("YEAAH BUDDYYYYYYY")
    }
}

myObj.myFunc()
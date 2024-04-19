const print = console.log;

print("Hello world")

// const myObj = {
//     name: "data",
//     age: 16,
//     notMyObj: {
//         notName: "not data",
//         notAge: 50,
//     },
//     myFunc: function(obj){
//         print(obj.name)
//     }
// }

// let x = 10;

// let referenceValue = myObj.name

// print(referenceValue)

// myObj.myFunc(myObj)


// let list = [1, 30, 4, 21, 100000]

// list.sort()

// print(list)

function Person(name){
    this.name = name;
};

const names = ["data", "data", "luka", "mate", "sandro", "vano"];
const accounts = [];

for (let i = 0; i < names.length; i++){
    accounts.push(new Person(names[i]));
};

print(accounts)

// let array = [5, 2400, 12500, 4, 3]

// array.sort(function(a,b){return a - b})
// print(array)

function Flying(id, status){
    this.id = id;
    this.status = status;
};

const fly1 = new Flying(5129862, "flying")

print(fly1)
// push function adds element to array

let myArr1 = [1, 2, 3, 4, 5]

myArr1.push(6)
myArr1.push("Hello world")

console.log(myArr1)

// splice function takes 2 arguments, first argument is which element we want to remove by index and second how many elements

let myArr2 = [1, 2, 3, 4, 5]

myArr2.splice(0, 3)

console.log(myArr2)

//--------------------

let myName = ["D", "a", "t", "a", "D", "i", "a", "s", "a", "m", "i", "d", "z", "e"]

myName.splice(4, 10)

console.log(myName)

//--------------------

const myObj = {
    name: "Data",
    lastName: "Diasamidze",
    age: 16
}

// there are 2 ways to take property from object
//1
console.log(myObj.name)
console.log(myObj.lastName)
console.log(myObj.age)
//2
console.log(myObj["name"])
console.log(myObj["lastName"])
console.log(myObj["age"])

// javascript have function length (same as len() in python)

let string = "Diasamidze"

console.log(string.length)

//---------------------

document.write("Hello world!")

//----------------------

const person = {
    name: "Data",
    lastName: "Diasamidze",
    age: 16,
    myFunc: function(){
        return "My name is" + " " + this.name + " " + "my age is" + " " + this.age
    }
}

console.log(person.myFunc())

// object consturtor

function goaLeaders(name, age, rate){
    this.name = name
    this.age = age
    this.rate = rate

};

goaLeaders("vano", 16, 10);

// or

const leaderVano = new goaLeaders("vano", 16, 10);
const leaderSandro = new goaLeaders("sandro", 16, 10);

console.log(leaderVano);
console.log(leaderSandro);
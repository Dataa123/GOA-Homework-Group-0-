// const person = {
//     name: "Data",
//     age: 16,
//     city: "Tbilisi"
// }

// console.log(person.name)

// person.age = 17

// person.country = "Georgia"

// person.greet = function(){
//     console.log("Hello " + person.name)
// }

// console.log(person)

// person.greet()

// const carObj1 = {
//     model: "mercedes",
//     releaseDate: 2019,
//     doors: 4
// }

// const carObj2 = {
//     model: "mercedes",
//     releaseDate: 2019,
//     doors: 4
// }

// if (carObj1 === carObj2){
//     console.log("carObj1 and carObj2 are the same")
// } else {
//     console.log("carObj1 and carObj2 are not the same")
// }

// const students = {
//     name1: "data",
//     age1: 16,
//     name2: "bagrati",
//     age2: 15
// }

// const school = {
//     name: "Vekua42",
//     students,
// }

// console.log(school)
// console.log(school.name)
// console.log(school.students.name1)

const calculator = {
    add: function(a,b){
        return a + b
    },
    substract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }

}

function method(a,b,methodName){
    if (methodName === "+"){
        console.log(calculator.add(a,b))
    } else if (methodName === "-"){
        console.log(calculator.substract(a,b))
    } else if (methodName === "*"){
        console.log(calculator.multiply(a,b))
    } else if (methodName === "/"){
        console.log(calculator.divide(a,b))
    }
}

method(5,5,"+")
method(5,5,"-")
method(5,5,"*")
method(5,5,"/")
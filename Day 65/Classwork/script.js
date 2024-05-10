// // let courses1 = new Array(5);

// // console.log(courses1)  // output: [ <5 empty items> ]

// // let courses2 = new Array();

// // courses2[6] = "Hello world"

// // console.log(courses2)
// // console.log(courses2[0])
// // console.log(courses2[6])

// // let courses = new Array("HTML", "CSS", "JavaScript");

// // courses[1] = "Python";

// // console.log(courses);

// // let c1 = ["HTML", "CSS"]
// // let c2 = ["JavaScript", "Python"]

// // let courses = c1.concat(c2)

// // console.log(courses)

// // const numbers = [1, 6, 13, 16, 19, 25, 90, 105, 106];

// // for (let i = 0; i < numbers.length; i++){
// //     console.log(numbers[i])
// // }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i] + " Even")
//     } else {
//         console.log(numbers[i] + " Odd")
//     }
// }

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = []

// for (let i = 0; i < numbers1.length; i++){
//     if (numbers[i] % 2 === 0){
//         newNumbers.push(numbers[i]);
//     } 
// }

// console.log(newNumbers)

// const arr = []
// let summ = 0

// for (let i = 0; i <= 100; i++){
//     if (i % 5 === 0){
//         arr.push(i);
//         summ += i
//     }
// }

// console.log(arr)
// console.log(summ)

// let summ2 = 0;
// let mult1 = 1;
// let arr1 = [];
// let arr2 = [];

// for (let i = 0; i < 10; i++){
//     let x = Number(prompt("Enter number: "));
//     summ2 += x;
//     mult1 *= x;
//     arr1.push(x ** 2);
//     arr2.push(Math.sqrt(x))
// };

// console.log(summ2);
// console.log(mult1);
// console.log(arr1);
// console.log(arr2);

let tickets = Number(prompt("Enter amount of tickets, you want to buy: "))
let arr = []

const Object = function(name, lastName, age, id){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
};

for (let i = 1; i <= tickets; i++){
    let name = prompt("Enter your name: ");
    let lastName = prompt("Enter your last name: ");
    let age = prompt("Enter your age: ");
    let id = Math.floor(Math.random() * 50)

    const tickObj = new Object(name, lastName, age, id);

    arr.push(tickObj);
};

console.log(arr)

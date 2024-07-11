// Function declarations and Arrow Functions:

// 1.

function twoSum(a, b){
    return a + b;
}

console.log(twoSum(5, 10));
console.log(twoSum(5, 15));

// 2.

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello world!"));
console.log(reverseString("Goal-Oriented Academy"));

// 3.

checkEven = (num) => {
    if(num % 2 == 0){
        return "It's Even";
    } else {
        return "It's Odd";
    }
}

console.log(checkEven(5));
console.log(checkEven(4));

// 4.

len = (arr) => {
    return arr.length
}

console.log(len([1, 2, 3, 4, 5]));
console.log(len([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5.

area = (width, height) => {
    return width * height
}

console.log(area(5, 5));
console.log(area(4, 5));

// 6.

function double(arr){
    const newArr = [];

    for(const n of arr){
        newArr.push(n);
        newArr.push(n);
    }

    return newArr;
}

console.log(double([1, 2, 3, 4, 5]));
console.log(double([1, 2]));

// 7.

function getBigger(str){
    return str.toUpperCase();
}

console.log(getBigger("Hello world!"));
console.log(getBigger("Astalavista baby"));

// 8.

filterOdd = (arr) => {
    const newArr = [];

    for(const n of arr){
        if (n % 2 == 0){
            newArr.push(n);
        }
    }

    return newArr
}

console.log(filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filterOdd([53, 10, 11, 22, 101]));

// 9.

function factorial(n){
    let summ = 1;

    for(let i = 1; i <= n; i++){
        summ *= i;
    }

    return summ;
}

console.log(factorial(5));
console.log(factorial(10));

// 10.

countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for(const i of str){
        if (vowels.indexOf(i) != -1){
            count += 1;
        }
    }

    return count;
}

console.log(countVowels("Hello world!"));
console.log(countVowels("Encryption"));

// Template Literals:

// 1.

let var1 = "Data";

console.log(`Hello ${var1}!`);

// 2.

let str1 = "Data";
let str2 = "Coding";

console.log(`Hello ${str1}! \nHow are you going in ${str2}?`);

// 3.

let num1 = 5;
let num2 = 10;

console.log(`${num1} + ${num2} = ${num1 + num2}`);

// 4.

let day = 5;
let month = 7;
let year = 2024;

console.log(`${day}/${month}/${year}`);

// 5.

let protocol = "https"
let domain = "Goal-Oriented.ge"
let path = "homeworks"

console.log(`${protocol}://${domain}/${path}`);

// 6.

let number1 = 7;
let number2 = 6;

console.log(`${number1} is ${number1 % 2 == 0 ? "Even" : "Odd"}`);
console.log(`${number2} is ${number2 % 2 == 0 ? "Even" : "Odd"}`);

// 7.

let street = "Moscow Avenue";
let city = "Tbilisi";
let zip = 4024;

console.log(`Street: ${street}; City: ${city}; Zip Code: ${zip}`);

// 8.

let paragraphOpen = "<p>";
let paragraphClose = "</p>";

console.log(`${paragraphOpen}Hello World${paragraphClose}`);

// 9.

const items = ["Item 1", "Item 2", "Item 3"];
const list = `
    <ul>
        ${items.map((item) => `<li>${item}</li>\n`).join("")}
    </ul>
`

console.log(list);

// 10.

function call(name){
    return `Hey ${name}`;
}

console.log(`She said: ${call("Jumber")}`);

// Short Conditionals:

// 1.

let numm = 5;

if(numm < 10 && numm % 2 != 0){
    console.log("Your odd number is less than 10.");
}

// 2.

let coins = 99;
let keys = 1;

if (coins > 99 || keys > 0){
    console.log("You completed the tour.");
} else {
    console.log("To complete the tour, you have to get minimum of 100 coins or get at least one key.");
}

// 3.

let i = 10;
let truth = i > 5 ? "Yes" : "No";

console.log(truth);

// 4.


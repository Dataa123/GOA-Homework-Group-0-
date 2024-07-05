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

// 1. Transforming Data:

const arr = [{"data": 17}, {"luka": 17}];
const newArr = arr.map((value) => {return Object.keys(value)});

console.log(newArr);

// 2. Prime or not:

const numArr = [4, 6, 7, 8, 9, 10, 11, 12, 13];
const newNums = numArr.map((value) => {return value % 2 == 0 || value % 5 == 0 || value % 3 == 0 ? false : true});

console.log(newNums);

// 3. Filtering Data:

const students = [{"data": 10}, {"luka": 5}];
const pass = students.filter((value) => {return Object.values(value) >= 8});

console.log(pass);

// 4. Finding Specific Values:

const files = ["image.jpg", "image.jpeg", "video.mp4", "image.png", "image (1).jpg"];
const filteredFiles = files.filter((value) => {return value.includes(".jpg")});

console.log(filteredFiles);

// 5. Manual map:

function manualMap(subFunc, arr){
    const newArr = [];

    for (let i = 0; i < arr.length; i++){
        newArr.push(subFunc(arr[i]))
    }
    return newArr
}

function addTwo(value){
    return value + 2
}

const result = manualMap(addTwo, [1,2,3,4,5])

console.log(result)

// 6. Manual filter:

function manualFilter(subFunc, numbers){
    const newArr = [];

    for (let i = 0; i < numbers.length; i++){
        if (subFunc(numbers[i]) == true){
            newArr.push(numbers[i])
        }
    }
    return newArr
}

const numbers = [1, 2, 3, 4, 5];

const result1 = manualFilter((value) => {
    return value >= 3
}, numbers)

console.log(result1)
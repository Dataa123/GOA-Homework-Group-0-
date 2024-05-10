// manual map

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

// manual min

function manualMin(numbers){
    minNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++){
        if (minNumber > numbers[i]){
            minNumber = numbers[i]
        }
    }
    return minNumber
}

console.log(manualMin([2,1,3,4,5]))
console.log(manualMin([5,4,1,3,2]))

// manual filter

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

// original map

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = numbers1.map(addTwo1)

function addTwo1(num){
    return num + 2
}

console.log(numbers2)

const names = ["data", "luka", "vano"]

const newNames = names.map(addSymbol)

function addSymbol(value){
    return value + "-"
}

console.log(newNames)

// Task 1

const arr1 = ["data", 1, 2, 3, 1.5, 6, 10.5]

const newArr1 = arr1.filter((value) => {return typeof(value) == 'number' && Number.isInteger(value)})

console.log(newArr1)

// Task 2

const intArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newIntArr = intArr.map((value) => {
    if (intArr.indexOf(value) % 2 == 0){
        return value * 2
    }
    return value
})

// or

const newIntArr2 = intArr.filter((_, index) => {return index % 2 == 0})

console.log(newIntArr)
console.log(newIntArr2)

const isValid1 = "luka1234".length >= 5 ? true : false
const isValid2 = "luka1234".length >= 9 ? true : false

console.log(isValid1)
console.log(isValid2)
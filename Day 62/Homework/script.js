//1 - sololearn

//2

function Constructor(name, lastName, id){
    this.name = name;
    this.lastName = lastName;
    this.id = id;
};

const student1 = new Constructor("Data", "Diasamidze", 51512921);
const student2 = new Constructor("Luka", "Tskhvaradze", 1836141);

console.log(student1);
console.log(student2);

//3

//1.
function Constructor1(name){
    this.name = name;
};

const human1 = new Constructor1("Data");

//2.
function Constructor2(num1, num2){
    this.num1 = num1
    this.num2 = num2
}

const multiply1 = new Constructor2(5, 10);

console.log(multiply1.num1 * multiply1.num2);

//3.
function Constructor3(part1, part2){
    this.part1 = part1;
    this.part2 = part2;
};

const word1 = new Constructor3("da", "ta");

console.log(word1.part1 + word1.part2)

//4.
function Constructor4(num3, num4){
    if (num3 > 0 && num4 > 0){
        this.num3 = num3;
        this.num4 = num4;
    } else {
        this.num4 = num3;
        this.num3 = num4;
    };
};

const compare1 = new Constructor4(5, -1);
const compare2 = new Constructor4(5, 1);

console.log(compare1)
console.log(compare2)

//5.
function Constructor5(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
};

const divide = new Constructor5(10, 5);

console.log(divide.number1 / divide.number2)

//4
// revising heap and stack

// The stack is used to store static data, whereas the heap is used to store dynamic data. (Google)

// The stack stores values of variables and little informations, heap stores objects and big informations, because stack has limit of amount of information and heap doesn't have it. Stack is faster though. (me)
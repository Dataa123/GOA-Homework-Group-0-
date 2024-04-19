function Person(name, lastName, age, consol){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.consol = consol;
};

let myFunc = function(){return this.name + " " + this.lastName + " " + this.age}

const me = new Person("Data", "Diasamidze", 16, myFunc)

console.log(me.consol())

// function Person(name, lastName, age){
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     this.consol = function(){
//         return this.name + " " + this.lastName + " " + this.age
//     };
// };

// const me = new Person("Data", "Diasamidze", 16)

// console.log(me.consol())


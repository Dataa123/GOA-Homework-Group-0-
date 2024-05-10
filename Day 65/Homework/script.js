//1. Coundown Timer:

function countDown(time){
    for (let i = time; i > 0; i--){
        console.log(i);
        if (i === 1){
            console.log("Time's up!")
        }
    };
}

countDown(25)

//2. Prime Number Printer:

function isPrime(num, i = 2){
    if (num <= 2){
        return num == 2
    } else if (num % i == 0) {
        return false
    } else if (i * i > num) {
        return true
    }
    return isPrime(num, i + 1)
}

console.log(isPrime(9))
console.log(isPrime(11))

//3. Object Information Display:

function objDisplay(myObj){
    console.log(myObj.name + " " + myObj.age + " " + myObj.occupation)
}

const person = {
    name: "Data",
    age: 16,
    occupation: "Programming"
}

objDisplay(person)

//4. Calculate Factorial:

function calculateFactorial(num){
    let calc = 1
    if (num < 0){
        return "Enter non-negative number"
    } else {
        for (let i = 1; i <= num; i++){
            calc *= i 
        }
        return calc
    }
}

console.log(calculateFactorial(5))
console.log(calculateFactorial(3))

//5. Array Summation:

function sumArray(numbers){
    let summ = 0
    numberArray = numbers.split(" ");
    for (let i = 0; i <= numberArray.length; i++){
        summ += Number(i)
    }
    return summ
}

console.log(sumArray("1 2 3 4 5"))
console.log(sumArray("1 2 3 4 5 6 7 8 9 10"))

//6. Fruit Basket:

const fruitArr = []

function addFruit(name, color){
    const Fruit = function(name, color){
        this.name = name;
        this.color = color;
    };

    const fruit = new Fruit(name, color);
    return fruit
};

fruitArr.push(addFruit("apple", "red"))
fruitArr.push(addFruit("banana", "yellow"))

for (let i = 0; i < fruitArr.length; i++){
    console.log(fruitArr[i])
}

console.log(fruitArr)

//7. Car Inventory:

const carsArr = []

function addCar(brand, color, year){
    const Car = function(brand, color, year){
        this.brand = brand;
        this.color = color;
        this.year = year;
    };

    const car = new Car(brand, color, year);
    return car
};

carsArr.push(addCar("BMW", "Black", 1993))
carsArr.push(addCar("Lexus", "Black", 1995))

for (let i = 0; i < carsArr.length; i++){
    console.log(carsArr[i])
}

console.log(carsArr)

//8. Shopping List:

const shoppingArr = []

function addItem(name, quantity){
    const Item = function(name, quantity){
        this.name = name;
        this.quantity = quantity;
    };

    const item = new Item(name, quantity);
    return item
};

shoppingArr.push(addItem("apple", 5))
shoppingArr.push(addItem("chocolate", 2))

for (let i = 0; i < shoppingArr.length; i++){
    console.log(shoppingArr[i])
}

console.log(shoppingArr)

//9. Student Attendance Tracker:

const studentArr = []

function addStudent(name, attendance){
    const Student = function(name, attendance){
        this.name = name;
        this.attendance = attendance;
    };

    const student = new Student(name, attendance);
    return student
};

studentArr.push(addStudent("Data", "100%"))
studentArr.push(addStudent("Luka", "90%"))

for (let i = 0; i < studentArr.length; i++){
    console.log(studentArr[i])
}

console.log(studentArr)

//10. Daily Planner:

const tasksArr = []

function addTask(description, priority){
    const Task = function(description, priority){
        this.description = description;
        this.priority = priority;
    };

    const task = new Task(description, priority);
    return task
};

tasksArr.push(addTask("Brush your teeth", "better health"))
tasksArr.push(addTask("Learn programming", "better future"))

for (let i = 0; i < tasksArr.length; i++){
    console.log(tasksArr[i])
}

console.log(tasksArr)

//11. Bookshelf Organizer:

const bookShelf = []

function addBook(title, author){
    const Book = function(title, author){
        this.title = title;
        this.auauthor =author;
    };

    const book = new Book(title, author);
    return book
};

bookShelf.push(addBook("Harry potter", "J.K Rowling"))
bookShelf.push(addBook("1984", "George Orwell"))

for (let i = 0; i < bookShelf.length; i++){
    console.log(bookShelf[i])
}

console.log(bookShelf)

//12. Garden Plant Tracker:

const plantsArr = []

function addPlant(name, schedule){
    const Plant = function(name, schedule){
        this.name = name;
        this.schedule = schedule;
    };

    const plant = new Plant(name, schedule);
    return plant
};

plantsArr.push(addPlant("Rose", "12 P.M 2 times a week"))
plantsArr.push(addPlant("Mango", "3 P.M 4 times a week"))

for (let i = 0; i < plantsArr.length; i++){
    console.log(plantsArr[i])
}

console.log(plantsArr)

//13, 14, 15 still the same.......
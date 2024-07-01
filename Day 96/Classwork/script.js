// 1.

const prom1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello world!");
    }, 2000)
});

prom1.then((res) => console.log(res))

// 2.

const prom2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 3000);
});

prom2.then((rej) => console.log(rej));

// 3.

const prom3 = new Promise((resolve) => {
    resolve(5);
})

prom3
    .then((number) => {
        return new Promise((resolve) => {
            resolve(number + 10)
        });
    })
    .then((res) => console.log(res));

// 4.

const prom4 = new Promise((resolve) => {
    resolve([1, 2, 3, 4, 5]);
})

prom4.then((numbers) => {
    for(const num of numbers){
        console.log(num);
    }
});

// 5. 

const prom5 = new Promise((resolve) => {
    resolve("HELLO WORLD");
})

prom5
    .then((str) => {
        return new Promise((resolve) => {
            resolve(str.toLowerCase());
        })
    })
    .then((result) => console.log(result));

// 6.

fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.log("Error reason:", err));


// 7. 

const prom6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Life is good");
    }, 1000)
    
})
const prom7 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Roses are red");
    }, 2000)
})

prom6
    .then((res) => {
        console.log(res);
        return prom7;
    })
    .then((res) => console.log(res));

// 8.

const date = new Date();

function consoleTime(){
    return `Date: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} \nTime: ${date.getHours()}:${date.getMinutes()}`;
}

const prom8 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(consoleTime());
    }, 1000);
});

prom8
    .then((result) => console.log(result));

// 9.

let number = 0.1;

const prom9 = new Promise((resolve, reject) => {
    if(number > 0.5){
        resolve(number);
    } else {
        reject(number);
    }
});

prom9
    .then((result) => console.log("Your number is greater than 0.5:", result))
    .catch((err) => console.log("Reject reason:", err));

// 10.

const prom10 = new Promise((resolve) => {
    resolve(1);
});

function addOne(num){
    return num + 1;
}

prom10
    .then((res) => {
        return new Promise((resolve) => {
            resolve(addOne(res));
        })
    })
    .then((result) => console.log(result));
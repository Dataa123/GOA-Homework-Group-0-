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
        reject("Task 2 Failed!");
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
            resolve(number * 2)
        });
    })
    .then((res) => console.log(res));

// 4.

function func1(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("First"), 2000)
    })
    .then((res) => {
        console.log(res)
        return new Promise((resolve) => setTimeout(() => resolve("Second"), 1000))
    })
    .then((res) => console.log(res))
}

func1();

// 5. 

function func2(){
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 Failed"), 2000)
    })
    .catch((err) => console.log(err));
}

func2();

// 6.

function func3(){
    let delay = Math.floor(((Math.random() * 6)) * 1000)
    return new Promise((resolve) => {
        setTimeout(() => {resolve("Task 1 complete")}, delay)
    })
    .then((res) => console.log(res))
}

func3()

// 7. 

function func4(){
    let delay = Math.floor(((Math.random() * 3)) * 1000)
    return new Promise((resolve) => {
        setTimeout(() => {resolve("Task 1 complete")}, delay)
    })
    .then((res) => {
        console.log(res)
        return new Promise((resolve) => {
            setTimeout(() => (resolve("Task 2 complete")), delay)
        })
    })
    .then((result) => console.log(result))
}

func4()

// 8.

function func5(){
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    return new Promise((_, reject) => {
        setTimeout(() => {reject("Task 3 failed")}, delay)
    })
    .catch((err) => console.log(err))
}

func5()

// 9.

function func6(){
    let delay = Math.floor(((Math.random() * 5)) * 1000)
    let random = ((Math.random() * 1))
    return new Promise((resolve) => {
        if (random > 0.5){
            setTimeout(() => {resolve("Task 1 complete")}, delay)
        } else {
            setTimeout(() => {resolve("Task 1 was quick")}, delay)
        }
    })
    .then((res) => {
        console.log(res)
    })
}

func6()

// 10.

function func7(){
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    let random = ((Math.random() * 1))
    return new Promise((resolve, reject) => {
        if(random < 0.3){
            setTimeout(() => reject("Task 3 failed"), delay)
        } else {
            setTimeout(() => resolve("Task 3 complete"), delay)
        }
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

func7()

// 11.

const promise1 = new Promise((resolve) => resolve("Promise 1"));
const promise2 = new Promise((resolve) => resolve("Promise 2"));
const promise3 = new Promise((resolve) => resolve("Promise 3"));

Promise.all([promise1, promise2, promise3]).then((results) => console.log(results));

// 12.

const promise4 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    setTimeout(() => resolve("Promise 4"), delay)
});
const promise5 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    setTimeout(() => resolve("Promise 5"), delay)
});
const promise6 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    setTimeout(() => resolve("Promise 6"), delay)
});

Promise.all([promise4, promise5, promise6]).then((results) => console.log(results));

// 13.

const promise7 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 7"), 1000)
});
const promise8 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 8"), 1500)
});
const promise9 = new Promise((_,reject) => {
    setTimeout(() => reject("Promise 9"), 2000)
});

Promise.all([promise7, promise8, promise9]).then((results) => console.log(results)).catch((err) => console.log(err));

// 14.

const promise10 = new Promise((resolve, reject) => {
    let random = ((Math.random() * 1))
    if (random > 0.5){
        resolve("Hello world");
    } else {
        reject("Bye world");
    }
});
const promise11 = new Promise((resolve, reject) => {
    let random = ((Math.random() * 1))
    if (random > 0.5){
        resolve("Hello world");
    } else {
        reject("Bye world");
    }
});
const promise12 = new Promise((resolve, reject) => {
    let random = ((Math.random() * 1))
    if (random > 0.5){
        resolve("Hello world");
    } else {
        reject("Bye world");
    }
});

Promise.all([promise10, promise11, promise12]).then((result) => console.log(result)).catch((err) => console.log(err));

// 15.

const promise131 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    setTimeout(() => resolve(5), delay)
});
const promise141 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    setTimeout(() => resolve(5), delay)
});
const promise151 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000)
    setTimeout(() => resolve(5), delay)
});

Promise.all([promise131, promise141, promise151]).then((results) => {
    let sum = results.reduce((acc, num) => acc + num, 0);
    console.log(sum)
});

// 16.

const promise13 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1"), 1000)
});
const promise14 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2"), 2000)
});
const promise15 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3"), 3000)
});

Promise.race([promise13, promise14, promise15]).then((result) => {console.log(result)});

// 17.

const promise16 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000);
    setTimeout(() => resolve("Promise 1"), delay);
})
const promise17 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000);
    setTimeout(() => resolve("Promise 2"), delay);
})
const promise18 = new Promise((resolve) => {
    let delay = Math.floor(((Math.random() * 4)) * 1000);
    setTimeout(() => resolve("Promise 3"), delay);
})

Promise.race([promise16, promise17, promise18]).then((result) => console.log(result));

// 18.

const promise19 = new Promise((resolve) => {
    setTimeout(() => resolve("Slow"), 1000)
});
const promise20 = new Promise((resolve) => {
    setTimeout(() => resolve("Slow"), 2000)
});
const promise21 = new Promise((resolve) => {
    resolve("Instant promise")
});

Promise.race([promise19, promise20, promise21]).then((result) => console.log(result));

// 19.

const promise22 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise complete"), 1000)
});
const promise23 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise complete"), 2000)
});
const promise24 = new Promise((_, reject) => {
    setTimeout(() => reject("Promise failed"), 2000)
});

Promise.race([promise22, promise23, promise24]).then((res) => console.log(res)).catch((err) => console.log(err));

// 20.

const promise25 = new Promise((resolve) => {
    let random = ((Math.random() * 1));
    if (random > 0.5){
        resolve("Hello world");
    } else {
        setTimeout(() => {
            resolve("Hello world after 2 seconds");
        }, 2000);
    }
});
const promise26 = new Promise((resolve) => {
    let random = ((Math.random() * 1));
    if (random > 0.5){
        resolve("Hello world");
    } else {
        setTimeout(() => {
            resolve("Hello world after 2 seconds");
        }, 2000);
    }
});
const promise27 = new Promise((resolve) => {
    let random = ((Math.random() * 1));
    if (random > 0.5){
        resolve("Hello world");
    } else {
        setTimeout(() => {
            resolve("Hello world after 2 seconds");
        }, 2000);
    }
});

Promise.race([promise25, promise26, promise27]).then((res) => console.log(res));

// 21.

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

// Rest in index.html document
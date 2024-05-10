// let d = new Date()

// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.setFullYear())
// d.setFullYear()

// let seconds = 10;
// let minutes = 1;

// const timer = setInterval(function(){
//     seconds--;
//     console.log(seconds,minutes)
//     if (seconds === 0){
//         minutes--;
//         seconds = 10;
//         if (minutes === 0){
//             console.log("Signed out")
//             clearInterval(timer)
//         }
//     }
// }, 1000)

//1
// setInterval(function(){
//     const date = new Date()
//     console.log(date.toString())
// }, 1000)

//2
// let d = new Date()

// console.log(`Hours: ${d.getHours()} Minutes: ${d.getMinutes()} Seconds: ${d.getSeconds()}`)

let seconds = 60
let minutes = 4

const timer = setInterval(function(){
    seconds--;
    console.log(minutes + ":" + seconds)
    if (seconds === 0){
        minutes--;
        seconds = 60
        if (minutes === 0){
            clearInterval(timer)
            console.log("Time's up")
        }
    }
}, 100)
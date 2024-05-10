//1

// let date = new Date()

// setInterval(function(){
//     const date = new Date()
//     console.log(date.toString())
// }, 1000)

//2

// function circleArea(radius){
//     return Math.floor(Math.PI * radius ** 2)
// }

// console.log(circleArea(5))

//3

// function convertCase(str){
//     return str.split(" ").join("-")
// }

// console.log(convertCase("Hello world"))

// 4

// function Timer(targetDate){
//     let minutes = targetDate
//     let startSecond = 0
//     let startMinute = 0
//     const timer = setInterval(function(){
//         startSecond++;
//         console.log(startMinute + ":" + startSecond)
//         if (startSecond == 60){
//             startMinute++;
//             startSecond = 0
//             if(startMinute == minutes){
//                 console.log("Time's up")
//                 clearInterval(timer)
//             }
//         }
//     }, 100)
// }

// Timer(2)

//5

function getDay(){
    let d = new Date()
    const myObj = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    let num = d.getDay()
    
    return myObj[num]
}

console.log(getDay())
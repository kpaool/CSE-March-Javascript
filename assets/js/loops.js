
// --for loop ------------------------
let sumTo10 = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// console.log(sumTo10)


let sum = 0 //  global variable
for (let i = 1; i <= 10; i++) {
    sum = sum + i
}

// console.log(sum)




// 350,000.   
let sales = [
    350_000,
    400_000,
    750_000,
    35_000,
    34_000
]

let totalSales = 0

for (let i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i]
}

// console.log(totalSales)


let forOfSum = 0
for (const element of sales) {
    forOfSum += element // forOfSum = forOfSum + element
}
// console.log(forOfSum)

// --for loop ------------------------





let numberOfAttempts = 0
let maxAttempts = 5

// while (numberOfAttempts < maxAttempts) {
//     console.log("Please login again")

//     numberOfAttempts += 1
// }

// if (numberOfAttempts >= 5) {
//     console.log("Sorry, your account has been blocked")
// }







//


let currentIndex = 0
let newSalesTotals = 0

while (currentIndex < sales.length) {
    // console.log(`Current Index: ${currentIndex}, the value is ${sales[currentIndex]}`)
    newSalesTotals = newSalesTotals + sales[currentIndex]
    currentIndex += 1
}

// console.log(newSalesTotals)




for (let i = 1; i < 10; i++) {

    if (i % 3 === 0) {
        continue
    }
    // console.log(i)
}



//while loop ------------------------


let trafficLight = "green"

let timePassed = 0 // time in seconds
while (trafficLight === "red" || trafficLight === "orange") {

    console.log("Please stop, dont go", trafficLight)

    if (timePassed >= 10) {
        trafficLight = "green"
    }
    if (timePassed === 5) {
        trafficLight = "orange"
    }

    timePassed = timePassed + 1 // timePassed++.//. timePassed --

}

if (trafficLight === "green") {
    console.log("You can go now")
}

let ages = [23, 4, 54, 12, 40]

let _sum = 0
for (let i = 0; i < ages.length; i++) {
    _sum += ages[i]
}

console.log(_sum / ages.length)


let height = [130, 170, 180, 165, 178, 190]






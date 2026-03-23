// loose eqaulity

let amount = "1000"
let amountFromDB = 5000

// console.log(amount == amountFromDB)

// strict equality operator

// console.log( amount === amountFromDB)

let userCredentials = "thembo"

// console.log(userCredentials === null)


// loose inequality !=

// console.log(amount != amountFromDB)

// strict inequality !==

// console.log(amount !== amountFromDB)


// greater operator >

// console.log(amount > amountFromDB)

// less than operations < 

// console.log(amount < amountFromDB)




let reportedAge = 16
let actualAge = 33

let gender = "F"

// console.log(reportedAge !== actualAge)


// check if the user is 18 years or more, and is a male

let isAMan = gender === "M" && reportedAge >= 18

// console.log(isAMan)


let isAPublicHoliday = false
let isAWeekend = false

// console.log(isAPublicHoliday || isAWeekend)

// console.log((gender === "M" && reportedAge >= 18) || (isAPublicHoliday || isAWeekend))



let isNotLoggedIn = !userCredentials

console.log(isNotLoggedIn)


// admins should have the permission to add users 

let userRole = "sales-manager"


// console.log(userRole==="admin")

let num = 3223
// console.log(num.length)


let darkMode = false;
console.log("Is dark mode active:", darkMode)

darkMode = !darkMode
console.log("Is dark mode active:", darkMode)
let firstName = "Faith"
let lastName = "Ahaisibwe"

// let _fullName = "The well formatted full name is: " + firstName + " " + lastName

let fullName = `${firstName} ${lastName}`
// console.log(fullName)
// console.log(`The length of full name is ${fullName.length}`)

let phoneNumber = "0709123122"
// console.log(phoneNumber.length)

// we want to get the initials of the user 


let initials = `${firstName[0]}.${lastName[0]}`
// console.log(initials)

// console.log("This is to upper case all characters",firstName.toUpperCase())
// console.log("This is to lower case all characters",firstName.toLowerCase())


let transactionId = "TXN23221saasFSDF234"

let NIN = "CM1231231231231"
let _NIN = "CF2324232e23"

// console.log(transactionId.substring(2,5))

// console.log(NIN.substring(0,2))
// console.log(_NIN.substring(0,2))


// Faith Ahaisibwe

console.log(fullName.split(" "))

let email = "biyinzika.rihanna@refactory.academy"

console.log(email.split("@"))

console.log(firstName.at(0))

let password = "12345 "  // their password as 12345 without the space
console.log(password,"|")
console.log(password.trim(),"|")

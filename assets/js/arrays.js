
let items = ["nails", "cement", "bricks", "nails", "iron sheets", "timber", "nails", "paint", "vanish"]

let ages = [34, 34, 54, 1, 23, 34, 32, 23]
// console.log(items)
// console.log(ages)


// console.log(items.length)

// console.log(items[0])
let lastIndex = items.length - 1
// console.log(items[lastIndex], lastIndex)

// console.log(items)

items.push("rubbers sealing", "filler")

// console.log(items)

items.unshift("sand paper")

// console.log(items)

items.pop() // removes at the end

items.shift() //removes at the beginning 
items.pop() // removes at the end

items.shift() //removes at the beginning 

// console.log(items)

items.splice(2, 1)
// console.log(items)
let userInput = "cement "
let searchIndex = items.indexOf(userInput)

// console.log(items[0].indexOf("m"))


if (searchIndex !== -1) {
    // console.log(`The index of ${userInput} is ${searchIndex}`)
} else {
    // console.log(`${userInput} was not found in the search`)
}


// console.log(items)

// let doesExist = items.includes(userInput.trim())
// console.log(doesExist)

items.splice(1, 4)

console.log(items)


lastIndex = items.length - 1

console.log(items[lastIndex])



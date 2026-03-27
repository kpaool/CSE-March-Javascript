

function sum(numbers) {
    let _sum = 0
    for (let i = 0; i < numbers.length; i++) {
        _sum += numbers[i]
    }
    return _sum
}


function average(numbers) {
    let average = sum(numbers) / numbers.length
    return average
}



let ages = [23, 4, 54, 12, 40]
let height = [130, 170, 180, 165, 178, 190]


let heightAverage = average(height)
// let ageAverage = average(ages)



// console.log(`The average height is ${heightAverage}`)
// console.log(`The average age is ${ageAverage}`)

// use it in calculating standard deviation



function totalCost(quantity, costPrice, tax = 0.18) {
    let total = quantity * costPrice
    let taxValue = total * tax
    let grandTotal = total + taxValue

    return grandTotal // grand total
}

let _totalCost = totalCost(1000, 35000)
console.log(`The total cost of cement is ${_totalCost}`)



// write a function called checkTonnage

/**
 * This function should be able to take in an argument, number
 * 
 * return true if the number > 10 else return false
 * 
 */



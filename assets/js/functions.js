

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
// console.log(`The total cost of cement is ${_totalCost}`)



// write a function called checkTonnage

/**
 * This function should be able to take in an argument, number
 * 
 * return true if the number > 10 else return false
 * 
 */


/**
 * 
 * @param {*} quantity 
 * @param {*} costPrice 
 * @param {*} tax if the tax is a decimal 0.18 = 18%
 * @returns 
 */
function calculateTotalCost(quantity, costPrice, tax) {
    let subtotal = quantity * costPrice
    let taxValue = subtotal * tax
    let grandTotal = subtotal + taxValue
    return grandTotal  // quantity * costPrice * (1+tax)
}

let _taxInclTotal = calculateTotalCost(500, 10_000, 0.18)
console.log(`The total cost of cement is ${_taxInclTotal}`)


const calcTotalCost = (quantity, costPrice, tax) => quantity * costPrice * (1 + tax)


let _taxInclTotal2 = calcTotalCost(500, 10_000, 0.18)
console.log(`The total cost of cement is ${_taxInclTotal2}`)






// function declartions 
function deleteSale(params, param2, param3) {
    //body
    return params + param2 + param3
}

// function expressions
const denoteSale = function (quantity, param2, param3) {
    //body
    return quantity + param2 + param3
}

// arrow functions 
const variable = (params) => {
    //body
    return params
}










// function expressions. ---------


function addSale1(itemName, customerName, quantity, unitPrice, salesTax, isCredit) {
    console.log(`The product ${itemName} has been sold to ${customerName} for a total of ${calculateTotalCost(quantity, unitPrice, salesTax)} and ${isCredit ? 'was' : "wasn't"} sold on credit `)
}


const addSale2 = function (itemName, customerName, quantity, unitPrice, salesTax, isCredit) {
    // write code for executing the process of adding a sale
    console.log(`The product ${itemName} has been sold to ${customerName} for a total of ${calculateTotalCost(quantity, unitPrice, salesTax)} and ${isCredit ? 'was' : "wasn't"} sold on credit `)
}

const addSale3 = (itemName, customerName, quantity, unitPrice, salesTax, isCredit) => {
    console.log(`The product ${itemName} has been sold to ${customerName} for a total of ${calculateTotalCost(quantity, unitPrice, salesTax)} and ${isCredit ? 'was' : "wasn't"} sold on credit `)
}


// addSale1("Paint", "Priscilla", 5, 50_000, 0.18, true)
// addSale2("Cement", "Maria", 1000, 35_000, 0.18, false)
// addSale3("Nails", "Maria", 3, 6000, 0.18, false)


let x = 0

function scope() {
    // local scope 
    // let x = 10
    return x
    console.log(x)
}

function login(username, password) {

    if (!username || !password) {
        return false
    }

    /**
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */

    return true
}






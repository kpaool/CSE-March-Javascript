

const items = ["cement", "nails", "paint", "bricks", "sand"]


items.forEach((value, index) => {
    // console.log(value, index)
})


function log(callback) {
    callback()
}

log(() => {
    console.log("Sale log: Added a new sale number 1")
})


function createCalculator(operation) {
    if (operation == "add") {
        return function (a, b) {
            return a + b
        }
    }

    if (operation == "subtract") {
        return function (a, b) {
            return a - b
        }
    }

    if (operation == "multiply") {
        return function (a, b) {
            return a * b
        }
    }

    if (operation == "divide") {
        return function (a, b) {
            return a / b
        }
    }

}


const add = createCalculator("add")
const multiply = createCalculator("multiply")

// console.log(add(10, 20))
// console.log(multiply(10, 20))


let prices = [35_000, 23_000, 5_000, 46_000]
prices = prices.map((value, i) => value * 2)


console.log(prices)
let firstNames = ["Alphonsine", "Irene", "Daniella", "Samuel"]

firstNames = firstNames.map((name) => name.toUpperCase())
console.log(firstNames)


prices = prices.filter((price) => price >= 50_000)
console.log(prices)

let sale1 = {
    customerName: "Maria",
    itemName: "Paint",
    itemCost: 50_000,
    quantity: 5,
    tax: 0.18,
    isCredit: true
}

let sale2 = {
    customerName: "Priscilla",
    itemName: "Cement",
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: false,
    phoneNumbers: ['07823234422', '07012353232'],
    "purchase Date": new Date()
}

let sales = [sale1, sale2]



// sales = sales.filter((sale) => sale.isCredit == true)

// console.log(sales)

sales.push({
    customerName: 'Maria',
    itemName: 'Cement',
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: true
})
// console.log(sales)

const calcTotalCost = (quantity, costPrice, tax) => quantity * costPrice * (1 + tax)


let totalSales = sales.reduce((acc, sale) => {
    return acc + calcTotalCost(sale.quantity, sale.itemCost, sale.tax)
}, 0)

// console.log(totalSales)







let ages = [23, 12, 3, 45, 34, 12]

let sumOfAges = ages.reduce((acc, age) => {
    return acc + age
}, 0)

console.log(sumOfAges)


let _totalSales = sales.reduce((acc, sale) => {
    return acc + calcTotalCost(sale.quantity, sale.itemCost, sale.tax)
}, 0)

console.log(_totalSales)



let heights = [156, 150, 187, 164, 156]

let sumOfHeights  = heights.reduce((previousAccValue, elementValue) => {
    return previousAccValue + elementValue
 }, 0)

 console.log(sumOfHeights/heights.length)




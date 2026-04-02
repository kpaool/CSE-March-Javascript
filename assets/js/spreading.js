

const age = [12, 34, 23, 12, 53, 23, 34, 32, 12]
const ageOld = [66, 87, 34, 66, 76]


console.log(...age)

let newAge = [...age]

age.pop()

let newAges = [...age, ...ageOld]

// console.log(newAge, newAge.length)

console.log(newAges)


let sale = {
    customerName: "Tendo",
    itemName: "Cement",
    quantity: 1000,
    costPrice: 35_000,
    tax: 0.18,
    isCredit: false
}

let credifInformation = {
    customerName: "Tendo S",
    dueDate: "2026-04-01",
    closingBalance: 50000
}


let newSale = { ...sale }

let brandNewSale = { ...sale, ...credifInformation, dueDate: new Date("2026-03-31").toISOString() }

console.log(newSale)

console.log(brandNewSale)

sale.customerName = "Paul"

console.log(newSale)




function add(a, b, ...numbers) {
    console.log(numbers)

    return numbers.reduce((acc, number) => acc + number, 0)
}




console.log(add(1, 3, 5, 7, 8, 9, 8, 5, 4, 34, 53, 34))


